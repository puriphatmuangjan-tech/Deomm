// FRIDAY local server: เสิร์ฟเกม + API (/game/api/*) + หน้าเจนโค้ด (/admin)
// รัน: node server.js   แล้วเปิด http://localhost:3000/  และ  http://localhost:3000/admin
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = 3000;
const ROOT = __dirname;
const GAME_DIR = path.join(ROOT, 'friday2022-3a53c.web.app');
const DATA_DIR = path.join(ROOT, 'us-central1-jarvis-24webservice.cloudfunctions.net', 'game', 'api');
const ADMIN_DIR = path.join(ROOT, 'admin');
const CODES_FILE = path.join(ROOT, 'codes.json');
const STORAGE_DIR = path.join(ROOT, 'storage.googleapis.com');

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg', '.ttf': 'font/ttf', '.cconb': 'application/octet-stream', '.svg': 'image/svg+xml',
};

// ---------- เก็บโค้ด ----------
function loadCodes() {
  try { return JSON.parse(fs.readFileSync(CODES_FILE, 'utf8')); } catch { return {}; }
}
function saveCodes(codes) {
  fs.writeFileSync(CODES_FILE, JSON.stringify(codes, null, 2));
}
// โค้ดเป็นตัวเลข 6 หลัก (000000–999999)
function newCode(existing) {
  let c;
  do { c = String(crypto.randomInt(1000000)).padStart(6, '0'); } while (existing[c]);
  return c;
}
function addTime(date, n, unit) {
  const d = new Date(date);
  if (unit === 'day') d.setDate(d.getDate() + n);
  else if (unit === 'hours') d.setHours(d.getHours() + n);
  else d.setMinutes(d.getMinutes() + n);
  return d;
}

// ---------- helpers ----------
function send(res, status, body, type = 'application/json; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': type,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
  });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}
function readBody(req) {
  return new Promise((resolve) => {
    let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => resolve(b));
  });
}
function serveStatic(res, baseDir, urlPath) {
  const rel = decodeURIComponent(urlPath).replace(/^\/+/, '') || 'index.html';
  const file = path.normalize(path.join(baseDir, rel));
  if (!file.startsWith(baseDir)) return send(res, 403, 'Forbidden', 'text/plain');
  fs.stat(file, (err, st) => {
    if (err) { logMissing(urlPath); return send(res, 404, 'Not found', 'text/plain'); }
    const f = st.isDirectory() ? path.join(file, 'index.html') : file;
    fs.readFile(f, (e, data) => {
      if (e) return send(res, 404, 'Not found', 'text/plain');
      send(res, 200, data, MIME[path.extname(f).toLowerCase()] || 'application/octet-stream');
    });
  });
}

const MISSING_LOG = path.join(ROOT, 'missing.log');
function logMissing(urlPath) {
  if (urlPath.startsWith('/admin') || urlPath.startsWith('/.well-known')) return;
  console.log('404 ไม่พบไฟล์:', urlPath);
  try {
    const seen = fs.existsSync(MISSING_LOG) ? fs.readFileSync(MISSING_LOG, 'utf8').split('\n') : [];
    if (!seen.includes(urlPath)) fs.appendFileSync(MISSING_LOG, urlPath + '\n');
  } catch {}
}

