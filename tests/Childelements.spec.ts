import {test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/");
    await page.getByText('Forms').click();
    await page.getByText('Form Layout').click();

})

test ('locating child elemnts', async({page})=>{
    await page.locator('nb-card nb-radio :text-is("Option 1")').click();
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();

    await page.locator('nb-card').getByRole('button',{name:"Sign In"}).first().click();

    await page.locator('nb-card').nth(3).getByRole('button', {name:"Sign In"}).click(); //Not Preferred

})

//in order to find the locators of the child elements u can find all of them
//such as tags id inside of the locator and seperate them by space
//u can chain the allocators.
//u can combination of user facing allocator and regular locators 
//u can also use the index - and index always starts with 0 and this is not preferred
