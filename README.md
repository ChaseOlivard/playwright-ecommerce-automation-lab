# Playwright E-Commerce Automation Lab

This is a QA automation portfolio project built with Playwright and TypeScript. It covers browser-based UI tests for an e-commerce checkout flow and REST API tests for product and cart endpoints.

The goal of this project is to show practical automation skills across both UI and API testing, including Page Object Model structure, JSON response validation, nested data checks, search testing, and negative API scenarios.

## Tech Stack

- Playwright for browser automation and API testing
- TypeScript for test implementation
- Node.js / npm for project setup and test execution
- GitHub Actions for CI
- SauceDemo for UI test coverage
- DummyJSON for REST API test coverage

## Test Coverage

This project includes UI and API test coverage for common e-commerce workflows and data validation scenarios.

### UI Tests

The UI tests cover the SauceDemo checkout flow using Playwright browser automation and Page Object Model classes.

Covered scenarios include:

- Login page validation
- Successful login
- Invalid login error handling
- Add product to cart
- Remove product from cart
- Complete checkout flow

### API Tests

The API tests cover DummyJSON product and cart endpoints using Playwright's API request fixture.

Covered scenarios include:

- Product list validation
- Single product lookup
- Product search with query parameters
- Negative product lookup / not-found response
- Cart list validation
- Single cart lookup
- Negative cart lookup / not-found response
- Nested cart product validation

## Project Structure

```text
playwright-ecommerce-automation-lab/
├── pages/
│   ├── Login-Page.ts
│   └── Inventory-Page.ts
│
├── tests/
│   ├── UI/
│   │   └── saucedemo-login.spec.ts
│   │
│   └── api/
│       ├── products.spec.ts
│       └── carts.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```
The `pages/` folder contains Page Object Model classes used by the UI tests. The `tests/UI/` folder contains browser-based Playwright tests, while `tests/api/` contains REST API tests using Playwright's request fixture.

## How to Run the Tests

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test --project=chromium
```

Run only UI tests:

```bash
npx playwright test tests/UI --project=chromium
```

Run only API tests:

```bash
npx playwright test tests/api --project=chromium
```

View the HTML report:

```bash
npx playwright show-report
```

## Reports and CI

Playwright generates an HTML report after test runs. To view the latest local report:

```bash
npx playwright show-report
```

This project includes a GitHub Actions workflow located at `.github/workflows/playwright.yml`. The workflow installs dependencies, installs Chromium for Playwright, runs the test suite with `npx playwright test --project=chromium`, and uploads the Playwright report as a workflow artifact.

The test suite runs successfully in GitHub Actions using Chromium.

## Skills Demonstrated

This project demonstrates practical QA automation skills across both UI and API testing:

- Writing browser-based UI tests with Playwright
- Organizing UI automation with the Page Object Model pattern
- Testing positive and negative user flows
- Automating an end-to-end checkout workflow
- Writing REST API tests with Playwright's request fixture
- Validating HTTP status codes and response content types
- Parsing and validating JSON response bodies
- Checking field existence and data types
- Testing search/query behavior
- Validating nested JSON structures for cart and product line-item data
- Testing negative API scenarios such as not-found responses
- Running automated tests through GitHub Actions CI

## Current Test Summary

The project currently includes 13 passing tests:

- 6 UI tests covering login, cart, and checkout behavior
- 4 product API tests covering list, detail, search, and negative scenarios
- 3 cart API tests covering list, detail, and negative scenarios

The test suite passes locally and in GitHub Actions using Chromium.

