//How to extract diff values 

import {test,expect} from '@playwright/test';

//Task is to fetch the text on submit button in the basic form 

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/");
    await page.getByText('Forms').click();
    await page.getByText('Form Layout').click();

})

// test("Extracting values", async({page})=>{
//    const basicForm = await page.locator('nb-card').filter({hasText:'Basic Form'})
//    const buttonText = await basicForm.getByRole('button').textContent();
//    expect(buttonText).toEqual('Submit')

// //How to get all text values - in the using the grid we need to see if atlease one of the radio button 
// //has option1 text. 

// const allRadioButtonsLables = await page.locator('nb-radio').allTextContents()
// expect(allRadioButtonsLables).toContain("Option 1");

// //How to find the value of the input field or input value

// const emailFiled = await basicForm.getByRole('textbox',{name:"Email"})
// await emailFiled.fill('test@test.com');
// const emailValue = await emailFiled.inputValue()
// expect (emailValue).toEqual('test@test.com')

// //we wnat to get the value of the attribute 
// //to check the placeholder value has email value
// //so baiscally if we enter any value in a text box - we can fetch that value using inputvalue()

// const placeholderValue = await emailFiled.getAttribute('placeholder');
// expect (placeholderValue).toEqual('Email');

// })


//practise 

test("fetch the value in the email textbox of Using the Gring using parent to child cntn", async({page})=>{
    const textInEmail =  page.locator('nb-card').filter({hasText:'Using the Grid'});
    const emailinput = textInEmail.getByRole('textbox',{name:'Email'});
    await emailinput.fill('venkat@gmail.com');

    const textValueinEmail = await emailinput.inputValue();
    expect (textValueinEmail).toEqual('venkat@gmail.com')
})