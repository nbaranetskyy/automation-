import { test, expect } from '@playwright/test';
test('check test', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // Friday 03.10.2025
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); 

});