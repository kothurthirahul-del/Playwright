const{test,expect}=require('@playwright/test')
const { request } = require('node:http')
const { json } = require('node:stream/consumers')
 test('POST create user',async({request})=>{
    const response = await request.post('https://jsonplaceholder.typicode.com/users',
        {
            headers:{
                'content-type': 'application/json'
            },
        
            data:{
                name:'rahul',
                username:'rahul123'
            }
        }
    )
    expect(response.status()).toBe(201)

    const data = await response.json()
    expect(data.name).toBe('rahul')
    expect(data.username).toBe('rahul123')
  
 })