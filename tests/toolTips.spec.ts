//automate the scenario to validate the tool tip of the application 

import {test, expect} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/"); 
    await page.getByText("Modal & Overlays").click();
    await page.getByTitle("Tooltip").click();

})

test("toolTips tests", async ({page})=>{
    await page.locator('nb-card').filter({hasText:"Tooltip Placements"}).getByRole('button',{name:"Top"}).hover();

    const tooltip =  await page.locator('nb-tooltip').textContent();
    expect(tooltip).toEqual('This is a tooltip');

})