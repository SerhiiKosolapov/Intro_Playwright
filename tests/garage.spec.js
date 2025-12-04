import { test, expect } from './fixtures/userGaragePage';
import profileMock from './mocks/profile.mock.json';
import { CarsApi } from './api/cars.api.js';

test('full flow: mocked profile + API create car + UI check', async ({ userGaragePage, request }) => {

  await userGaragePage.route('**/api/users/profile', route =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(profileMock),
    })
  );

  await userGaragePage.goto('/panel/profile');
  await expect(userGaragePage.locator('p.profile_name')).toHaveText('Serght Serght');

  const carsApi = new CarsApi(request);
  const response = await carsApi.createCar({
    carBrandId: 1,
    carModelId: 4,
    mileage: 123,
  });

  expect(response.status()).toBe(201);

  await userGaragePage.goto('/panel/garage');

  const carItem = userGaragePage.getByText('A6').first();

  await expect(carItem).toBeVisible();

  await userGaragePage.locator('span.icon.icon-edit').first().click();

  await expect(
    userGaragePage.locator('input[formcontrolname="miles"]')
  ).toHaveValue('123');
});