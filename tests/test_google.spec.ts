import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/Test-page';
import { GetStarted } from '../pages/GetStarted-page';
import { GitHub } from '../pages/GitHub-page';
let landingPage;
let getStarted;
let gitHubPage;
test('Test GetStarted page', async ({ page }) => {
  landingPage = new LandingPage(page);
  getStarted = new GetStarted(page);

  await landingPage.gotoLandingPage();
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); 
  await page.waitForTimeout(3000);
  await landingPage.getStartedButton.click();
  await page.waitForTimeout(3000);
  await getStarted.isGetStartedPageUp();
});

test('Test GitHub page', async ({ page }) => {
  gitHubPage = new GitHub(page);
  
  await page.goto('https://github.com/microsoft/playwright');
  await page.waitForTimeout(3000);
  await gitHubPage.isGitHubPageUp();
});