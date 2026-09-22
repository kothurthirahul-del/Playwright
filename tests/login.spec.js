import{ test,expect } from "@playwright/test"

test("User valid login", async ({page}) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    await page.getByRole('textbox',{name:"username"}).pressSequentially('student',{delay:200})

    await page.getByRole('textbox',{name:"password"}).pressSequentially('Password123',{delay:200})

    await page.getByRole('button',{name:"Submit"}).click()

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
    
    await page.getByRole('link', { name: 'Log out' }).click()


    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")
})