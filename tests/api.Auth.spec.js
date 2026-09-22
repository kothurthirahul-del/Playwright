const{test,expect}=require("@playwright/test")

test('API Authentication',async({request})=>{
    const loginresponse = await request.post( 'https://reqres.in/api/login',
        {
            data:{
                email:'eve.holt@reqres.in',
                password:'cityslicka'
            }
        }
    )
    expect(loginresponse.status()).toBe(200)
    const loginData = await loginresponse.json()
    console.log('Token:',loginData.token)

    const response = await request.get('https://reqres.in/api/login',
        {
            headers:{
                'Authentication':`Bearer:${loginData.token}`
            }
    })
    expect(response.status()).toBe(200)

})