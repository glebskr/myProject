const puppeteer = require('puppeteer');

const getHtml = async (link) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--full-memory-crash-report'
    ],
  });
  const page = await browser.newPage();
  
  await page.goto(link);

  let bodyHTML = await page.evaluate(() => document.body.innerHTML);

  await page.close()
  await browser.close()

  return bodyHTML
} 


module.exports = getHtml
