//automation of a dialouge box 
//two types of dialog boxes - web dialog box another is popup 

import {test, expect} from '@playwright/test'
import { table } from 'console';

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText('Tables & Data').click();
    await page.getByText('Smart Table').click();
})

test ('dialog box', async ({page})=>{

    page.on('dialog', dialog=>{
        expect(dialog.message()).toEqual("Are you sure you want to delete?")
    })
    await page.getByRole(table).locator('tr',{hasText:"mdo@gmail.com"}).locator('.nb-trash').click();
    await expect(page.locator('table tr').first()).not.toHaveText("mdo@gmail.com")
})