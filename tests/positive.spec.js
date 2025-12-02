const { test, expect } = require('@playwright/test');

test('should register new user with valid data', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Registration' }).click();

  await page.locator('#signupName').fill('Serhii'); 
  await page.locator('#signupLastName').fill('Serhienko');
  await page.locator('#signupEmail').fill(`aqa-${Date.now()}@test.com`);
  await page.locator('#signupPassword').fill('StrongPassword1');
  await page.locator('#signupRepeatPassword').fill('StrongPassword1');


  await expect(page.locator('button:has-text("Register")')).toBeEnabled();
  await page.click('button:has-text("Register")');

  await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');
});
