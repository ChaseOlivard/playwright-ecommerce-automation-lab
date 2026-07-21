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
    expect(typeof firstProduct.id).toBe('number');

    expect(firstProduct.title).toBeDefined();
    expect(typeof firstProduct.title).toBe('string');

    expect(firstProduct.price).toBeDefined();
    expect(typeof firstProduct.price).toBe('number');

    expect(firstProduct.category).toBeDefined();
    expect(typeof firstProduct.category).toBe('string');
});
    //: More Checks
test('GET /products 1 is correct', async({ request }) => {
    const response = await request.get('https://dummyjson.com/products/1');
    
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    
    const body = await response.json();
    const product = body;
    expect(product.id).toBeDefined();
    expect(typeof product.id).toBe('number');
    expect(product.id).toBe(1);

    expect(product.title).toBeDefined();
    expect(typeof product.title).toBe('string');

    expect(product.price).toBeDefined();
    expect(typeof product.price).toBe('number');

    expect(product.category).toBeDefined();
    expect(typeof product.category).toBe('string'); 
});
