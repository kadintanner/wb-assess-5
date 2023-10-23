/* Problem 1 */
SELECT email 
FROM customers 
ORDER BY email ASC;

/* Problem 2 */
SELECT id 
FROM orders 
WHERE (
    SELECT (fname, lname) 
    FROM customers 
    WHERE fname='Elizabeth', lname='Crocker'
      );

/* Problem 3 */
SELECT SUM(num_cupcakes) 
FROM orders 
WHERE processed = false;

/* Problem 4 */
SELECT name, (SELECT num_cupcakes FROM orders)
FROM cupcakes
ORDER BY name ASC;

SELECT num_cupcakes 
FROM orders;

/* Problem 5 */
SELECT num_cupcakes 
FROM orders 
ORDER BY num_cupcakes DESC;

SELECT email 
FROM customers;

/* Problem 6 */
SELECT fname, lname, email FROM customers;