const{test,expect}=require('@playwright/test')
test('Mock API response',async({page})=>{
    await page.route('https://jsonplaceholder.typicode.com/users/1',async route =>{
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify({
                id:1,
                name:'RAHUL'
            })

        })
    })
    await page.goto('https://jsonplaceholder.typicode.com/users/1')
    const body = await page.locator('body').textContent()
    expect(body).toContain('RAHUL')
})