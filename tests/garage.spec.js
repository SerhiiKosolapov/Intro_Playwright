import { test, expect } from '@playwright/test';

test('user can open garage page when logged in', async ({ page }) => {
  await page.goto('/panel/garage');
  await expect(page.getByRole('button', { name: 'Add car' })).toBeVisible();
});