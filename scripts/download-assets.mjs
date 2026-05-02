import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const CDN1 = 'https://cdn.prod.website-files.com/67c176235b0dd78565c1f3e1';
const CDN2 = 'https://cdn.prod.website-files.com/67c7e48cb91a6686c0a9033c';

const assets = [
  // Logos & icons
  [`${CDN1}/67c199b6b1e3dfe25e3b21d5_logo.svg`, 'public/images/logo.svg'],
  [`${CDN1}/67d7f72219407d5127edca8a_logo.avif`, 'public/images/logo-footer.avif'],
  [`${CDN1}/67c1b1f66e6dff2b76c926ca_Menu.svg`, 'public/images/icons/menu.svg'],
  [`${CDN1}/67c1b2fc1ab4e283b39f9624_Menu_Icons_UIA.svg`, 'public/images/icons/close.svg'],
  [`${CDN1}/67c54cba91066c772af9838a_eye.svg`, 'public/images/icons/eye.svg'],
  [`${CDN1}/67c54ddc5341e828f94d12d3_status-up.svg`, 'public/images/icons/status-up.svg'],
  [`${CDN1}/67c54e4d96a24c722ea3fd5c_Group%201.svg`, 'public/images/decor/vision-lines.svg'],
  [`${CDN1}/67c7de6626500c9e676f2cd6_Ellipse.svg`, 'public/images/decor/management-ellipse.svg'],
  // Hero & content imagery
  [`${CDN1}/67c4179fbc7c4a621d6640a6_Image%20from%20Squoosh-p-1600.webp`, 'public/images/hero-bg-desktop.webp'],
  [`${CDN1}/67dbf359a04a4d0b07082482_bg1.webp`, 'public/images/hero-bg-mobile.webp'],
  [`${CDN1}/67c4164d0bb6ac91e8b4c8b8_53453-p-1600.webp`, 'public/images/about-buildings.webp'],
  [`${CDN1}/67c7fd7af8bb13093cede789_Rectangle%2043029.webp`, 'public/images/contact-bg.webp'],
  // Portfolio cards (diverse)
  [`${CDN1}/67e5391c6502a4403dad3ad3_1200x800.webp`, 'public/images/portfolio/retail.webp'],
  [`${CDN1}/67c5a25d63e0d3c160567c66_Image%204096x2732.webp`, 'public/images/portfolio/real-estate.webp'],
  [`${CDN1}/67c5a329aab3a27ca3417526_b48ea42e983ecab7950160410c7c49ac%203540x2360.webp`, 'public/images/portfolio/logistics.webp'],
  [`${CDN1}/67e5399f297bc19bdfd03f61_cc9898c5fc9ef481a0fe7238932c3d1d.webp`, 'public/images/portfolio/hospitality.webp'],
  [`${CDN1}/67c5a62761cac795e76bc967_Figma%20Image%202520x1418.webp`, 'public/images/portfolio/financial.webp'],
  [`${CDN1}/67e53963e4c100fe9eb1de4e_Image%204096x2730.webp`, 'public/images/portfolio/education.webp'],
  // Management team
  [`${CDN2}/682c90452a58a085d775540a_Group.avif`, 'public/images/team/omar-bahram.avif'],
  [`${CDN2}/682c902e1100936df7fd7049_Group-2.avif`, 'public/images/team/shokhrukh-nigmanov.avif'],
  [`${CDN2}/682c9246bf7d74e862e978f3_Group-2.avif`, 'public/images/team/mohammed-al-abri.avif'],
  [`${CDN2}/682c9206456573f421a48a4c_Group-1.avif`, 'public/images/team/nabi-togaev.avif'],
  [`${CDN2}/682c92313354763974f3835a_Group-3.avif`, 'public/images/team/nurbek-darvishev.avif'],
  [`${CDN2}/682c9220b67ca6371b2a7a62_Group.avif`, 'public/images/team/abror-sharustamov.avif'],
  // News (events)
  [`${CDN2}/67c7f919fbb86c45fca024f1_image%20(13).avif`, 'public/images/news/highway-logistics.avif'],
  [`${CDN2}/67c7e743456dd669f92ad062_Squoosh%20626x350.avif`, 'public/images/news/uzbekleasing.avif'],
  [`${CDN2}/6818ae23a8ad31e8e8d1de4e_korzinka.avif`, 'public/images/news/korzinka.avif'],
  [`${CDN2}/681db6f2e276b92ad3ce506e_aut%20ob%20x%20tr.avif`, 'public/images/news/aut-mou.avif'],
  [`${CDN2}/682af89d88e04d40f8642319_Landscape%20post.avif`, 'public/images/news/annual-report-2024.avif'],
  [`${CDN2}/682afab4a7b7b7e8063a5896_IMG_9150.avif`, 'public/images/news/corporate-sports.avif'],
  [`${CDN2}/6981f66d399c96b8f0d161ac_IMG_6071%20(1).JPG`, 'public/images/news/hektas-agreement.jpg'],
  [`${CDN2}/6992ef0dedddaa57f9a75d21_au%20small%20(1).png`, 'public/images/news/annual-report-2025.png'],
  // Favicons
  [`${CDN1}/67dd2c541dd454bafceb4038_Group%201948757435.png`, 'public/seo/favicon.png'],
  [`${CDN1}/67dd2c562b1f37d9398075da_Group%201948757434.png`, 'public/seo/apple-touch-icon.png'],
];

async function downloadOne(url, dest) {
  const full = path.resolve(dest);
  if (existsSync(full)) return { url, dest, status: 'cached' };
  await mkdir(path.dirname(full), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(full, buf);
  return { url, dest, status: 'ok', size: buf.length };
}

async function pool(items, concurrency, fn) {
  const results = [];
  let i = 0;
  const workers = Array.from({length: concurrency}, async () => {
    while (i < items.length) {
      const idx = i++;
      try {
        results[idx] = await fn(items[idx]);
      } catch (e) {
        results[idx] = { error: e.message, item: items[idx] };
      }
    }
  });
  await Promise.all(workers);
  return results;
}

const results = await pool(assets, 6, ([url, dest]) => downloadOne(url, dest));
let ok = 0, cached = 0, fail = 0;
for (const r of results) {
  if (r.error) { console.error('FAIL', r.error); fail++; }
  else if (r.status === 'cached') cached++;
  else { ok++; console.log('ok ', r.dest, '(', r.size, 'b)'); }
}
console.log(`\nDone. downloaded=${ok} cached=${cached} failed=${fail} total=${assets.length}`);
if (fail) process.exit(1);
