-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.3.0 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para loja
DROP DATABASE IF EXISTS `loja`;
CREATE DATABASE IF NOT EXISTS `loja` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `loja`;

-- Copiando estrutura para tabela loja.clientes
DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela loja.clientes: ~2 rows (aproximadamente)
REPLACE INTO `clientes` (`id`, `nome`, `cpf`, `endereco`, `createdAt`, `updatedAt`) VALUES
	(1, 'Marcelo', '145.156.478-78', 'rua 3', '2024-04-17 20:45:30', '2024-04-17 20:45:31'),
	(2, 'Leoncio', '189.456.789.61', 'rua 2', '2024-04-17 20:46:01', '2024-04-17 20:46:02'),
	(3, 'Zeca urubu', '456.156.489.79', 'rua 5', '2024-04-17 20:46:38', '2024-04-17 20:46:39');

-- Copiando estrutura para tabela loja.pedidos
DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(255) NOT NULL,
  `valor` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela loja.pedidos: ~2 rows (aproximadamente)
REPLACE INTO `pedidos` (`id`, `numero`, `valor`, `createdAt`, `updatedAt`) VALUES
	(1, '1', 56.9, '2024-04-17 21:35:01', '2024-04-17 21:35:02'),
	(2, '2', 29.9, '2024-04-17 21:35:21', '2024-04-17 21:35:21'),
	(3, '3', 90.99, '2024-04-17 21:35:40', '2024-04-17 21:35:41');

-- Copiando estrutura para tabela loja.produtos
DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `preco` float NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela loja.produtos: ~4 rows (aproximadamente)
REPLACE INTO `produtos` (`id`, `nome`, `preco`, `categoria`, `createdAt`, `updatedAt`) VALUES
	(1, 'Celular Motorola E22', 1200, 'Eletroportáteis', '2024-04-18 19:15:03', '2024-04-18 19:15:03'),
	(2, 'Tablet Samsung', 900, 'Eletrônicos', '2024-04-18 19:15:32', '2024-04-18 19:15:36'),
	(3, 'Notebook Lenovo', 3200, 'Computadores', '2024-04-18 19:16:02', '2024-04-18 19:16:03'),
	(4, 'Fone Bluetooth', 150, 'Periféricos', '2024-04-18 19:16:28', '2024-04-18 19:16:28');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
