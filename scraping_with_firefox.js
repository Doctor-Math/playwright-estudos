const { firefox } = require('playwright');

async function scrapping() {
  
  const browser = await firefox.launch({ headless: false, slowMo:500 });
  const page = await browser.newPage();

  const seletorEmail='[data-testid="email-input"]';
  const email='admin@example.com';

  await page.goto('https://www.scrapingcourse.com/login'); // Ir para a seção Login

  await page.fill(seletorEmail,email); // Preencher campo de e-mail

  const seletorSenha='[data-testid="password-input"]';
  const senha='password';

  await page.fill(seletorSenha,senha); // Preencher campo de senha

  const seletorBotao='[data-testid="submit-button"]';
  const urlDestino='https://www.scrapingcourse.com/dashboard';

  // Clicar no botão de login 
  await Promise.all([
    page.waitForURL(urlDestino), // página de redirecionamento
    page.click(seletorBotao)
  ]);

  const seletorLogo='[data-testid="brand-name-1"]'

  await page.click(seletorLogo); // Clica no login

  await page.locator('a[href="/ecommerce"]').click(); 

  // Obter quantidade total de páginas
  let pagina = await page.locator('a.page-numbers').nth(-2).textContent();

  // Percorrer as páginas até a 11
  for(let i=0;i<pagina;i++){
    if(i!=10){
      await page.locator('a.page-numbers').last().click();
    }else{
      await page.locator('h2:has-text("Summit Watch")').click(); // Encontrar o item pelo nome
      await page.fill('input[name="quantity"]', '4'); // Aumentar a quantidade para 4
      await page.locator('button[value="2742"]').click(); // Colocar no carrinho
      await page.locator('a.button.wc-forward[href^="https://www.scrapingcourse.com/ecommerce/cart/"]').nth(1).click(); // Acessa o carrinho
      await page.locator('a[href="https://www.scrapingcourse.com/ecommerce/checkout/"]').nth(1).click(); // Realiza o pagamento
      break;
    }
  }

  //await browser.close();
}


scrapping();