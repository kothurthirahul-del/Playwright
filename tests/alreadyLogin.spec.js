const{test,expect}=require('@playwright/test')

test('already logged in',async({page})=>{
    await page.goto('https://practicetestautomation.com/logged-in-successfully/')
    await expect(page.getByRole('heading',{name:'Logged in successfully'})).toBeVisible()
})