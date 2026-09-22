const{test,expect}= require('@playwright/test')

test.describe('Login test',()=>{

    test.beforeAll(async({browser})=>{
        console.log("Before all tests")
    })

    test.beforeEach(async({page})=>{
    await page.goto('https://saucedemo.com/')
});

        test('test 1',async({page})=>{
        console.log('running test 1')
    })

        test("test 2", async({page})=>{
        console.log("running test 2")
    })

        test.afterEach(async({page})=>{
        console.log("Test Finished")
    })

    test.afterAll(async({ browser })=>{
        console.log("after all tests")
    })

})