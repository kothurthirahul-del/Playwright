const {test,expect}=require('@playwright/test')

test('Already Logged in',async({browser})=>{
    const context = await browser.newContext({
        storageState:'auth.json'
    })

    const page = await context.newPage()

    await page.goto("https://practicetestautomation.com/logged-in-successfully/")
    await expect(page.getByRole('heading',{name:'Logged in successfully'})).toBeVisible()
    await context.close()
    
})
