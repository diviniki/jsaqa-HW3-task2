const { test, expect } = require("@playwright/test");
//import { test, expect } from '@playwright/test';
const newuser = require("../user");


test('Test 2: authorization for unvalid user', async ({ page }) => {
  await page.goto('https://netology.ru/?modal=sign_in');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(newuser.user.login); // Login
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('123'); // Pass
  await page.getByTestId('login-submit-btn').click();

  await expect(page.getByTestId('login-error-hint')).toContainText('Вы ввели неправильно логин или пароль.');
});