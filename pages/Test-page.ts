import { Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly getStartedButton; 
  readonly gitHubButton;


  constructor(page: Page) {
    this.page = page;
    this.getStartedButton = page.getByRole('link', { name: 'Get started' });
    this.gitHubButton = page.getByRole('link', { name: 'GitHub repository' });
  }

  async gotoLandingPage() {
    await this.page.goto('https://playwright.dev/');
  }
}
