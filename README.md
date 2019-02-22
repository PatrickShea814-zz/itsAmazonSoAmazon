# itsAmazingSoAmazing
Node.js &amp; MySQL: Kanyazon
It's amazing
I'm the reason
Everybody fired up this evening

An Amazon-like storefront using Node.js and MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

MySQL and Inquirer npm packages are provided and required for data input and storage.

To Run:
1. Download Repo
2. NPM Init
3. NPM Install MySQL
4. NPM Install Inquirer 

Built Using:
- HTML5
- CSS3
- JavaScript
- Node.js
- MySQL/MySQL Workbench

How to use:
The app prompts the users with two messages.
   * The first asks the ID of the product the user would like to buy.
   * The second message asks how many units of the selected product.

When an order is placed the application will check if the store's stock of the selected product can meet the user's request.
   * If not, the order is prevented from being placed and the user is alerted of the insufficient quantity.

If the store's stock of the selected product can meet the user's requirement:
   * The SQL database is updated to reflect the remaining quantity.
   * Once the database is updated the user is shown the total cost of their purchase.
