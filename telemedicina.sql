-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: telemedicina
-- ------------------------------------------------------
-- Server version	8.0.32

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
  PRIMARY KEY (`id_administrador`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'Test','Admin 1');
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
  `id_medico` int DEFAULT NULL,
  `id_administrador` int DEFAULT NULL,
  PRIMARY KEY (`id_autorizacion`),
  KEY `id_medico` (`id_medico`),
  KEY `id_administrador` (`id_administrador`),
  CONSTRAINT `autorizacion_ibfk_1` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id_medico`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `autorizacion_ibfk_2` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id_administrador`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autorizacion`
--

LOCK TABLES `autorizacion` WRITE;
/*!40000 ALTER TABLE `autorizacion` DISABLE KEYS */;
INSERT INTO `autorizacion` VALUES (1,'test1@admin.cl','$2b$10$teuNuUFlvzRvR/wdbrgXruOqsbk66GwUSLiRzs4oYLOxy5TvqldOm',NULL,1),(2,'amparo@medico.cl','$2b$10$azFHPVV8M00hVoUaLU1PKeIsm/EiZPvXAIk//8ECpHyzS11m67upi',1,NULL),(3,'barbara@medico.cl','$2b$10$gNS./4GFUXZH75RZ8T9dZ.h5X8A5Jlv5J97xwaoOMvTnR/oQzpOxu',2,NULL),(4,'beda@medico.cl','$2b$10$O8IBxNEoLiVfkACCvWNCMeeNF88Yc2XMV1Xtrb0GXWBn521.ll2ii',3,NULL),(5,'camila@medico.cl','$2b$10$AsRpa/CRqi2AKZHLpzR32.YoxnuIodAYwJ2hKS.VHcOqGb2svhydS',4,NULL),(6,'carlos@medico.cl','$2b$10$/mD3dUp22FPU5vwu/Cyg5OIitg4ly7Bh9XqOPGX3Wo2RFeqZ.c5vu',5,NULL),(7,'constanza@medico.cl','$2b$10$5/F.i0nRimg5ssb9TRrdMehCd7ieV3uo2ItbA4IbsKsxf2y69rLFm',6,NULL),(8,'daniel@medico.cl','$2b$10$yxxejzgb6LLA1kKCAED0petqgVb0tTQES3Q4ThzmRTJWI6TFNcVhi',7,NULL);
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
  `nombre_categoria` varchar(255) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Receta de Lentes'),(2,'Audifonos Clinicos'),(3,'Salud Integral Audiologica'),(4,'Medicina General y Salud Mental'),(5,'Psicologia'),(6,'Nutricion y Dietetica'),(7,'Terapias Complementarias y Masajes'),(8,'Medicina Tradicional China'),(9,'Matroneria y Salud Sexual');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
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
  `id_administrador` int NOT NULL,
  PRIMARY KEY (`id_medico`),
  KEY `id_administrador` (`id_administrador`),
  CONSTRAINT `medico_ibfk_3` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id_administrador`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
