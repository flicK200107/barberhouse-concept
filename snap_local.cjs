const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
      headless: "new",
      args: ['--no-sandbox', '--window-size=1920,1080'],
      defaultViewport: null
  });
  const page = await browser.newPage();
  
  // Go to LOCALHOST to get the real deal
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Take screenshot 1: Hero
  await page.screenshot({ path: 'local_hero.png' });

  // Scroll down
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'local_about.png' });

  // Scroll to services
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'local_services.png' });

  await browser.close();
})();
