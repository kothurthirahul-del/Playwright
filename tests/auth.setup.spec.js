const {test}=require ('@playwright/test')

test('Login and Save Authentication',async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByRole('textbox',{name:'username'}).fill('student')
    await page.getByRole('textbox',{name:'password'}).fill('Password123')
    await page.getByRole('button',{name:'Submit'}).click()
    await page.context().storageState({ path: 'auth.json' })
})