INSERT INTO `medico` VALUES (1,'Amparo','Morales Sotomayor','calle Errazuriz 1042',1),(2,'Barbara','Perez Dejeas','Condell 1490',1),(3,'Beda','Carpio Mordones','Condell 1490',1),(4,'Camila','Lizama Rivera','Condell 1490',1),(5,'Carlos','Cuadros Gutierrez','Condell 1490',1),(6,'Constanza','Roman Nuñez','Condell 1490',1),(7,'Daniel Andres','Vicencio Godoy','Condell 1490',1),(8,'Darla Brunett','Ibañez','Condell 1490',1),(9,'Darly Yerny ','Ortiz Gutierrez','Condell 1490',1),(10,'Felipe','Mancilla Osorio','Condell 1490',1),(11,'Fernando','Espinoza Osorio','Condell 1490',1),(12,'Javier','Ortiz Garrido','Condell 1490',1),(13,'Jorge Andres','Galaz Alvarez','Condell 1490',1),(14,'Jorge Luis Eduardo','Collao Nuñez','Condell 1490',1),(15,'Konstanza','Gonzalez Barrera','Condell 1490',1),(16,'Maria Eva','Saavedra Saavedra','Condell 1490',1),(17,'Montserrat','Toledo Astudillo','Condell 1490',1),(18,'Romina','Lecaros Hernandez','Condell 1490',1),(19,'Sebastian','Vargas Salas','Condell 1490',1),(20,'Sergio','Alvarez Oyanedel','Condell 1490',1),(21,'Tamara','Soto Gonzalez','Condell 1490',1),(22,'Tatiana','Cifuentes Antris','Condell 1490',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestaciones`
--

LOCK TABLES `prestaciones` WRITE;
/*!40000 ALTER TABLE `prestaciones` DISABLE KEYS */;
INSERT INTO `prestaciones` VALUES (1,'Tecnologo/a oftamologo/a',1),(2,'Toma de moldes Audifonos Clinicos',2),(3,'Prueba de audifonos (Gratis)',2),(4,'Entrega de audifonos',2),(5,'Control de audifonos',2),(6,'Revision de audifono clinico',2),(7,'Calibracion Particular Starkey',2),(8,'Control Calibracion Convenio Starkey',2),(9,'Toma de Moldes Protectores Auditivos',2),(10,'Entrega de molde',2),(11,'Maniobras de reposicion vestibular',3),(12,'Examen audiometria adulto',3),(13,'Examen impedanciometria',3),(14,'Examen audiometria + impedanciometria (Adulto)',3),(15,'Examen emisiones otoacusticas',3),(16,'Examen impedanciometria + funcion tubaria',3),(17,'Otorrinolaringologia (Con Receta de Audifonos)',3),(18,'Rehabilitacion vestibular',3),(19,'Examen audiometria niños (3 a 15 años)',3),(20,'Limpieza de cada oido adulto',3),(21,'Medicina General con Enfoque en Oido, Nariz y Garganta (Sin Receta Audifonos)',3),(22,'Funcion Tubaria',3),(23,'Pre-Consulta Audiologica',3),(24,'Prueba Calorica Bitermal o Minima',3),(25,'Examen Funcional VIII Par c/VNG',3),(26,'Limpieza de cada oido de niños (De 3 a 15 años)',3),(27,'VIII Par Acortado (sin pureba calorica)',3),(28,'Examen Funcional VIII Par con agua',3),(29,'vHIT (VIDEO HEAD IMPULSE TEST)',3),(30,'Promocion audiometria',3),(31,'AUDIOMETRIA PREVENTIVA',3),(32,'Promocion Audiometria Adultos 2x1',3),(33,'Consulta medicina general Adulto',4),(34,'Consulta medicina general integral enfoque salud mental Adulto',4),(35,'Medicina cannabica',4),(36,'Teleconsulta medicina general Adulto',4),(37,'Teleconsulta medicina general integral enfoque salud mental',4),(38,'Teleconsulta medicina general integral enfoque infanto-juvenil',4),(39,'Consulta medicina general integral enfoque infanto-juvenil',4),(40,'Informe Salud Mental',4),(41,'Consulta psicoterapia individual',5),(42,'Teleconsulta psicoterapia individual',5),(43,'Teleconsulta psicoterapia de parejas',5),(44,'Psicoterapia Infanto Juvenil (5 a 17 años)',5),(45,'Psicoterapia Infanto Juvenil (8 a 17 años)',5),(46,'Teleconsulta Psicoterapia Infanto Juvenil (8 a 17 años)',5),(47,'Teleconsulta Psicoterapia Infanto Juvenil (5 a 17 años)',5),(48,'Control nutricion y dietetica',6),(49,'Servicio de bioimpedancia',6),(50,'Teleconsulta nutricion y dietetica',6),(51,'Teleconsulta nutricion y dietetica (controles precio ant)',6),(52,'Consulta nutricion y dietetica (controles precio ant)',6),(53,'Operativo nutricional',6),(54,'Bioimpedancia Scarlett',6),(55,'Primera Sesion Nutricion y Dietetica',6),(56,'Sesion de quiromasaje',7),(57,'Sesion de masaje sueco',7),(58,'Sesion de reflexion podal',7),(59,'Sesion de ventosas o cupping',7),(60,'Sesion terapia de percusion',7),(61,'Electroterapia con TENS',7),(62,'Masaje abreviado en silla ergonomica o camilla',7),(63,'Masaje Localizado',7),(64,'Masaje para Embarazadas',7),(65,'Masaje Promocion por Semana',7),(66,'PAGO PENDIENTE MODIFICABLE',7),(67,'Masaje Laboral C° Ohiggins',7),(68,'Masaje Laboral Corporacion Municipal',7),(69,'Recovery Deportivo /Masaje Pre Deportivo',7),(70,'Recovery Deportivo /Masaje Post Deportivo',7),(71,'Medicina Tradicional China',8),(72,'Teleconsulta salud sexual',9);
/*!40000 ALTER TABLE `prestaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestaciones_medico`
--

DROP TABLE IF EXISTS `prestaciones_medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestaciones_medico` (
  `id_prestaciones_medico` int NOT NULL AUTO_INCREMENT,
  `id_prestacion` int NOT NULL,
  `id_medico` int NOT NULL,
  PRIMARY KEY (`id_prestaciones_medico`),
  KEY `id_prestacion` (`id_prestacion`),
  KEY `id_medico` (`id_medico`),
  CONSTRAINT `prestaciones_medico_ibfk_1` FOREIGN KEY (`id_prestacion`) REFERENCES `prestaciones` (`id_prestacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `prestaciones_medico_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id_medico`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestaciones_medico`
--

LOCK TABLES `prestaciones_medico` WRITE;
/*!40000 ALTER TABLE `prestaciones_medico` DISABLE KEYS */;
INSERT INTO `prestaciones_medico` VALUES (1,1,2),(2,1,15),(3,1,9),(4,1,8),(5,1,10),(6,5,18),(7,5,14),(8,3,18),(9,3,14),(10,2,18),(11,2,14),(12,9,18),(13,9,14),(14,12,5),(15,19,5),(16,15,5),(17,25,5),(18,28,5),(19,11,5),(20,18,5),(21,29,5),(22,33,7),(23,33,13),(24,39,13),(25,34,7),(26,34,13),(27,36,7),(28,36,13),(29,38,7),(30,37,7),(31,37,13),(32,41,22),(33,41,12),(34,41,17),(35,44,20),(36,44,17),(37,45,17),(38,42,22),(39,42,12),(40,42,17),(41,46,17),(42,48,4),(43,55,4),(44,61,21),(45,61,6),(46,64,21),(47,70,6),(48,69,6),(49,57,6),(50,57,21),(51,58,21),(52,59,21),(53,59,6),(54,60,21),(55,71,1),(56,72,3);
/*!40000 ALTER TABLE `prestaciones_medico` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-06  0:26:30
