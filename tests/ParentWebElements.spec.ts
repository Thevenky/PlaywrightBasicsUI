import {test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/");
    await page.getByText('Forms').click();
    await page.getByText('Form Layout').click();

})

test ("Locating parent elements", async({page})=>{
    //The below is using the text method to find out the element 
    await page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox',{name:"Email"}).click();
    //the below is using the locator inside of the nb-card to find the exact element
    await page.locator('nb-card',{has :page.locator('#inputEmail')}).getByRole('textbox',{name:"Email"}).click();
    //the below is finding the element using filter 
    await page.locator('nb-card').filter({hasText:"Basic form"}).getByRole('textbox',{name:"Email"}).click();

    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign In"})
    .getByRole('textbox',{name:"Email"}).click();

    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox',{name:"Email"}).click();

})

//inorder to find a webelement  usng a locator method 
//using text filter or locator filter and then chain the parent element 
//use a filter method - benifit - using multiple filter 1 by  1
//we can use xpath by using double dots and then locator. 