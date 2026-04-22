// //it is important to use the user facing locators
import {test} from '@playwright/test';

test.beforeEach(async({page})=>{
        await page.goto ("http://localhost:4200/");
        await page.getByText("Forms").click(); 
        await page.getByText("Form Layouts").click();

})

test ("user facing allocators", async({page})=>{
    await page.getByRole('textbox',{name:"Email"}).first().click();
    await page.getByRole ('button', {name:"Sign in"}).first().click();

    await page.getByLabel('Email').first().click();

    await page.getByPlaceholder('Jane Doe').click();

    await page.getByText('Using the Grid').click();

    await page.getByTitle('IoT Dashboard').click();
    
})


//practice : 

//import { test1 } from "@playwright/test";

test ('testname', async({page})=>{
    await page.goto('http://localhost:4200/'); 
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();

// user facing locators only to be used
    await page.getByRole('textbox').first().click();
    await page.locator('span.custom-checkbox').first().click();
    await page.getByLabel('Option 1').click();

})
