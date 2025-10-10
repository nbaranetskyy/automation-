import { Page } from '@playwright/test';

export class GetStarted {
  readonly page: Page;
  readonly introduction; 

  constructor(page: Page) {
    this.page = page;
    this.introduction = page.getByRole('heading', { name: 'IntroductionDirect link to' });
  }

  async isGetStartedPageUp() {
   await this.introduction.waitFor({state:"visible", timeout:8000});
  }
}