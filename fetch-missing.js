// ดาวน์โหลดไฟล์ asset ที่ขาดไปจากเว็บต้นฉบับ มาเก็บใน friday2022-3a53c.web.app/
// รัน: node fetch-missing.js
const fs = require('fs');
const path = require('path');
const ORIGIN = 'https://friday2022-3a53c.web.app';
const GAME_DIR = path.join(__dirname, 'friday2022-3a53c.web.app');

const list = new Set([
  "/assets/main/import/ba/ba21476f-2866-4f81-9c4d-6e359316e448.json",
  "/assets/main/import/fd/fd8ec536-a354-4a17-9c74-4f3883c378c8.json",
  "/assets/resources/import/04/047494fe-5632-4fd2-a14a-5d33847c9cb5.json",
  "/assets/resources/import/90/90be8b42-3805-4181-aa74-54fcfe1317a6.cconb",
  "/assets/resources/import/f9/f9dc1c47-9c5e-4440-8bdc-543995ca83ac.cconb",
  "/assets/resources/import/5b/5be021c8-7b96-4934-8cb8-792892c28fc1.cconb",
  "/assets/resources/import/16/161342ce-3057-4b5a-8bf7-4b4e02cd5fa7.json",
  "/assets/resources/import/1d/1d51998d-20f1-4997-a994-55f00d86beca.json",
  "/assets/resources/import/2c/2cab559e-26f1-4df8-bec9-d50ce2a53fea.json",
  "/assets/resources/import/7a/7a983d96-db51-4ef7-8ee3-37a619fcbf43.json",
  "/assets/resources/import/94/94abed45-eb76-44ca-8946-9967f8bd0964.json",
  "/assets/resources/import/b0/b0ae4a86-7cf5-4d9b-952d-a31e7aceac2b.json",
  "/assets/resources/import/b2/b2f282bb-ad8a-4408-98b0-31b97b8d2b0b.json",
  "/assets/resources/import/bf/bf55b433-5109-49d0-a016-8e2625a188af.json",
  "/assets/resources/import/c1/c1c2be03-1e84-4ba4-8e2b-9ccd9ef9c029.json",
  "/assets/resources/import/eb/eb48b49b-ca3c-413b-acef-dbe7c1dc1751.json"
]);
const log = path.join(__dirname, 'missing.log');
if (fs.existsSync(log)) fs.readFileSync(log, 'utf8').split(/\r?\n/).filter(Boolean).forEach((p) => list.add(p));

(async () => {
  let ok = 0, fail = 0;
  for (const p of list) {
    const dest = path.join(GAME_DIR, decodeURIComponent(p));
    if (fs.existsSync(dest)) continue;
    try {
      const r = await fetch(ORIGIN + p);
      if (!r.ok) { console.log('✗', r.status, p); fail++; continue; }
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
      console.log('✓', p); ok++;
    } catch (e) { console.log('✗', e.message, p); fail++; }
  }
  console.log(`\nเสร็จ: โหลดได้ ${ok} ไฟล์, ไม่ได้ ${fail} ไฟล์`);
  if (fs.existsSync(log)) fs.writeFileSync(log, '');
})();
