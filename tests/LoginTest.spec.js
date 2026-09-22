const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    const loginPage = new LoginPage(page);

    await loginPage.login('Rahul', 'password');
});