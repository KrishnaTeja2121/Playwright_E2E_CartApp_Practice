import { test, expect } from '@playwright/test';
import exp from 'constants';
import { TIMEOUT } from 'dns';

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


test('End 2 End Rahul Shetty Cart Application Practice',async({browser,page})=>{
  await page.goto("https://rahulshettyacademy.com/client");
 const userName=page.locator("#userEmail");
 const userPassword=page.locator("#userPassword");
 const loginBtn=page.locator("#login");
 const products=page.locator(".card-body");
 const productName="IPHONE 13 PRO";
 const email="test21@test.com";

 await userName.fill(email);
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
 await page.locator("div li").first().waitFor();
 const bool=await page.locator("h3:has-text('"+productName+"')").isVisible();
 expect(bool).toBeTruthy();
 await page.locator("text=Checkout").click();
 await page.locator(".input").first().fill("4534 3647 6578 1234");
 await page.locator("[placeholder*='Country']").pressSequentially("ind");
 const dropDown=page.locator(".ta-results");
 await dropDown.waitFor();
 const optionsCount=await dropDown.locator("button").count();
 for(let i=0;i<count;++i){
  const text=await dropDown.locator("button").nth(i).textContent();
  if(text===" India"){
    dropDown.locator("button").nth(i).click();
    break;
  }
 }
 await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
 await page.locator(".action__submit").click();
 await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
 const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
 console.log(orderId);
 await page.locator("button[routerlink*='myorders']").click();
 const rows=await page.locator("tbody tr");
 await page.locator("tbody").waitFor();
 for(let i=0;i < await rows.count();++i){
  const order=await rows.nth(i).locator("th").textContent();
  if(orderId === order){
    await rows.nth(i).locator("button").first().click();
    break;
  }
 }
});

test('testing advanced playwright locators', async({browser,page})=>{
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  const framePage=page.frameLocator("<frame_id>");
 
});
