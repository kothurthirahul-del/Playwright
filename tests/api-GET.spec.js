const{test,expect}=require('@playwright/test')
const { request } = require('node:http')

test('GET user',async({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1')
    expect(response.status()).toBe(200)

    const data = await response.json()
    expect(data.id).toBe(1)
    expect(data.name).toBe('Leanne Graham')
})