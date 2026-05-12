//how to overcome webtables 
//letssay we will take 3rd user find him by email (unqiue Id). we will modify the age from 18-35
import {test, expect} from '@playwright/test'

test.beforeEach(async({page})=>{

    await page.goto("http://localhost:4200/")
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();

})

test("Webtables", async ({page})=>{
    //get row by any text in this row. 

    const targetRow = page.getByRole('row',{name:"twitter@outlook.com"});
    await targetRow.locator('.nb-edit').click();

    await page.locator('input-editor').getByPlaceholder('Age').clear();
    await page.locator('input-editor').getByPlaceholder('Age').fill('35');
    await page.locator('.nb-checkmark').click();
    
})

//u can always get any values in the table by using getbyrole('row',{name:"unique name"})
//imp - we can select the table using the html text i.e getbyrole 
//but after we click edit - this text will now become a property and the field turns to a text box 
//so we cannot directly select the table content after we click edit button
//we need to reconstruct the locator to find the field and edit it. 


//the above code is good but if the table has more rows with same data then its not useful 

//Now we will draft the code where to find the data only by using the speicifc column inthe table 

test ("finding the data using column", async({page})=>{
    await page.locator('.ng2-smart-pagination-nav').getByText("2").click();
    const targetRowById = page.getByRole('row',{name:"11"}).filter({has : page.locator('td').nth(1).getByText('11')});
    await targetRowById.locator('.nb-edit').click();
    await page.locator('input-editor').getByPlaceholder('E-mail').clear();
    await page.locator('input-editor').getByPlaceholder('E-mail').fill('Venkat@test.com');

//Expalnation of this line 
//const targetRowById = page.getByRole('row',{name:"11"}).filter({has : page.locator('td').nth(1).getByText('11')});
//page.getByRole('row',{name:"11"}) - This will retrun two values 
//then filter will retrun all the columns(td) and then we will select nth (1st)column and in that 
//column we will find the filed that has 11 text in it.
//then we will store in the targetRowId and then we will click it.


})


//practise :

test("practise", async({page})=>{
    await page.goto("https://vinothqaacademy.com/webtable/");
    await page.locator("#nameInput").fill("venkat");
    await page.locator("#roleInput").fill("AEE");
    await page.getByPlaceholder("Email Address").fill("venkat@test.com");
    await page.getByPlaceholder("Location").fill("Delhi");
    await page.getByPlaceholder("Department").fill("Irrigation");

    await page.getByRole('button',{name:'Add Row'}).click();

    const tableData = page.getByRole('row',{name:'venkat@test.com'});
    await expect(tableData).toContainText('venkat@test.com')
    
})



