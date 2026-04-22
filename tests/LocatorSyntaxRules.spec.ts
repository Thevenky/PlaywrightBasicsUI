import {test} from '@playwright/test';

test.beforeEach(async({page})=>{
        await page.goto ("http://localhost:4200/");
        await page.getByText("Forms").click(); 
        await page.getByText("Form Layouts").click();

})

test('locator Syntax Rules', async({page})=>{
    //By tag name
    await page.locator('input')
    
    //By ID 
    page.locator('#inputEmail1')

    //By class value 
    page.locator('.shape-rectangle')

    //By attribute - attribute should be in squarebraces
    page.locator('[placeholder="Email"]')

    //By entire class value 
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //By combine diff selectors - find the webelemtn by tag and attribute 
    page.locator('input[placeholder="Email"]')

    //By combine diff selectors - find the webelement by tag and attribute  and class- imp not to put space
    page.locator('input[placeholder="Email"].shape-rectangle')

    //By xpath - NOT RECOMMENDED
    page.locator('//*[@id="inputEmail1"]')

    //BY Partial Text Match 
    page.locator(':text("Using")')

    //By exact Text match
    page.locator(':text-is("Using the Grid")')




})