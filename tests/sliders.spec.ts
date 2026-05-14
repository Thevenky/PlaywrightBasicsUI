//How to handle or automate slider webelemetnts 
//drag the bar and then validate the value that is changed - how to automate 

import {test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("IoT Dashboard").click();
})

//sliders are just upadting the sliders attribute 
//This is one way - also direct way
test ("sliders", async({page})=>{
   // const temGuage = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    // await temGuage.evaluate(node =>{
    //     node.setAttribute('cx','232.630')
    //     node.setAttribute('cy','232.630')
    // })
    // await temGuage.click();

    //there is another way where we can simulate the acutal mouse movement 
    const temBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
    await temBox.scrollIntoViewIfNeeded()
    //next we neeed to define bounding box 

    const box = await temBox.boundingBox()
  if(box){
    const x = box.x+box.width /2
    const y = box.y+box.height /2

    await page.mouse.move(x,y)
    await page.mouse.down()
    await page.mouse.move(x+100, y)
    await page.mouse.move (x+100, y+100)
    await page.mouse.up();

    }})




