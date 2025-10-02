import { test, expect } from '@playwright/test';

test('check test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); 
//  const title = await page.title();
//   console.log("ACTUAL TITLE:", title);
//   await expect(page).toHaveTitle("Hello");
});