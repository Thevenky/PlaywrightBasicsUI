import {test, expect} from '@playwright/test'
import { delay } from 'rxjs-compat/operator/delay'

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
})

test.describe("Form Layouts Page", ()=>{
    test.beforeEach(async({page})=>{
        await page.getByText("Forms").click();
        await page.getByText('Form Layouts').click();
    })

    test('Input Fileds',async({page})=>{
        const UsingTheGridEmailInput = page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox', {name:'Email'});
        await UsingTheGridEmailInput.fill("test@test.com")
        await UsingTheGridEmailInput.clear();

        await UsingTheGridEmailInput.pressSequentially('test2@test.com', {delay:500})
    })
})
