DROP DATABASE IF EXISTS restaurantDB;

CREATE DATABASE restaurantDB;

USE restaurantDB;

CREATE TABLE reservationDB (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    phone_number VARCHAR(12),
    number_of_people INT(100),
    PRIMARY KEY (id)
);


INSERT INTO reservationDB (name, phone_number, number_of_people)
VALUES ("Briant Smith", 720-918-4875, 5);

INSERT INTO reservationDB (name, phone_number, number_of_people)
VALUES ("Charlie Jones", 720-918-8244, 6);

SELECT * FROM reservationDB;