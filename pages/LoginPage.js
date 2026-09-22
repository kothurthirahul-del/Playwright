class LoginPage{
    constructor(page){
        this.page = page;
        this.loginbutton = page.getByRole('button',{name:"login"})
        this.username = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]');
    }

    async login(name,password){
        await this.username.fill(name);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}

module.exports = {LoginPage};