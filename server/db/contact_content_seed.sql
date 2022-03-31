DROP TABLE contact_content;

CREATE TABLE contact_content (
id BIGSERIAL PRIMARY KEY,
title VARCHAR(55),
content VARCHAR(255)
);

INSERT INTO contact_content (title,content)
VALUES('Hi-ya', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');