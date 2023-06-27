INSERT INTO roles (label) VALUES ('USER'), ('ADMIN');
INSERT INTO status (label) VALUES ('PAID'), ('COMPLETE');

INSERT INTO users (username, email, password, role_id) VALUES 
('admin','admin@gmail.com', MD5('admin@gmail.com'), 2),
('johnd','john@gmail.com', MD5('john@gmail.com'), 1),
('mor_2314','morrison@gmail.com', MD5('morrison@gmail.com'), 1),
('kevinryan','kevin@gmail.com', MD5('kevin@gmail.com'), 1),
('donero','don@gmail.com', MD5('don@gmail.com'), 1),
('derek','derek@gmail.com', MD5('derek@gmail.com'), 1),
('david_r','david_r@gmail.com', MD5('david_r@gmail.com'), 1),
('snyder','miriam@gmail.com', MD5('miriam@gmail.com'), 1),
('hopkins','william@gmail.com', MD5('william@gmail.com'), 1),
('kate_h','kate@gmail.com', MD5('kate@gmail.com'), 1),
('jimmie_k','jimmie@gmail.com', MD5('jimmie@gmail.com'), 1);

INSERT INTO carts (user_id, product_id, quantity) VALUES
(1, 1, 2),
(1, 11, 1),
(1, 7, 2),
(1, 9, 2),
(2, 6, 2),
(2, 5, 1),
(2, 8, 4),
(2, 2, 2),
(4, 3, 1),
(4, 7, 2),
(4, 1, 1),
(4, 4, 1);

INSERT INTO orders (cart_id, status_id, order_num) VALUES
(1, 2, "FA-123"),
(2, 2, "FA-123"),
(3, 1, "FA-234"),

(5, 1, "FA-56"),
(6, 1, "FA-56"),

(9, 2, "FA-910"),
(10, 1, "FA-910");