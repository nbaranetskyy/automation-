import { Page } from '@playwright/test';

export class GitHub {
  readonly page: Page;
  readonly codeButton; 

  constructor(page: Page) {
    this.page = page;
    this.codeButton = page.getByRole('button', { name: 'Code' });
  }

  async isGitHubPageUp() {
   await this.codeButton.waitFor({state:"visible", timeout:8000});
  }
}