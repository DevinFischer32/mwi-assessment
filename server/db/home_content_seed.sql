DROP TABLE home_content;

CREATE TABLE home_content (
    id BIGSERIAL PRIMARY KEY, 
    title VARCHAR(75) NOT NULL,
    content VARCHAR(255) NOT NULL
);

INSERT INTO home_content (title, content)
VALUES ('GoofyGoober', 'Ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta.'),('Taradiddle','Non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et.'),('Wallah','Leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed.');

