const{test,expect}=require ("@playwright/test")

test("Verify Application Link", async function({page}){

    await page.goto("http://google.com")

    const url = await page.url()

    console.log("Title is "+url)
    
    await expect(page).toHaveTitle(/Google/)
})
