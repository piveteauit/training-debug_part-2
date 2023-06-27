SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS roles CASCADE;
SET FOREIGN_KEY_CHECKS = 1;
CREATE TABLE roles (
    id int primary key NOT NULL AUTO_INCREMENT,
    label varchar(10) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS status CASCADE;
SET FOREIGN_KEY_CHECKS = 1;
CREATE TABLE status (
    id int primary key NOT NULL AUTO_INCREMENT,
    label varchar(10) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS users CASCADE;
SET FOREIGN_KEY_CHECKS = 1;
CREATE TABLE users (
    id int primary key NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    email varchar(18) UNIQUE NOT NULL,
    password varchar(255) DEFAULT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS products CASCADE;
SET FOREIGN_KEY_CHECKS = 1;
CREATE TABLE products (
    id int primary key NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
    description TEXT NOT NULL,
    image varchar(255) NOT NULL,
    price DECIMAL(7, 2) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS carts CASCADE;
SET FOREIGN_KEY_CHECKS = 1;
CREATE TABLE carts (
    id int primary key NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
    FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS orders CASCADE;
SET FOREIGN_KEY_CHECKS = 1;
CREATE TABLE orders (
    id int primary key NOT NULL AUTO_INCREMENT,
    cart_id INT NOT NULL,
    status_id INT NOT NULL,
    order_num VARCHAR(25) NOT NULL,
    FOREIGN KEY (cart_id)
        REFERENCES carts(id)
        ON DELETE CASCADE,
    FOREIGN KEY (status_id)
        REFERENCES status(id)
        ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;