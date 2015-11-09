CREATE USER 'dbmigrate'@'localhost' IDENTIFIED BY 'dbmigrate';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP ON dbmigrate.* TO 'dbmigrate'@'localhost';

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
