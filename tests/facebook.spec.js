import{ test,expect } from "@playwright/test"

test("Valid login", async ({page})=> {
    await page.goto("https://www.facebook.com")
    
    await page.getByRole('textbox',{name:'Email address or mobile number'}).pressSequentially('Siddarth Roy',{delay:200})

    await page.getByRole('textbox',{name:'Password'}).pressSequentially('password 123',{delay:200})

    await page.getByRole('button',{name:'Log in'}).click()

    await expect(page).toHaveURL(/facebook.com/)

    const profileMenuButton = page.getByRole('button',{ name:"Your profile" })
    await profileMenuButton.click()

    const LogOutButton = page.getByRole('button',{ name:"Log Out" })
    await LogOutButton.click()

    await expect(page).toHaveURL(/www.facebook.login/)
})