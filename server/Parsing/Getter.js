const puppeteer = require('puppeteer');

const getHtml = async (link) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(link);

  let bodyHTML = await page.evaluate(() => document.body.innerHTML);

  return bodyHTML
} 


module.exports = getHtml
