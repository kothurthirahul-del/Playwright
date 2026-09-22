const {test, expect} = require("@playwright/test")

test("Amazon test case", async function({page}){
    
    await page.goto("https://amazon.com")

    await expect(page).toHaveTitle(/Amazon\.com/)
})