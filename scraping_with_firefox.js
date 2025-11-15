const { firefox } = require('playwright');

async function scrapping() {
  
  const browser = await firefox.launch({ headless: false, slowMo:500 });
  const page = await browser.newPage();

  await page.goto('https://www.scrapingcourse.com/pagination');

  // Referenciando pelo URL 

  // await page.locator('a[href="https://www.scrapingcourse.com/pagination/13"]').click();

  // Referenciando pela classe

  // await page.locator('a.next-page').click();

  let pagina=await page.locator('a[href="https://www.scrapingcourse.com/pagination/13"]').textContent();
  console.log(pagina);

  for(let i=0;i<pagina;i++){
      await page.locator('a.next-page').click();
  }

  // await browser.close();
}


scrapping();