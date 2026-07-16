import { test, expect} from '@playwright/test';
import { InventoryPage } from '../../pages/Inventory-Page';
import { LoginPage } from '../../pages/Login-Page';


test('login page loads' , async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.expectLoginFormVisible();
});

test('successful login shows products page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.expectProductsPageVisible();
});

test('invalid login shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_ssauce');
    await loginPage.expectLoginErrorVisible();
});

test('Successful add to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.expectCartBadgeCount('1');
    await inventoryPage.openCart();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('Successful remove from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.expectCartBadgeCount('1');
    await inventoryPage.openCart();
    await page.getByRole('button', {name: 'Remove'}).click();

    await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).not.toBeVisible();
});

test('Successful checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.expectCartBadgeCount('1');
    await inventoryPage.openCart();

    await page.getByRole('button', {name: 'Checkout'}).click();

    await page.getByPlaceholder('First Name').fill('standard');
    await page.getByPlaceholder('Last Name').fill('user');
    await page.getByPlaceholder('Zip/Postal Code').fill('70806');
    await page.getByRole('button', {name: 'Continue'}).click();

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await page.getByRole('button', {name: 'Finish'}).click();

    await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
