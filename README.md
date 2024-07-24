# shopping-kart-kata

This kata was completed as part of the interview process for SpareRoom in a two-week timeframe.

## Overview

The project implements a simple checkout system with four products, each having a specific unit price. Some products have special pricing when bought in certain quantities (e.g., 3 of product A costs 140 instead of 150). The checkout system processes the data source and returns the subtotal when queried.

I plan to build a basic API and a front-end where users can add items to their shopping cart and the total is calculated when they checkout.

## Pricing Dataset and Offers

| Item Code | Unit Price | Special Price |
| --------- | ---------- | ------------- |
| A         | 50         | 3 for 140     |
| B         | 35         | 2 for 60      |
| C         | 25         | -             |
| D         | 12         | -             |

## Project Structure

- calculateTotal.js: The main file containing the implementation of the calculating the total for all the products.
- **tests**/checkout.test.js: Test cases for the checkout system using Jest.
- package.json: Configuration file for the project, including dependencies and scripts.
- Not needed folder: previous attempts to solve the challenge
- products.js: File containing the unit prices for each product and the special price. I decided to work with nested objects.
- README.md: Project documentation.

## To run this repo

1. Clone the repository to your local machine:
   git clone https://github.com/your-username/shopping-cart-kata.git
   cd shopping-cart-kata

2. Install dependencies:
   npm install

3. Run tests:
   npm test
