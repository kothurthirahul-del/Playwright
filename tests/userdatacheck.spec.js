const { test } = require('@playwright/test')

const { users } = require('../test-data/users')

 for(const user of users){
    test(user.testName,async({ page })=>{

        console.log('Username:', user.username);
        console.log('Password:', user.password);

    })
   
 }