// ---------- routes ----------
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const p = url.pathname;
  if (req.method === 'OPTIONS') return send(res, 204, '');

  // --- Game API ---
  if (p === '/game/api/allgames' || p === '/game/api/allcompany') {
    const name = p.endsWith('allgames') ? 'allgames.html' : 'allcompany.html';
    return fs.readFile(path.join(DATA_DIR, name), 'utf8', (e, d) => {
      if (e) return send(res, 500, { error: e.message });
      // ให้รูปโหลดผ่าน server นี้แทน storage.googleapis.com
      send(res, 200, d.split('https://storage.googleapis.com/').join(`http://${req.headers.host}/storage/`));
    });
  }

  // --- รูปไอคอน/โลโก้ค่าย: ใช้ไฟล์ในเครื่องก่อน ถ้าไม่มีจะโหลดจากต้นฉบับแล้วเก็บไว้ ---
  if (p.startsWith('/storage/')) {
    const rel = decodeURIComponent(p.slice('/storage/'.length));
    const base = path.normalize(path.join(STORAGE_DIR, rel));
    if (!base.startsWith(STORAGE_DIR)) return send(res, 403, 'Forbidden', 'text/plain');
    const candidates = path.extname(base) ? [base] : [base + '.png', base];
    for (const f of candidates) {
      if (fs.existsSync(f) && fs.statSync(f).isFile()) return send(res, 200, fs.readFileSync(f), 'image/png');
    }
    try {
      const r = await fetch('https://storage.googleapis.com/' + rel.split('/').map(encodeURIComponent).join('/'));
      if (!r.ok) { console.log('รูปไม่มีทั้งในเครื่องและต้นฉบับ:', rel, r.status); return send(res, 404, 'Not found', 'text/plain'); }
      const buf = Buffer.from(await r.arrayBuffer());
      fs.mkdirSync(path.dirname(candidates[0]), { recursive: true });
      fs.writeFileSync(candidates[0], buf);
      console.log('โหลดรูปจากต้นฉบับแล้ว:', rel);
      return send(res, 200, buf, r.headers.get('content-type') || 'image/png');
    } catch (err) {
      console.log('โหลดรูปไม่ได้:', rel, err.message);
      return send(res, 502, 'Bad gateway', 'text/plain');
    }
  }

  let m;
  if (req.method === 'POST' && (m = p.match(/^\/game\/api\/login\/user\/(.+)$/))) {
    await readBody(req);
    const code = decodeURIComponent(m[1]).trim().toUpperCase();
    const codes = loadCodes();
    const c = codes[code];
    if (!c || c.disabled) return send(res, 200, { status: false, message: 'invalid code' });
    const now = new Date();
    if (!c.activatedAt) {               // ใช้ครั้งแรก เริ่มนับเวลา
      c.activatedAt = now.toISOString();
      c.expire = addTime(now, c.numberTime, c.typeTime).toISOString();
    }
    if (new Date(c.expire) <= now) { saveCodes(codes); return send(res, 200, { status: false, message: 'expired' }); }
    c.lastLogin = now.toISOString();
    c.loginCount = (c.loginCount || 0) + 1;
    saveCodes(codes);
    return send(res, 200, {
      status: true,
      expire: new Date(c.expire).toUTCString(),
      properties: { timeStamp: c.activatedAt, numberTime: c.numberTime, typeTime: c.typeTime },
    });
  }

  if (req.method === 'POST' && (m = p.match(/^\/game\/api\/user\/timestamp\/code\/(.+)$/))) {
    await readBody(req);              // server จัดการเวลาหมดอายุเองแล้วตอน login
    return send(res, 200, { status: true });
  }

  // --- Admin API ---
  if (p === '/admin/api/codes' && req.method === 'GET') {
    const codes = loadCodes();
    const list = Object.entries(codes).map(([code, c]) => ({ code, ...c }))
      .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
    return send(res, 200, list);
  }
  if (p === '/admin/api/codes' && req.method === 'POST') {
    let body = {};
    try { body = JSON.parse(await readBody(req) || '{}'); } catch {}
    const count = Math.min(Math.max(parseInt(body.count) || 1, 1), 500);
    const numberTime = Math.max(parseInt(body.numberTime) || 1, 1);
    const typeTime = ['day', 'hours', 'minutes'].includes(body.typeTime) ? body.typeTime : 'day';
    const note = String(body.note || '').slice(0, 200);
    const codes = loadCodes();
    const created = [];
    for (let i = 0; i < count; i++) {
      const code = newCode(codes);
      codes[code] = { numberTime, typeTime, note, createdAt: new Date().toISOString(), activatedAt: null, expire: null, disabled: false };
      created.push(code);
    }
    saveCodes(codes);
    return send(res, 200, { created });
  }
  if ((m = p.match(/^\/admin\/api\/codes\/([^/]+)(\/toggle)?$/))) {
    const code = decodeURIComponent(m[1]);
    const codes = loadCodes();
    if (!codes[code]) return send(res, 404, { error: 'not found' });
    if (req.method === 'DELETE') delete codes[code];
    else if (req.method === 'POST' && m[2]) codes[code].disabled = !codes[code].disabled;
    else return send(res, 405, { error: 'method' });
    saveCodes(codes);
    return send(res, 200, { ok: true });
  }

  // --- Static ---
  if (p === '/admin' || p.startsWith('/admin/')) return serveStatic(res, ADMIN_DIR, p.replace(/^\/admin/, ''));
  return serveStatic(res, GAME_DIR, p);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`เกม:        http://localhost:${PORT}/`);
  console.log(`หน้าเจนโค้ด: http://localhost:${PORT}/admin`);
});
