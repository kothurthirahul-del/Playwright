const{test,expect}=require('@playwright/test')
const { request } = require('node:http')
test('Patch- single field updation',async({request})=>{
    const response = await request.patch('https://jsonplaceholder.typicode.com/users/1',{
        data:{
            name:'Alto'
        }
    })
    expect(response.status()).toBe(200)
    const data = await response.json()
    expect(data.name).toBe('Alto')
})