import {test,expect} from '@playwright/test';
import { timeout } from 'rxjs-compat/operator/timeout';

test.beforeEach(async({page})=>{
    await page.goto("http://uitestingplayground.com/ajax"); 
    await page.getByText('Button Triggering AJAX Request').click();  

})

// test ('auto waiting', async({page})=>{
//     const successbutton = page.locator('.bg-success')

// //    await successbutton.click();

// //    const buttonText = await successbutton.textContent();
// //    await successbutton.waitFor({state:"attached"})
// //    const buttonText = await successbutton.allTextContents();
// //    expect(buttonText).toContain('Data loaded with AJAX get request.')

//     await expect(successbutton).toHaveText("Data loaded with AJAX get request.",{timeout: 20000})

// })

test('Alternative Waits',async({page})=>{
    const successbutton = page.locator('.bg-success')

    //___ wait for element 
    await page.waitForSelector('.bg-success')

    //___wait for particular response

    await page.waitForResponse ('https://uitestingplayground.com/ajaxdata')

    const buttonText = await successbutton.allTextContents();
    expect(buttonText).toContain('Data loaded with AJAX get request.')
})