import { Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly getStartedButton; 

  constructor(page: Page) {
    this.page = page;
    this.getStartedButton = page.getByRole('link', { name: 'Get started' });
  }

  async gotoLandingPage() {
    await this.page.goto('https://playwright.dev/');
  }
}
