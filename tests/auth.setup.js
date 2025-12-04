import { test } from '@playwright/test';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

test('login and save storage state', async ({ page }) => {
  if (!fs.existsSync('storage')) fs.mkdirSync('storage');

  await page.goto(process.env.BASE_URL);

  await page.getByRole('button', { name: /sign in/i }).click();
  await page.locator('#signinEmail').fill(process.env.USER_EMAIL);
  await page.locator('#signinPassword').fill(process.env.USER_PASSWORD);
  await page.getByRole('button', { name: /login/i }).click();

  await page.waitForURL('**/panel/garage');

  await page.context().storageState({ path: 'storage/user.json' });
});