import { test, expect } from '@playwright/test';

test('GET /carts returns a cart list', async({ request }) => {
    const response = await request.get('https://dummyjson.com/carts');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    expect(Array.isArray(body.carts)).toBe(true);
    expect(body.carts.length).toBeGreaterThan(0);

    const firstCart = body.carts[0];

    expect(firstCart.id).toBeDefined();
    expect(typeof firstCart.id).toBe('number');

    expect(firstCart.userId).toBeDefined();
    expect(typeof firstCart.userId).toBe('number');

    expect(firstCart.total).toBeDefined();
    expect(typeof firstCart.total).toBe('number');

    expect(firstCart.totalProducts).toBeDefined();
    expect(typeof firstCart.totalProducts).toBe('number');

    expect(firstCart.totalQuantity).toBeDefined();
    expect(typeof firstCart.totalQuantity).toBe('number');

    expect(Array.isArray(firstCart.products)).toBe(true);
    expect(firstCart.products.length).toBeGreaterThan(0);

    const firstCartProduct = firstCart.products[0];

    expect(firstCartProduct.id).toBeDefined();
    expect(typeof firstCartProduct.id).toBe('number');
    
    expect(firstCartProduct.title).toBeDefined();
    expect(typeof firstCartProduct.title).toBe('string');
    
    expect(firstCartProduct.price).toBeDefined();
    expect(typeof firstCartProduct.price).toBe('number');
    
    expect(firstCartProduct.quantity).toBeDefined();
    expect(typeof firstCartProduct.quantity).toBe('number');
    
    expect(firstCartProduct.total).toBeDefined();
    expect(typeof firstCartProduct.total).toBe('number');

});
test('GET /carts/1 returns cart details', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/carts/1');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    const cart = body;


    expect(cart.id).toBeDefined();
    expect(typeof cart.id).toBe('number');
    expect(cart.id).toBe(1)

    expect(cart.userId).toBeDefined();
    expect(typeof cart.userId).toBe('number');

    expect(cart.total).toBeDefined();
    expect(typeof cart.total).toBe('number');

    expect(cart.totalProducts).toBeDefined();
    expect(typeof cart.totalProducts).toBe('number');

    expect(cart.totalQuantity).toBeDefined();
    expect(typeof cart.totalQuantity).toBe('number');

    expect(Array.isArray(cart.products)).toBe(true);
    expect(cart.products.length).toBeGreaterThan(0);

    const firstCartProduct = cart.products[0];

    expect(firstCartProduct.id).toBeDefined();
    expect(typeof firstCartProduct.id).toBe('number');

    
    expect(firstCartProduct.title).toBeDefined();
    expect(typeof firstCartProduct.title).toBe('string');
    
    expect(firstCartProduct.price).toBeDefined();
    expect(typeof firstCartProduct.price).toBe('number');
    
    expect(firstCartProduct.quantity).toBeDefined();
    expect(typeof firstCartProduct.quantity).toBe('number');
    
    expect(firstCartProduct.total).toBeDefined();
    expect(typeof firstCartProduct.total).toBe('number');


});
test('GET /carts/999999 returns not found error', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/carts/999999');
    
    expect(response.status()).toBe(404);
    expect(response.headers()['content-type']).toContain('application/json');
    
    const body = await response.json();

    expect(body.message).toBeDefined();
    expect(typeof body.message).toBe('string');
    expect(body.message.toLowerCase()).toContain('not found');

    expect(body.id).toBeUndefined();
    expect(body.products).toBeUndefined();
    expect(body.total).toBeUndefined();
    expect(body.userId).toBeUndefined();
});


