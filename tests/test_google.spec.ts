import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/Test-page';
import { GetStarted } from '../pages/GetStarted-page';
let landingPage;
let getStarted;
test('check test', async ({ page }) => {
    landingPage = new LandingPage(page);
    getStarted = new GetStarted(page);

  await landingPage.gotoLandingPage();
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); 
  await page.waitForTimeout(3000);
  await landingPage.getStartedButton.click();
  await page.waitForTimeout(3000);
  await getStarted.isGetStartedPageUp();

});