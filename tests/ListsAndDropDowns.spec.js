import {test, expect} from '@playwright/test'
import { count } from 'console'

test.beforeEach(async({page})=>{
    await page.goto ("http://localhost:4200/")
})

test('ListsAndDropDowns', async ({page})=>{
    const dropDownMenu = await page.locator('ngx-header nb-select')
    await dropDownMenu.click();

    //Now the list is opened and now how to select the items from the list

    page.getByRole('list') //when the list has UL tag
    page.getByRole('listitem') //whent he list has LI tag

    //Const optionList = page.getByRole('list').locator('nb-option')

    const optionList = page.locator('nb-option-list nb-option')
    await expect (optionList).toHaveText(["Light","Dark", "Cosmic", "Corporate"])

    //how to click the a specific colour 
    await optionList.filter({hasText:"Cosmic"}).click()

    //How to verify the colour is selected
    const header = page.locator('nb-layout-header')
    await expect(header).toHaveCSS('background-color','rgb(50, 50, 89)')


    const themeColors = [
        { name: "Light", expectedColor: "rgb(255, 255, 255)" },
        { name: "Dark", expectedColor: "rgb(34, 43, 69)" },
        { name: "Cosmic", expectedColor: "rgb(50, 50, 89)" },
        { name: "Corporate", expectedColor: "rgb(255, 255, 255)" },
    ];


    await dropDownMenu.click();
    for(const theme of themeColors) {
        await optionList.filter({hasText:theme.name}).click()
        await expect(header).toHaveCSS('background-color',theme.expectedColor)
        if(theme.name != "Corporate")
            await dropDownMenu.click(); 
    }

})

//practise 1  - Find the total sum

let sum = 0;
const nums = [10,20,30,40]
for(const numbers of nums){
    sum = sum+nums
}

console.log(sum)

//Problem 2 — Print object keys & values

const user = {
  name: "Venkat",
  age: 26,
  role: "QA"
};

for (const X in user) {
    console.log(X,"->",user[X]);
}

//practise 3 - count how many props 
 
const users = {
  name: "Venkat",
  age: 26,
  role: "QA"
};

let count = 0;

for (const k in users){
    count++;
}

console.log(count);