DROP TABLE home_content;

CREATE TABLE home_content (
    id BIGSERIAL PRIMARY KEY, 
    title VARCHAR(75) NOT NULL,
    content VARCHAR(255) NOT NULL
);

INSERT INTO home_content (title, content)
VALUES ('GoofyGoober', 'Ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta.'),('Taradiddle','Non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et.'),('Wallah','Leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed.');

DROP TABLE contact_content;

CREATE TABLE contact_content (
id BIGSERIAL PRIMARY KEY,
title VARCHAR(55) NOT NULL,
content VARCHAR(255) NOT NULL
);

INSERT INTO contact_content (title,content)
VALUES('Hi-ya', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

DROP TABLE contact;

CREATE TABLE contact (
   id BIGSERIAL PRIMARY KEY,
   first_name VARCHAR(55) NOT NULL,
   last_name VARCHAR(55)NOT NULL,
   title VARCHAR(55) NOT NULL,
   email VARCHAR(75) NOT NULL,
   message VARCHAR(255) NOT NULL
);

INSERT INTO contact (first_name, last_name, title, email, message)
VALUES('Devin', 'Fischer', 'Software Engineer', 'Dev@dev.com', 'Nice to meet you!');
