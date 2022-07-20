USE `aragon-renan-souza`;

SET SQL_SAFE_UPDATES = 0; 

CREATE TABLE `Pessoas` (
	id INT PRIMARY KEY,
  	nome VARCHAR(255) NOT NULL,
  	email VARCHAR(255) NOT NULL UNIQUE
  );

DROP TABLE `Pessoas`;

INSERT INTO `Pessoas` (id, nome, email)
VALUES ("011", "Lara", "lara@gmail.com");

INSERT INTO `Pessoas` (id, nome, email)
VALUES ("012", "Joel", "joel@gmail.com");

INSERT INTO `Pessoas`(id, nome, email)
VALUES ("013", "Felipe", "felipe@gmail.com");

SELECT * FROM `Pessoas`;

SELECT id, nome, email FROM `Pessoas`;


SELECT id FROM `Pessoas`;

SELECT id AS ID, nome AS primeiroNome
FROM `Pessoas`;

SELECT id AS nome FROM `Pessoas`;

SELECT * FROM `Pessoas`
WHERE nome LIKE "A%";

SELECT * FROM `Pessoas`
WHERE nome LIKE "F%";

SELECT * FROM `Pessoas`
WHERE nome LIKE "F%";

SELECT * FROM `Pessoas`
WHERE nome, email LIKE "U%";

INSERT INTO `Pessoas`
VALUES ("014", "Leo", "leo@labenu.com.br" );

 SELECT * FROM `Pessoas`; 
 
 DELETE FROM `Pessoas`
    
DELETE FROM `Pessoas`;

DELETE FROM `Pessoas`
WHERE nome = "leo";