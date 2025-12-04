// const { test, expect } = require('@playwright/test');
// const { RegistrationPage } = require('../pages/RegistrationPage');

// test('should register new user with valid data', async ({ page }) => {
//   const registrationPage = new RegistrationPage(page);

//   await registrationPage.open();

//   await registrationPage.fillForm({
//     name: 'Serhii',
//     lastName: 'AEefefeffe',
//     email: `aqa-${Date.now()}@test.com`,
//     password: 'StrongPassword1',
//     repeatPassword: 'StrongPassword1',
//   });

//   await registrationPage.submit();

//   await expect(page).toHaveURL(process.env.BASE_URL);
// });