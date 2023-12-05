-- MySQL dump 10.13  Distrib 8.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: telemedicina
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `id_administrador` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(52) NOT NULL,
  `id_autorizacion` int NOT NULL,
  PRIMARY KEY (`id_administrador`),
  KEY `id_autorizacion` (`id_autorizacion`),
  CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`id_autorizacion`) REFERENCES `autorizacion` (`id_autorizacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'test admin','8',8),(2,'test admin','9',9),(3,'test admin','10',10);
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `autorizacion`
--

DROP TABLE IF EXISTS `autorizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autorizacion` (
  `id_autorizacion` int NOT NULL AUTO_INCREMENT,
  `email_autorizacion` varchar(100) NOT NULL,
  `password_autorizacion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_autorizacion`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autorizacion`
--

LOCK TABLES `autorizacion` WRITE;
/*!40000 ALTER TABLE `autorizacion` DISABLE KEYS */;
INSERT INTO `autorizacion` VALUES (1,'test1@admin.cl','123456'),(2,'test2@admin.cl','$2b$10$X/afL2YtP6fuqA1GWeXzcuJxgcxMSfjUcrnla/zTCAwsESaniqhOe'),(3,'test3@admin.cl','$2b$10$.eKrVEfBYvWLvJ.fRwDRAOhGgU74MCcjZKVn62kDXlbs65g7C.bCm'),(4,'test4@admin.cl','$2b$10$FMAE2VG1RQa0kPHklmtRt.52Sno.vdUC4RqEzZKkEHkswgfuoxar.'),(5,'test5@admin.cl','$2b$10$O/AeGa4APEURSzoDWyNIAuMwqbeBdne7yrJn0cRsQYKv10j6vwgu2'),(6,'test6@admin.cl','$2b$10$Yvv2oW1zukGvBAcQw1u1hO7ie5FKIZsDXV5uJ.U4IsVNW1EKOCKhe'),(7,'test7@admin.cl','$2b$10$gRm74LOksxVYcaxn8ain5u2TEAEYVWNtCh9Yd9F7UN3og6Jx83x9m'),(8,'test8@admin.cl','$2b$10$ma22dxNeE.kcxxVB9NP3V.Dtg.weNxEMIUGgA3tHSWtkH/nZfpFtO'),(9,'test9@admin.cl','$2b$10$dpdX5M8275UZ/YDbnb99luY52Gbm0u.gb31nQ2h/jMiV3ImVpfcb.'),(10,'test10@admin.cl','$2b$10$jHYVHLbZU8WsavXtZ.89PuL4DPLMwymS114/KiyZPAFQB1caSWvu6'),(12,'test1@medico.cl','$2b$10$FLMykOorQF9tCj0FEnov2uK3eGz0j5FQgMwrbHAIEJLKpoJn9S9NK'),(13,'test2@medico.cl','$2b$10$6d4wDYF.fmnrUklo8XnA/.wW141z9F4Ao.b5/sDgLkI1.kOS.gDqq'),(14,'test3@medico.cl','$2b$10$v5Iss4FM5dVjVS5rw7P3o.HeH3e1PHJkwTZCpqjzay5KdS.8Bgnv2'),(15,'test4@medico.cl','$2b$10$YMjU.dd7ssTw9UPtOzEb3.1FOuzU28SKCKECq0OFfyzsax5HZdnmG'),(16,'test5@medico.cl','$2b$10$WKLEYk9AfMael/uiuKhhVuIR4Z9qDFUP22Bb4R6QBIacxaa4PC1EG'),(17,'test6@medico.cl','$2b$10$TVYtj3ySYEcAcHQloMEqk.Eqvgo1A.oskWyCqQxHOMOaPyJmMJw5i');
/*!40000 ALTER TABLE `autorizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(30) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'receta de lentes'),(2,'audifonos clinicos');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horario` (
  `id_horario` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora_ini` time NOT NULL,
  `duracion` int NOT NULL,
  `hora_fin` time NOT NULL,
  `estado` enum('Ocupado','Disponible','Vacio') NOT NULL,
  `id_medico` int NOT NULL,
  PRIMARY KEY (`id_horario`),
  KEY `id_medico` (`id_medico`),
  CONSTRAINT `horario_ibfk_1` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id_medico`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
INSERT INTO `horario` VALUES (1,'2023-12-01','12:00:00',30,'12:30:00','Disponible',1),(2,'2023-12-01','12:30:00',30,'13:00:00','Disponible',1),(3,'2023-12-01','13:00:00',30,'13:30:00','Disponible',1),(4,'2023-12-05','12:00:00',30,'12:30:00','Disponible',1),(5,'2023-12-05','12:30:00',30,'13:00:00','Disponible',1),(6,'2023-12-05','13:00:00',30,'13:30:00','Disponible',1);
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horas_paciente`
--

DROP TABLE IF EXISTS `horas_paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horas_paciente` (
  `id_hora_paciente` int NOT NULL AUTO_INCREMENT,
  `id_paciente` int NOT NULL,
  `id_horario` int NOT NULL,
  PRIMARY KEY (`id_hora_paciente`),
  KEY `id_paciente` (`id_paciente`),
  KEY `id_horario` (`id_horario`),
  CONSTRAINT `horas_paciente_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `horas_paciente_ibfk_2` FOREIGN KEY (`id_horario`) REFERENCES `horario` (`id_horario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horas_paciente`
--

LOCK TABLES `horas_paciente` WRITE;
/*!40000 ALTER TABLE `horas_paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `horas_paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medico` (
  `id_medico` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(52) NOT NULL,
  `lugar_atencion` varchar(255) NOT NULL,
  `id_prestacion` int NOT NULL,
  `id_autorizacion` int NOT NULL,
  `id_administrador` int NOT NULL,
  PRIMARY KEY (`id_medico`),
  KEY `id_prestacion` (`id_prestacion`),
  KEY `id_autorizacion` (`id_autorizacion`),
  KEY `id_administrador` (`id_administrador`),
  CONSTRAINT `medico_ibfk_1` FOREIGN KEY (`id_prestacion`) REFERENCES `prestaciones` (`id_prestacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `medico_ibfk_2` FOREIGN KEY (`id_autorizacion`) REFERENCES `autorizacion` (`id_autorizacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `medico_ibfk_3` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id_administrador`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
INSERT INTO `medico` VALUES (1,'Barbara','Perez Dejeas','Condell 1490, 2340000 Valparaiso',1,12,3),(2,'konstanza','Gonzalez Barrera','Condell 1490, 2340000 Valparaiso',1,13,3),(3,'Darly','Ortiz Gutierrez','Condell 1490, 2340000 Valparaiso',1,14,3),(4,'Darla','Brunett Ibanez','Condell 1490, 2340000 Valparaiso',1,15,3),(5,'Romina','Lecaros Hernandez','Valparaiso',2,16,3),(6,'Jorge Luis Eduardo','Collao Nunez','Valparaiso',2,17,3);
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `id_paciente` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(52) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `comuna` enum('vi├▒a del mar','valparaiso','concon','quintero','casablanca') NOT NULL,
  `prevision_salud` enum('fonasa','isapre') NOT NULL,
  PRIMARY KEY (`id_paciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestaciones`
--

DROP TABLE IF EXISTS `prestaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestaciones` (
  `id_prestacion` int NOT NULL AUTO_INCREMENT,
  `nombre_prestacion` varchar(255) NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_prestacion`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `prestaciones_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestaciones`
--

LOCK TABLES `prestaciones` WRITE;
/*!40000 ALTER TABLE `prestaciones` DISABLE KEYS */;
INSERT INTO `prestaciones` VALUES (1,'tecn├│logo/a oftam├│logo/a (receta de lentes Plan Condell 1490)',1),(2,'control de aud├¡fonos',2),(3,'prueba de aud├¡fonos (Gratis)',2);
/*!40000 ALTER TABLE `prestaciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05  9:22:43
