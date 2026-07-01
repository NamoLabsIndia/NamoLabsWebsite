const { chromium } = require('playwright');

const fs = require('fs');

(async () => {
  const sp = './screenshots/';
  if (!fs.existsSync(sp)) {
    fs.mkdirSync(sp, { recursive: true });
  }
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Get full page height
  const pageH = await page.evaluate(() => document.body.scrollHeight);
  console.log('page height:', pageH);

  const snap = async (name, y) => {
    await page.evaluate(s => window.scrollTo(0, s), y);
    await page.waitForTimeout(800);
    await page.screenshot({ path: sp + name + '.png' });
    console.log(name, '@', y);
  };

  // Sections — use text anchors to find real Y positions
  const getY = async (text) => {
    return page.evaluate((t) => {
      const els = [...document.querySelectorAll('h2,h1,section,p')];
      const el = els.find(e => e.textContent?.includes(t));
      return el ? el.getBoundingClientRect().top + window.scrollY - 80 : null;
    }, text);
  };

  await snap('s1_hero', 0);
  await snap('s2_trusted', await getY('TRUSTED BY') || 850);
  await snap('s3_approach', await getY('IT CONSULTING') || 1600);
  await snap('s4_research_domains', await getY('Researching Today') || 2800);
  await snap('s5_one_stop_firm', await getY('One Stop Firm') || 4500);
  await snap('s6_bharat', await getY('From Bharat') || 6000);
  await snap('s7_updates', await getY('Research & Updates') || 7200);
  await snap('s8_countdown', await getY('Almost Here') || 8600);
  await snap('s9_footer', pageH - 900);

  // Nav dropdowns — fresh goto each time to avoid stale nav
  for (const item of ['Platform','Research','Consulting','Company']) {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    const btn = page.getByRole('button', { name: item });
    await btn.hover();
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${sp}nav_${item.toLowerCase()}.png` });
    console.log('nav_' + item);
  }

  await browser.close();
  console.log('all done');
})();
