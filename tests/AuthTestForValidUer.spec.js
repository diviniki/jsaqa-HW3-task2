const { test, expect } = require("@playwright/test");
//import { test, expect } from '@playwright/test';
const newuser = require("../user");



test('Test 1: authorization for valid user', async ({ page }) => {
  await page.goto('https://netology.ru/?modal=sign_in');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(newuser.user.login); // Login
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(newuser.user.password); // Pass
  await page.getByTestId('login-submit-btn').click();

  //await expect(page).toHaveTitle('Моё обучение'); // не работает
  await expect(page.getByRole('heading', { name: 'Моё обучение' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Моё обучение' })).toContainText('обучение');

  //await expect(page).toHaveURL('https://netology.ru/profile'); // т.к. генерируется уникальный урл пользователя, то в эту ссылку не попасть

});