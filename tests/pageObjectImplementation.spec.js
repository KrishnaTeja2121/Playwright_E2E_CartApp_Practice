import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';


test('xgdfhdh', async ({browser , page}) => {
    const userName="xgdrh";
    const password="";



    const login=new LoginPage(page);
    login.goto();
    login.validLogin(userName, password);
    
});





