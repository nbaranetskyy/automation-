import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/Test-page';
let landingPage;
test('check test', async ({ page }) => {
    landingPage = new LandingPage(page);

  await landingPage.gotoLandingPage();
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); 
  await page.waitForTimeout(3000);
  await landingPage.getStartedButton.click();
  await page.waitForTimeout(3000);
});