import { test, expect } from '@playwright/test';
test('check test', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // Friday FunDay
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); 

});