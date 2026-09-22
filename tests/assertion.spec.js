const {test, expect}=require('@playwright/test')

const users = [
   {testname:'Valid Login',username:'student', password:'Password123',shouldLogin:true},
   {testname:'InValid Login',username:'aditya', password:'xyz',shouldLogin:false},
   {testname:'Invalid details',username:'alto', password:'error',shouldLogin:false}
]
 test("AssertionCheck",async({browser})=>{

   for(const user of users){

      const context =await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://practicetestautomation.com/practice-test-login/")
      await page.getByRole('textbox',{name:'username'}).fill(user.username)
      await page.getByRole('textbox',{name:'password'}).fill(user.password)
      await page.getByRole('button', { name: 'Submit' }).click();

      if (user.shouldLogin){
         await expect(page).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/"
);

      }else{
         await expect(
        page.getByRole('heading', { name: 'Logged In Successfully' })
    ).not.toBeVisible();

      }
      
   }

});
