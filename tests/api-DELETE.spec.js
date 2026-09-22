const{test,expect}=require('@playwright/test')
const { request } = require('node:http')
test("DELETE-delete user",async({request})=>{
    const response = await request.delete("https://jsonplaceholder.typicode.com/users/1")

    expect(response.status()).toBe(200)

})