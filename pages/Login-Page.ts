import { expect, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async login(username: string, password: string) {
        await this.page.getByPlaceholder('Username').fill('username');
        await this.page.getByPlaceholder('Password').fill('password');
        await this.page.getByRole('button', {name: 'Login'}).click();
    }
    async expectLoginFormVisible() {
        await expect(this.page.getByPlaceholder('Username')).toBeVisible();
        await expect(this.page.getByPlaceholder('Password')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible();
    }
    async expectLoginErrorVisible() {
        await expect(
          this.page.getByText('Epic sadface: Username and password do not match any user in this service')
        ).toBeVisible();
      }
}