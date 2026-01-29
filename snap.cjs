const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
      headless: "new",
      args: ['--no-sandbox', '--window-size=1920,1080'],
      defaultViewport: null
  });
  const page = await browser.newPage();
  
  // Use local dev server if GH pages is slow to update, but user asked for GH link version.
  // Actually, let's build and serve locally to be 100% sure we capture the LATEST code.
  // But to be fast, let's try the live URL first. If it's old, I'll fallback.
  await page.goto('https://flicK200107.github.io/barberhouse-concept/', { waitUntil: 'networkidle0' });

  // Take screenshot 1: Hero
  await page.screenshot({ path: 'screen_hero.png' });

  // Scroll down
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'screen_about.png' });

  // Scroll to services
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'screen_services.png' });

  await browser.close();
})();
