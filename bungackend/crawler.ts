import puppeteer from 'puppeteer';

export async function crawler(){
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  //await browser.close();
  return page;
};