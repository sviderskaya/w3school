import { expect, type Locator, type Page } from '@playwright/test';

export class SignUp {
    readonly page: Page;
    readonly privacyModalWindow: Locator
    readonly logo: Locator
    readonly signUpBtn: Locator
 
  constructor(page: Page) { 
    this.page = page;
    this.privacyModalWindow = page.locator('//*[@id = "accept-choices"]')
    this.logo = page.locator('//*[@id = "w3-logo"]')
    this.signUpBtn = page.locator('//a[@class="user-anonymous tnb-signup-btn w3-bar-item w3-button w3-right ws-green ws-hover-green ga-top ga-top-signup"]')
  }


  async goto() {
    await this.page.goto('https://www.w3schools.com/');
  }
}