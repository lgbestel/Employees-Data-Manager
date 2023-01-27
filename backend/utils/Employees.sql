DROP SCHEMA IF EXISTS Projedata;
CREATE SCHEMA IF NOT EXISTS Projedata;

CREATE TABLE Projedata.roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  funcao TEXT NOT NULL
);

CREATE TABLE Projedata.employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nome TEXT NOT NULL,
  dataNascimento DATE NOT NULL,
  salario DECIMAL(8,2) NOT NULL,
  funcaoId INTEGER NOT NULL REFERENCES Projedata.roles (id)
);

INSERT INTO
  Projedata.roles (funcao)
VALUES
  ("Operador"),
  ("Coordenador"),
  ("Diretor"),
  ("Recepcionista"),
  ("Contador"),
  ("Gerente"),
  ("Eletricista");

INSERT INTO
  Projedata.employees (nome, dataNascimento, salario, funcaoId)
VALUES
  ('Maria', '2000-10-18', 2009.44, 1),
  ('João', '1990-12-05',2284.38, 1),
  ('Caio', '1961-02-05',9836.14, 2),
  ('Miguel', '1988-10-14', 19119.88, 3),
  ('Alice', '1995-01-05',2234.68, 4),
  ('Heitor', '1999-11-19', 1582.72, 1),
  ('Arthur', '1993-03-31', 4071.84, 5),
  ('Laura', '1994-07-08',3017.45, 6),
  ('Heloísa', '2003-05-24', 1606.85, 7),
  ('Helena', '1996-09-02', 2799.93, 6);
  
