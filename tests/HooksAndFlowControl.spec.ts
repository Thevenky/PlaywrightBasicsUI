//the scenario where we need to automate the flow to got dashboard and then forms and then datepicker

import { test } from '@playwright/test';

//Miain before each hook 
test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/")
})

//test suite 
//if u want to skip any test suite - use test.describe.skip


test.describe.skip("Suite 1", () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Charts').click();
    })

    test("the first test", async ({ page }) => {
        await page.getByText('Form Layouts').click();
    })

    test("Naviage to the date picker page", async ({ page }) => {
        await page.getByText('Datepicker').click();
    })

})

test.describe("Suite 2", () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click();
    })

    test("the first test", async ({ page }) => {
        await page.getByText('Form Layouts').click();
    })

    test("Naviage to the date picker page", async ({ page }) => {
        await page.getByText('Datepicker').click();
    })

})


//Practise :

//practise1 - open app before every test

test.describe.only("Suite 3",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("http://localhost:4200/") 
    })

    test('Test1', async({page})=> {
        await page.getByText("Extra Components").click();
        await page.getByText("Calendar").click();
    });

})


//practice2: navigation ReUse - navigate to forms section automatically
//Move repeated steps into beforeeach 

test.describe("", ()=>{

    test
})

