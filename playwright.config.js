import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  use: {
  baseURL: process.env.BASE_URL,
  httpCredentials: {
    username: process.env.HTTP_USERNAME || '',
    password: process.env.HTTP_PASSWORD || '',
  },
},

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.js/,
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storage/user.json',
      },
      dependencies: ['setup'], 
    },
  ],
});