import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly phoneInput: Locator;
    readonly countrySelect: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly registerButton: Locator;
    readonly messageText: Locator;  
    readonly checkBoxDisabled: Locator;
    readonly firstNameOutput: Locator;
    readonly lastNameOutput: Locator;
    readonly phoneOutput: Locator;
    readonly countryOutput: Locator;
    readonly emailOutput: Locator;
    readonly resultText: Locator;

    
    
        constructor(page: Page) {
            this.page = page;
            this.firstNameInput = page.locator('#firstName');
            this.lastNameInput = page.locator('#lastName'); 
            this.phoneInput = page.locator('#phone');
            this.countrySelect = page.locator('#countries_dropdown_menu');
            this.emailInput = page.locator('#emailAddress');
            this.passwordInput = page.locator('#password');
            this.registerButton = page.locator('#registerBtn');
            this.messageText = page.locator('#message');
            this.checkBoxDisabled = page.locator('#exampleCheck1');
            this.firstNameOutput = page.locator('#resultFn');
            this.lastNameOutput = page.locator('#resultLn');
            this.phoneOutput = page.locator('#resultPhone');
            this.countryOutput = page.locator('#resultCountry');
            this.emailOutput = page.locator('#resultEmail');
            this.resultText = page.locator('#results-section');
            
        }

         async verifyCheckboxIsDisabled(): Promise<boolean> {
            return await this.checkBoxDisabled.isDisabled();
        }
        async getFirstNameValue(): Promise<string> {
            return await this.firstNameOutput.inputValue();
        }
        async getNameText(): Promise<string | null> {
            const name = await this.firstNameOutput.textContent();
            return name;
        }
        async getLastNameValue(): Promise<string> {
            return await this.lastNameOutput.inputValue();
        }
        async getText(): Promise<string | null> {
            const text = await this.lastNameOutput.textContent();
            return text;
        }
        async getNumber(): Promise<string> {
            const number = await this.phoneOutput.textContent();
            return number || '';
        }
        async getPhoneNumberValue(): Promise<string> {
            return await this.phoneOutput.inputValue();
        }
        async getEmailValue(): Promise<string> {
            return await this.emailOutput.inputValue();
        }
        async getEmailID(): Promise<string | null> {
            const email = await this.emailOutput.textContent();
            return email;
        }
        async getCountryValue(): Promise<string> {
            return await this.countryOutput.inputValue();
        }   
        async getCountryName(): Promise<string | null> {
            const country = await this.countryOutput.textContent();
            return country;
        }   
        async getResultText(): Promise<string | null> {
            const result = await this.resultText.textContent();
            return result;
        }
    
        async goto(url = 'https://qa-practice.razvanvancea.ro/bugs-form.html') {
            await this.page.goto(url);
        }
    
    }