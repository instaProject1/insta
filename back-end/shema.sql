CREATE SCHEMA IF NOT EXISTS `insta` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema newschema
-- -----------------------------------------------------
USE `insta` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `insta`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `userPassword` VARCHAR(45) NULL,
  `userBirth` VARCHAR(45) NULL,
  `userEmail` VARCHAR(100) UNIQUE NULL,
  `userPic` VARCHAR(300) NULL,
  `userBio` VARCHAR(45) NULL,
  `userGender` VARCHAR(45) NULL,
  `userFollowers` INT NULL,
  `userStatus` VARCHAR(45) NULL,
  `fullName` VARCHAR(45) UNIQUE Null,
  `token` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));