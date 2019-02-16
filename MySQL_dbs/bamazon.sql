DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL DEFAULT 'Undefined Product',
    department_name VARCHAR(50) NOT NULL DEFAULT 'Department TBD',
    price INTEGER(10) NOT NULL DEFAULT 00.00,
    stock_quantity INTEGER(10) NULL DEFAULT 00
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Shampoo', 'Personal Hygiene', 3.49, 583),
        ('Milk', 'Grocery', 2.89, 258),
        ('Xbox', 'Electronics', 217.95, 13),
        ('Basketball', 'Sports & Fitness', 14.98, 49),
        ('Lamp', 'Home Decor', 27.89, 36),
        ('Toothpaste', 'Personal Hygiene', 1.89, 129),
        ('Eggs', 'Grocery', 2.29, 284),
        ('Playstation', 'Electronics', 239.99, 17),
        ('Baseball', 'Sports & Fitness', 12.79, 23),
        ('Rug', 'Home Decor', 99.98, 8);

ALTER TABLE products ADD COLUMN product_sales INTEGER(100) NULL DEFAULT 0;




