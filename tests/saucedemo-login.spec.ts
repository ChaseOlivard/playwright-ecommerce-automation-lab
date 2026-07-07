import { test, expect} from '@playwright/test';

test('login page loads' , async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('successful login shows products page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Products')).toBeVisible();

});

test ('invalid login shows error', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_ssauce');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

});