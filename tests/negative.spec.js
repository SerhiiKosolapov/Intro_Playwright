const { test, expect } = require('@playwright/test');

test('should show error for empty name', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();

    await page.locator('#signupName').fill(' ');
    await page.locator('#signupName').blur();

    await expect(page.getByText('Name is invalid')).toBeVisible();
});

test('should show error for short name', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();

    await page.locator('input[name="name"]').fill('A');
    await page.locator('#signupName').blur();

    await expect(page.locator('text=Name has to be from 2 to 20 characters long')).toBeVisible();
});

test('should show error for invalid email', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();

    await page.locator('#signupEmail').fill('not-an-email');
    await page.locator('#signupEmail').blur();

    await expect(page.getByText('Email is incorrect')).toBeVisible();
});


test('should show error for weak password', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();

    await page.locator('#signupPassword').fill('password1');
    await page.locator('#signupPassword').blur();

    await expect(
        page.getByText(
            'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
        )
    ).toBeVisible();
});

test('should show error when passwords do not match', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();

    await page.locator('#signupPassword').fill('Password1');
    await page.locator('#signupRepeatPassword').fill('Password2');
    await page.locator('#signupRepeatPassword').blur();

    await expect(page.getByText('Passwords do not match')).toBeVisible();
});