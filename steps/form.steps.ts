import {Given, When, Then, After, Before} from '@cucumber/cucumber';
import {expect} from '@playwright/test';
import { register } from 'module';
import { chromium, Browser, Page } from 'playwright';
import { RegisterPage } from '../lib/pages/RegisterPage'; 
import { time } from 'console';
import { fail } from 'assert';

let browser: Browser;
let page: Page;
let registerPage: RegisterPage;

Before (async function () {
    browser = await chromium.launch({ headless: false});
    page = await browser.newPage();
    registerPage = new RegisterPage(page);
});

After (async function () {
    await browser.close();
});

Given('I navigate to the web form page', { timeout: 20000 }, async function () {
    //browser = await chromium.launch({ headless: false});
    //page = await browser.newPage();
    // use the same base URL as in Playwright config
    await page.goto('https://qa-practice.razvanvancea.ro/bugs-form.html');
    //await this.registerPage.goto();
});

When ('I fill the form with firstName {string}, lastName {string}, phoneNumber {string}, country {string}, email {string}, password {string}',
    async function (firstName, lastName, phoneNumber, country, email, password) {
    //await this.registerPage.fill({firstName, lastName, phoneNumber, country, email, password});
    await page.fill('#firstName', firstName);
    await page.fill('#lastName', lastName);
    await page.fill('#phone', phoneNumber);
    await page.selectOption('#countries_dropdown_menu', { value: country });
    await page.fill('#emailAddress', email);
    await page.fill('#password', password);
    //await page.check('#exampleCheck1', { force: true });
});


When ('I should verify checkbox is disabled', async function () {
    const isDisabled = await registerPage.verifyCheckboxIsDisabled();
    expect(isDisabled).toBe(false);

    // verify checkbox is disabled (implement as needed)
});

When ('I submit the form', async function () {
    await page.click('#registerBtn');
    
    timeout: 20000;

});

Then ('I should see the result {string} message', async function (result) {
    const message = await page.textContent('#message');
    expect(message).toContain(result);
    
    await browser.close();
});

Then ('validate the lastName {string} is displayed correctly', async function (expectedLastName: string) {
    const getText = await registerPage.getText();
    const lastNameValue = getText?.split(':')[1]?.trim();
    console.log('The message is: ' + getText);
    console.log('The lastNameValue is: ' + lastNameValue);
    console.log('The expectedLastName is: ' + expectedLastName);
    expect(lastNameValue).toBe(expectedLastName);

});

Then ('validate the phoneNumber {string} is displayed correctly', async function (expectedNumber: string) {
    const getNumber = await registerPage.getNumber();
    const PhoneNumberValue = getNumber?.split(':')[1]?.trim();
    console.log('The message is: ' + getNumber);
    console.log('The PhoneNumberValue is: ' + PhoneNumberValue);
    console.log('The expectedNumber is: ' + expectedNumber);
    expect(PhoneNumberValue).toBe(expectedNumber);
    
});

Then('validate the result area shows the given values {string}, {string}, {string}, {string} correctly',
  async function (firstName, country, email, password) {
    const text = await registerPage.getResultText();
    const soft = expect.soft;

    soft(text).toContain(firstName);
    soft(text).toContain(country);
    soft(text).toContain(email);
    soft(text).toContain(password);
  });







//Then ('the last name field should display lastName {string}', async function (expectedLastName: string) {
    //const actualLastName = await registerPage.getLastNameValue();
    //expect(actualLastName).toBe(expectedLastName);
    //await browser.close();
//});


    