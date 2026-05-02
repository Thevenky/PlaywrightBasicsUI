import {test, expect} from '@playwright/test';

test.beforeEach(async ({page})=>{
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('radio buttons', async({page})=>{
   
   //gettingby role
    const usingTheGridForm = page.locator('nb-card').filter({hasText:'Using the Grid'})
    await usingTheGridForm.getByRole('radio',{name:'Option 1'}).check({force:true})
    const radiostatus = await usingTheGridForm.getByRole('radio',{name:'Option 1'}).isChecked();
    expect(radiostatus).toBeTruthy();

    
    //getting by label 

    await page.getByLabel('Option 1').check({force:true});
})