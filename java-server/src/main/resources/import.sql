/*Insert buildings*/
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url, amenities, resident_types, building_type, room_types, minimum_cost) VALUES ('White Hall', '21 Forsyth Street', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/WHITE-exterior-02-e1511889474120.jpg', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/WHITE-exterior-02-e1511889474120.jpg', "Laundry, Proctor, Vending Machines, Elevator, Kitchen, Lounge", "Freshmen", "Economy, Standard", "Traditiional", 3425);
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('Stetson West', '10 Forsyth Street', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/STW-exterior-Speare-Quad-03-e1511889294218.jpg', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/STW-exterior-Speare-Quad-03-e1511889294218.jpg');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('Stetson East', '11 Speare Place', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/STW-exterior-Speare-Quad-03-e1511889294218.jpg', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/STW-exterior-Speare-Quad-03-e1511889294218.jpg');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('Speare Hall', '10 Speare Place', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/spearehall.jpg', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/spearehall.jpg');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('Smith Hall', '129 Hemenway Street', 'https://i1.wp.com/www.society19.com/wp-content/uploads/2016/06/smith-2.jpg?resize=923%2C692&ssl=1', 'https://i1.wp.com/www.society19.com/wp-content/uploads/2016/06/smith-2.jpg?resize=923%2C692&ssl=1');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('Light Hall', '81-83 St. Stephen Street', 'https://i1.wp.com/www.society19.com/wp-content/uploads/2016/06/light-2.jpg?ssl=1', 'https://i1.wp.com/www.society19.com/wp-content/uploads/2016/06/light-2.jpg?ssl=1');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('Kerr Hall', '96 The Fenway', 'https://i1.wp.com/www.society19.com/wp-content/uploads/2016/06/kerr.jpg?ssl=1', 'https://i1.wp.com/www.society19.com/wp-content/uploads/2016/06/kerr.jpg?ssl=1');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('Melvin Hall', '90 The Fenway', 'https://i1.wp.com/www.society19.com/wp-content/uploads/2016/06/melvin.jpg?ssl=1', 'https://i1.wp.com/www.society19.com/wp-content/uploads/2016/06/melvin.jpg?ssl=1');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('Kennedy Hall', '119 Hemenway Street', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/WHITE-exterior-02-e1511889474120.jpg', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/WHITE-exterior-02-e1511889474120.jpg');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('International Village', '1155 Tremont Street', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/INV-exterior-01.jpg', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/INV-exterior-01.jpg');
INSERT INTO buildings (name, address, thumbnail_image_url, main_image_url) VALUES ('East Village', '291 St. Botolph Street', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/exterior-04.jpg', 'https://www.northeastern.edu/housing/wp-content/uploads/2017/05/exterior-04.jpg');

/*Insert users*/
INSERT INTO users (username, password, name, major, year) VALUES ('liu.st@husky.neu.edu', 'password', 'Stanley Liu', 'Computer Science', 3);
INSERT INTO users (username, password, name, major, year) VALUES ('hoi.a@husky.neu.edu', 'password', 'Aryton Hoi', 'Computer Science', 4);

/*Insert staff*/
INSERT INTO staff (username, password, name, role) VALUES ('aoun@husky.neu.edu', 'password', 'Aoun', 'President');

/*Insert review*/
-- INSERT INTO reviews (username, user_username, date, text, image_url, sentiment, building_id) VALUES ('hoi.a@husky.neu.edu', 'hoi.a@husky.neu.edu', '2020-04-14', 'This place is amazing!', 0.8999999761581421, 1);