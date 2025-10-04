import { test, expect } from '@playwright/test';
test('check test', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // Test 3
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); 
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(5000);
});