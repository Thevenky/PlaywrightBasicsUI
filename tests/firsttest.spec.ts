import {test} from '@playwright/test';

test ("the first test", async({page})=>{
   await page.goto("http://localhost:4200/")
   await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();

})


//test is afunction that we can use in the code 
//test is a playwright function internally built by playwright itself so we can use it without creating
//aa function. 

//in javascript - we have a new concept of promise and asynchronous respose - so thatwhy we use 
//async and await while execting the steps. 




