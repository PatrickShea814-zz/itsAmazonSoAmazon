USE bamazon;

CREATE TABLE departments (
department_id INTEGER(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(50) DEFAULT NULL,
over_head_costs INTEGER(10)
);