import { test, expect } from '@playwright/test';
import { SignUp } from '../pageObject/signUp';

// test.beforeEach(async ({ page }) => {
//     await page.goto('https://www.w3schools.com/');
//   });

  test('should check user registration with valid data', async ({ page }) => {
    const signUp = new SignUp(page)

    await signUp.goto()
    await signUp.privacyModalWindow.click()
    await signUp.logo.isVisible()
    await signUp.signUpBtn.click()
    await expect(page).toHaveURL('https://profile.w3schools.com/signup?redirect_url=https%3A%2F%2Fwww.w3schools.com%2F')
  });