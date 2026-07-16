import { expect, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async expectProductsPageVisible() {
        await expect(this.page.getByText('Products')).toBeVisible();
    }
    getProductCard(productName: string){
        return this.page
        .locator('[data-test="inventory-item"]')
        .filter({ hasText: productName });
    }
    async addProductToCart(productName: string){
        const productCard = this.getProductCard(productName);
        await productCard.getByRole('button', { name: 'Add to cart' }).click();
    }
    async expectCartBadgeCount(count: string){
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText(count);
    }
    async openCart(){
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
}