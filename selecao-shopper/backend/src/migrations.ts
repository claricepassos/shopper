import {connection} from './data/connections'

connection
   .raw(`
   CREATE TABLE IF NOT EXISTS products(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price float,
      qty_stock INT
   );
 
      CREATE TABLE IF NOT EXISTS client_order(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         delivery_date VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS orders(
         product_quantity INT, 
         products_id VARCHAR(255),
         FOREIGN KEY (products_id) REFERENCES products(id),
         order_id VARCHAR(255),
         FOREIGN KEY (order_id) REFERENCES client_order(id)

      );
   `)
   .then(console.log)
   .catch(console.log)