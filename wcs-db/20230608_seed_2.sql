INSERT INTO roles (label) VALUES ('USER'), ('ADMIN');

INSERT INTO users (username, email, password, role_id) VALUES 
('admin','admin@gmail.com','admin@gmail.com', 2),
('johnd','john@gmail.com','john@gmail.com', 1),
('mor_2314','morrison@gmail.com','morrison@gmail.com', 1),
('kevinryan','kevin@gmail.com','kevin@gmail.com', 1),
('donero','don@gmail.com','don@gmail.com', 1),
('derek','derek@gmail.com','derek@gmail.com', 1),
('david_r','david_r@gmail.com','david_r@gmail.com', 1),
('snyder','miriam@gmail.com','miriam@gmail.com', 1),
('hopkins','william@gmail.com','william@gmail.com', 1),
('kate_h','kate@gmail.com','kate@gmail.com', 1),
('jimmie_k','jimmie@gmail.com','jimmie@gmail.com', 1);

INSERT INTO carts (user_id, product_id, quantity) VALUES
(1, 1, 2),
(1, 11, 1),
(1, 7, 2),
(4, 3, 1),
(4, 7, 2),
(4, 1, 1),
(4, 4, 1);