const {test, expect}=require('@playwright/test')
const { skip } = require('node:test')

test('my first test', async function({page}) {
   expect(100).toBe(100) 
})

test("My Second Test", async function({page}){
    expect(200).toBe(200)
})

test.skip("My Third Test", async function({page}){
    expect(28).toBe(30)
})

test("My Fourth Test", async function({page}){
    expect("Rahul Kothurthi").toContain("Rahul Kothurthi")
})