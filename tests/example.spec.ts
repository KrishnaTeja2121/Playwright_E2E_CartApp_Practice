import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.only('End 2 End Rahul Shetty Cart Application Practice',async({browser,page})=>{
  await page.goto("https://rahulshettyacademy.com/client");
 const userName=page.locator("#userEmail");
 const userPassword=page.locator("#userPassword");
 const loginBtn=page.locator("#login");
 const products=page.locator(".card-body");
 const productName="IPHONE 13 PRO";

 await userName.fill("test21@test.com");
 await userPassword.fill("Test1234");
 await loginBtn.click();
 await page.waitForLoadState('networkidle');
 const titles= await page.locator(".card-body").allTextContents();
 console.log(titles);

 const count=await products.count();
 for(let i=0;i < count; ++i){
  if(await products.nth(i).locator("b").textContent() === productName){
    await products.nth(i).locator("text= Add To Cart").click();
    break;
  }  
 }
 await page.locator("[routerlink='/dashboard/cart']").click();
 await page.locator("h3:has-text(productName)").isVisible();

 


});
