const{test,expect}=require("@playwright/test")
const { users }=require("../test-data/users")

for(const user of users){
    test(user.testName,async({page})=>{
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.getByRole('textbox',{name:'username'}).fill(user.username)
        await page.getByRole('textbox',{name:'password'}).fill(user.password)
        await page.getByRole('button',{name:'submit'}).click()

        if(user.username === 'student'){
            await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
        }else{
            await expect(page).not.toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
        }
    });

}