const users=[
    {testName:'Valid Login',username:'student',password:'Password123',shouldLogin:true},
    {testName:'InValid Login',username:'Rahul',password:'098123',shouldLogin:false},
    {testName:'InValid details',username:'alto',password:'Pass123',shouldLogin:false},
]

module.exports = {users};