Para iniciar o servidor da api instalar as seguintes depedencias:# pip install fastapi
 pip install uvicorn
 pip install mysqlclient
 pip install mysql-connector-python

E executar o seguinte comando 
 python -m uvicorn api:app --reload

Mas antes é necessário criar o banco de dados.
Para criar o banco de dados, executar as seguintes querys. 

executar os seguintes comandos para criar a o banco: 

CREATE DATABASE `uniride` ;

CREATE TABLE `uniride`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  `data_nasc` DATE NOT NULL,
  `sexo` INT NOT NULL,
  `cidade` VARCHAR(255) NOT NULL,
  `bairro` VARCHAR(255) NOT NULL,
  `insta` VARCHAR(255) NULL,
  `email` VARCHAR(255) NOT NULL,
  `telefone` VARCHAR(255) NOT NULL,
  `foto` VARCHAR(255) NOT NULL,
  `nota` FLOAT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE `uniride`.`motorista` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carro` VARCHAR(45) NOT NULL,
  `placa` VARCHAR(45) NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE `uniride`.`carona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cidade` VARCHAR(255) NOT NULL,
  `bairro` VARCHAR(255) NOT NULL,
  `obs` VARCHAR(255) NOT NULL,
  `horario` TIME NOT NULL,
  `dias` VARCHAR(10) NOT NULL,
  `motorista_id` INT NOT NULL,
  `passageiro_id1` INT NOT NULL,
  `passageiro_id2` INT NOT NULL,
  `passageiro_id3` INT NOT NULL,
  `passageiro_id4` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;