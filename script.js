const {chromium}=require('playwright');

async function teste(){
    // Inicia o navegador (headless:false para vê-lo abrindo)
    const browser=await chromium.launch({headless:false});

    // Abre uma nova aba/página 
    const page=await browser.newPage();

    // Navega até a URL 
    await page.goto('https://example.com');

    // Imprime o título da página no console 
    console.log(await page.title());

    // Fecha o navegador 
    await browser.close();
}

teste();