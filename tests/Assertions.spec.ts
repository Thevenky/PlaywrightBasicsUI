import {test, expect} from "@playwright/test"

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();

});

test("Assertions", async({page})=>{
    const basicFormButton =  page.locator('nb-card').filter({hasText:"Basic form"}).locator('button')


    //general assertions 
    const value = 5
    expect (value).toEqual(5)

    const text = await basicFormButton.textContent(); 
    expect (text).toEqual('Submit');

    //locator assertion  - we need to provide await in locator assertion 
    //they have thier own timeout. 
    await expect(basicFormButton).toHaveText('Submit');

    //softasserion - when the test can be continued even if the assertion failed 
    await expect.soft(basicFormButton).toHaveText('Submit5');
    await basicFormButton.click();

    //softassertion not a really good practise 
    //when we have other validations then we can use soft assertion 


    //playwright has two types of assertion 
    //general assertions and locator assertions 
    //general assertions are very simple - we just use expect with a value that  we want assert and desired method
    //general assertions will not wait for any conditions 

    //locator assertions are smarter 
    //they wait for 5 secs 

    //soft assertins can be done with expect.soft

})

