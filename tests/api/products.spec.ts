import { test, expect } from '@playwright/test';

test('GET /products returns a product list', async({ request }) => {
    const response = await request.get('https://dummyjson.com/products');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(Array.isArray(body.products)).toBe(true);
    expect(body.products.length).toBeGreaterThan(0);
    
    //: First product checks
    const firstProduct = body.products[0];
    expect(firstProduct.id).toBeDefined();
    expect(typeof firstProduct.id).toBe('number')

    expect(firstProduct.title).toBeDefined();
    expect(typeof firstProduct.title).toBe('string')

    expect(firstProduct.price).toBeDefined();
    expect(typeof firstProduct.price).toBe('number')

    expect(firstProduct.category).toBeDefined();
    expect(typeof firstProduct.category).toBe('string')
});

