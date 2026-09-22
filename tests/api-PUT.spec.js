const{test,expect}=require("@playwright/test")
 test('PUT update user',async({request})=>{
    const response = await request.put('https://jsonplaceholder.typicode.com/users/1',{
        data:{
            name:'ALTO',
            username:'ALTOJOURNEY'
        }
    })

    expect(response.status()).toBe(200)

    const data = await response.json()
    expect(data.name).toBe('ALTO')
    expect(data.username).toBe('ALTOJOURNEY')
 })