const{test,expect}=require('@playwright/test')
const{getToken}=require('../utills/api-auth')

test('API authentication',async({request})=>{
    const token = await getToken(request)

    console.log('Token:',token)

    const response = await request.get('https://reqres.in/api/users/2',{
        headers:{
            'Authentication' : `Bearer:${token}`
            
        }
    })
    expect(response.status()).toBe(200)
})