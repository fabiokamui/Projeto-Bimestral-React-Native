create database drizzle;
use drizzle;
create table usuarios_obrigatorio (
id_usuario INT UNSIGNED NOT NULL AUTO_INCREMENT,
Nome varchar (50) not null,
Nascimento date not null,
Sexo char (1),
email varchar (50) not null,
primary key (id_usuario));
 
create Table contatos_usuario (
id_usuario INT UNSIGNED NOT NULL AUTO_INCREMENT,
Apelido varchar (50) not null,
status char (3));
 
 create table mensagens_usuario (
 mensagem_data date,
 mensagem_de varchar (25),
 mensagem_para varchar (25),
 mensagem_conteudo varchar(1000));
