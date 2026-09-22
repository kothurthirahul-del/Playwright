const { test, expect } = require("@playwright/test");

test('Mock500 test', async ({ page }) => {

    await page.route(
        'https://jsonplaceholder.typicode.com/users/1',
        async route => {

            await route.fulfill({
                status: 500
            });

        }
    );

    const response = await page.goto(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(500);
});