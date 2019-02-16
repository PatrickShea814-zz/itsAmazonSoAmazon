// requirer npm package 'mysql'
var mysql = require('mysql');
// requirer npm package 'inquirer'
var inquirer = require('inquirer');

// Create & Configure MySQL Connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.PORT || 3306,
    user: 'root',
    password: 'yourRootPassword',
    database: 'bamazon'
});

// Connect To MySQL Server & SQL Database
connection.connect(function(err) {
    if (err) {
        console.error('Error Connecting: ' + err.stack);
        return;
    } else {
        console.log("Connection Successful. Connected to Port: " + connection.port);
    }
    console.log('Connected as '+ connection.threadId);
});

connection.query('SELECT * FROM products', { title: 'database test' }, function (err, res) {
    if (err) throw err;
    var productsArr = [];
    productsArr.push(res);

    console.log('Welcome To Kanyazon!\n');

    for (i = 0; i < res.length; i++) {
        console.log(res[i].item_id + '\t' + res[i].product_name + '\t' + '$' + res[i].price);
        console.log('--------------------------------------------');
    };
    customerOrder();
});

// Inventory Check
function inventoryCheck(id, quantity) {
    var stock_quantity = 'SELECT stock_quantity FROM products WHERE item_id = ' + id;

    connection.query(
        stock_quantity,
        { title: "Quantity In Stock" },
        function(err, res, fields) {
            let currentStock = res[0].stock_quantity;
            let quantityChecker = currentStock - quantity;
            if (quantityChecker >= 0) {
                console.log("Current Checkout Quantity: In Stock.");
                orderSubmitted(id, quantity);
            } else if ( quantityChecker < 0) {
                console.log('Current Checkout Quantity: Not In Stock.\n');
                console.log(`Current Available Stock: ${currentStock}.`)
                customerOrder();
            } else {
                console.log('Current Checkout Quantity: ' + err);
            }
        }
    );
};

// Prompt User To Search & Create Order
function customerOrder() {
    // Initialize Inquirer
    inquirer.prompt([
        {
            name: "id",
            message: "Search for desired product by entering the ID.",
            type: "input"
        },
        {
            name: "quantity",
            message: "How many would you like to purchase?",
            type: "input"
        }
        // Store Input As Variables & Print Input
    ]).then(function (response) {
        id = response.id;
        quantity = response.quantity;
        console.log(`Product ID: ${id}.`);
        console.log(`Product quantity selected for checkout: ${quantity}.`);
        
        // Check Inventory Based On User Input
        inventoryCheck(id, quantity);
    })
};

function orderSubmitted(id, quantity) {
    var updateStock = "UPDATE products SET stock_quantity = stock_quantity - " + quantity + "WHERE id = " + id;

    connection.query(
        updateStock,
        { title: 'Inventory Updated' },
        function(err, res, fields) {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('Order Has Been Submitted. We thank you for your business. Come back again!');
                
            }
        }
    );
};