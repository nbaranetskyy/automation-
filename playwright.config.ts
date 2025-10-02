import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium',  // or 'firefox' / 'webkit'
    headless: true,           // set false if you want to see the browser
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});