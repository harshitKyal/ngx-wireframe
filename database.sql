-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: gfl_schema
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `batchData`
--

DROP TABLE IF EXISTS `batchData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `batchData` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `control_id` int(11) DEFAULT NULL,
  `gr` int(11) DEFAULT NULL,
  `lot_no` varchar(45) DEFAULT NULL,
  `no_of_cones_taka` varchar(45) DEFAULT NULL,
  `mtr` decimal(10,3) DEFAULT NULL,
  `wt` decimal(10,3) DEFAULT NULL,
  `is_active` varchar(45) DEFAULT '1',
  `state` varchar(45) DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL COMMENT 'Unit ',
  `detail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`entry_id`),
  KEY `control_id_idx` (`control_id`),
  CONSTRAINT `control_id` FOREIGN KEY (`control_id`) REFERENCES `batchmast` (`entry_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batchData`
--

LOCK TABLES `batchData` WRITE;
/*!40000 ALTER TABLE `batchData` DISABLE KEYS */;
INSERT INTO `batchData` VALUES (64,20,3,NULL,'20',300.000,300.000,'1',NULL,'',NULL),(65,21,1,'1','20',100.000,100.000,'1',NULL,'',NULL);
/*!40000 ALTER TABLE `batchData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batchGrDetail`
--

DROP TABLE IF EXISTS `batchGrDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `batchGrDetail` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Control by lot data table',
  `quantity` varchar(25) DEFAULT NULL,
  `control_id_gr_detail` int(11) DEFAULT NULL COMMENT 'Control by lot data tabel',
  `state` varchar(45) DEFAULT NULL,
  `batch_mast_control_id` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`entry_id`),
  KEY `lot_mast_control_id_idx` (`batch_mast_control_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batchGrDetail`
--

LOCK TABLES `batchGrDetail` WRITE;
/*!40000 ALTER TABLE `batchGrDetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `batchGrDetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batchMast`
--

DROP TABLE IF EXISTS `batchMast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `batchMast` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key		',
  `quality_entry_id` varchar(45) DEFAULT NULL COMMENT 'From quality Table',
  `date` datetime DEFAULT NULL COMMENT 'Lot creation date	',
  `remark` varchar(45) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  `batch_id` varchar(50) DEFAULT NULL,
  `user_head_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batchMast`
--

LOCK TABLES `batchMast` WRITE;
/*!40000 ALTER TABLE `batchMast` DISABLE KEYS */;
INSERT INTO `batchMast` VALUES (20,'464270',NULL,NULL,'27','2019-09-06 18:21:52',1,NULL,NULL,NULL,29),(21,'464269',NULL,NULL,'27','2019-09-09 17:28:02',1,NULL,NULL,NULL,29);
/*!40000 ALTER TABLE `batchMast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colourStockBox`
--

DROP TABLE IF EXISTS `colourStockBox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `colourStockBox` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `colour_stock_data_control_id` int(11) DEFAULT NULL,
  `colour_stock_mast_control_id` int(11) DEFAULT NULL,
  `is_issued` int(11) DEFAULT '0',
  `state` varchar(45) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `quantity_per_box` int(11) DEFAULT NULL,
  `rate` decimal(10,3) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colourStockBox`
--

LOCK TABLES `colourStockBox` WRITE;
/*!40000 ALTER TABLE `colourStockBox` DISABLE KEYS */;
/*!40000 ALTER TABLE `colourStockBox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colourStockData`
--

DROP TABLE IF EXISTS `colourStockData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `colourStockData` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `control_id` int(11) DEFAULT NULL,
  `item_name` varchar(45) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `quantity_per_box` int(45) DEFAULT NULL,
  `no_of_box` int(45) DEFAULT NULL,
  `rate` decimal(10,3) DEFAULT NULL,
  `amount` decimal(10,3) DEFAULT NULL,
  `total_quantity` decimal(10,3) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colourStockData`
--

LOCK TABLES `colourStockData` WRITE;
/*!40000 ALTER TABLE `colourStockData` DISABLE KEYS */;
INSERT INTO `colourStockData` VALUES (7,7,'test',15,25,2,12.000,600.000,50.000,NULL,1),(8,8,'SXD',17,25,3,21.000,1575.000,75.000,'new',1),(9,8,'TXCYWV',16,21,1,21.000,441.000,21.000,'new',1);
/*!40000 ALTER TABLE `colourStockData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colourStockMast`
--

DROP TABLE IF EXISTS `colourStockMast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `colourStockMast` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `purchase_id` int(11) DEFAULT NULL,
  `supplier_name` varchar(45) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `bill_no` varchar(45) DEFAULT NULL,
  `bill_date` date DEFAULT NULL,
  `chl_no` varchar(45) DEFAULT NULL,
  `chl_date` date DEFAULT NULL,
  `remark` varchar(45) DEFAULT NULL,
  `bill_amount` decimal(10,3) DEFAULT NULL,
  `total_amount` decimal(10,3) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `updated_date` date DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `user_head_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colourStockMast`
--

LOCK TABLES `colourStockMast` WRITE;
/*!40000 ALTER TABLE `colourStockMast` DISABLE KEYS */;
/*!40000 ALTER TABLE `colourStockMast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `designation`
--

DROP TABLE IF EXISTS `designation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `designation` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `designation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`entry_id`),
  UNIQUE KEY `designation_UNIQUE` (`designation`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designation`
--

LOCK TABLES `designation` WRITE;
/*!40000 ALTER TABLE `designation` DISABLE KEYS */;
INSERT INTO `designation` VALUES (5,'accoutant'),(3,'Helper'),(4,'Manager'),(1,'Master'),(2,'Staff');
/*!40000 ALTER TABLE `designation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dynamicProcessChemical`
--

DROP TABLE IF EXISTS `dynamicProcessChemical`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dynamicProcessChemical` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `control_id` int(11) DEFAULT NULL,
  `item_id` varchar(45) DEFAULT NULL,
  `item_name` varchar(45) DEFAULT NULL,
  `supplier_name` varchar(45) DEFAULT NULL,
  `concentration` varchar(45) DEFAULT NULL,
  `lr_or_f_wt` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `is_active` varchar(45) DEFAULT '1',
  `dynamic_mast_control_id` int(45) DEFAULT NULL,
  PRIMARY KEY (`entry_id`),
  KEY `control_id_idx` (`control_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dynamicProcessChemical`
--

LOCK TABLES `dynamicProcessChemical` WRITE;
/*!40000 ALTER TABLE `dynamicProcessChemical` DISABLE KEYS */;
/*!40000 ALTER TABLE `dynamicProcessChemical` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dynamicProcessData`
--

DROP TABLE IF EXISTS `dynamicProcessData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dynamicProcessData` (
  `control_id` int(11) DEFAULT NULL,
  `step_name` varchar(45) DEFAULT NULL,
  `step_position` varchar(45) DEFAULT NULL,
  `func_name` varchar(45) DEFAULT NULL,
  `func_value` varchar(45) DEFAULT NULL,
  `func_position` varchar(45) DEFAULT NULL,
  `water_type` varchar(45) DEFAULT NULL,
  `fabric_ratio` varchar(45) DEFAULT NULL,
  `jet_level` varchar(20) DEFAULT NULL,
  `drain_type` varchar(45) DEFAULT NULL,
  `pump_speed` varchar(45) DEFAULT NULL,
  `set_value` varchar(45) DEFAULT NULL,
  `hold_time` varchar(45) DEFAULT NULL,
  `pressure` varchar(45) DEFAULT NULL,
  `rate_of_rise` varchar(45) DEFAULT NULL,
  `fill_type` varchar(45) DEFAULT NULL,
  `dosing_percentage` varchar(45) DEFAULT NULL,
  `have_dose` varchar(45) DEFAULT NULL,
  `dose_at_temp` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `dose_type` varchar(45) DEFAULT NULL,
  `dose_while_heating` varchar(20) DEFAULT NULL,
  `operator_code` varchar(45) DEFAULT NULL,
  `operator_message` varchar(45) DEFAULT NULL,
  `start_at_temp` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`entry_id`),
  KEY `control_id_idx` (`control_id`),
  KEY `entry_id_idx` (`control_id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dynamicProcessData`
--

LOCK TABLES `dynamicProcessData` WRITE;
/*!40000 ALTER TABLE `dynamicProcessData` DISABLE KEYS */;
INSERT INTO `dynamicProcessData` VALUES (15,'step 1','1','Pump Control','pump','1',NULL,NULL,NULL,NULL,'20',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,151,NULL,NULL,NULL,NULL,NULL),(15,'step 1','1','Temperature Control','temp','2',NULL,NULL,NULL,NULL,NULL,'20','21',NULL,'20',NULL,NULL,NULL,NULL,NULL,1,152,NULL,NULL,NULL,NULL,NULL),(16,'Step 11','1','Temperature Control','temp','1',NULL,NULL,NULL,NULL,NULL,'12','12',NULL,'12',NULL,NULL,NULL,NULL,NULL,1,153,NULL,NULL,NULL,NULL,NULL),(16,'Step12','2','Water Control','water','1','water1','110',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,154,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `dynamicProcessData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dynamicProcessMast`
--

DROP TABLE IF EXISTS `dynamicProcessMast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dynamicProcessMast` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `process_name` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `updated_date` date DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `user_head_id` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dynamicProcessMast`
--

LOCK TABLES `dynamicProcessMast` WRITE;
/*!40000 ALTER TABLE `dynamicProcessMast` DISABLE KEYS */;
INSERT INTO `dynamicProcessMast` VALUES (15,'Process 1','27',NULL,'2019-09-06',NULL,1,29,20),(16,'Process 2','27',NULL,'2019-09-06',NULL,1,29,100);
/*!40000 ALTER TABLE `dynamicProcessMast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_log`
--

DROP TABLE IF EXISTS `login_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `login_log` (
  `user_id` int(11) DEFAULT NULL,
  `login_log_id` int(11) NOT NULL,
  `login_date_time` datetime DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `mac_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `computer_user_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`login_log_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_log`
--

LOCK TABLES `login_log` WRITE;
/*!40000 ALTER TABLE `login_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `party`
--

DROP TABLE IF EXISTS `party`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `party` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `party_name` varchar(45) DEFAULT NULL,
  `party_address1` varchar(45) DEFAULT NULL,
  `party_address2` varchar(45) DEFAULT NULL,
  `contact_no` varchar(45) DEFAULT NULL,
  `pincode` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `GSTIN` varchar(45) DEFAULT NULL,
  `mail_id` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `debtor` tinyint(4) DEFAULT NULL,
  `creditor` tinyint(4) DEFAULT NULL,
  `internal_transfer` tinyint(4) DEFAULT NULL,
  `is_active` int(11) DEFAULT '1',
  `party_type` varchar(45) DEFAULT NULL,
  `payment_terms` varchar(45) DEFAULT NULL,
  `percentage_discount` decimal(10,3) DEFAULT NULL,
  `gst_percentage` decimal(10,3) DEFAULT NULL,
  `user_head_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=130578 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `party`
--

LOCK TABLES `party` WRITE;
/*!40000 ALTER TABLE `party` DISABLE KEYS */;
INSERT INTO `party` VALUES (130574,'Test Party1','Test Address','Test Address','1212121212','395010','Surat','Gujarat','12GK12','abc@gmail.com','2019-09-05 18:09:29','27',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,29),(130575,'Test Party2','Test Address','Test Address','112122212','8787878','Surat','Gujarat','vgh21','abc@gmail.com','2019-09-05 18:10:10','27',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,29),(130576,'Test Party3','Test Address','Test Address','7617676787','778767','dhjv','vjgvn','hjv21v','abc@gmail.com','2019-09-05 18:10:57','27',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,29),(130577,'Test Party4','bhdb','bhjb','21212','21','hj','hv b',' b2','bd','2019-09-05 18:28:08','65',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,27);
/*!40000 ALTER TABLE `party` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `processData`
--

DROP TABLE IF EXISTS `processData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `processData` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `control_id` int(45) DEFAULT NULL,
  `process_type` varchar(45) DEFAULT NULL,
  `temperature` int(45) DEFAULT NULL,
  `rate_temperature` int(45) DEFAULT NULL,
  `plc_program_no` int(45) DEFAULT NULL,
  `hold_time` int(45) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `item_name` varchar(45) DEFAULT NULL,
  `supplier_name` varchar(45) DEFAULT NULL,
  `concentration` varchar(45) DEFAULT NULL,
  `item_by` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processData`
--

LOCK TABLES `processData` WRITE;
/*!40000 ALTER TABLE `processData` DISABLE KEYS */;
/*!40000 ALTER TABLE `processData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `processMast`
--

DROP TABLE IF EXISTS `processMast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `processMast` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `process_name` varchar(45) DEFAULT NULL,
  `no_dying_bath` varchar(45) DEFAULT NULL,
  `dc_multiplying_fac` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `updated_date` date DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `user_head_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processMast`
--

LOCK TABLES `processMast` WRITE;
/*!40000 ALTER TABLE `processMast` DISABLE KEYS */;
/*!40000 ALTER TABLE `processMast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `production_planning`
--

DROP TABLE IF EXISTS `production_planning`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `production_planning` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `program_control_id` int(15) DEFAULT NULL,
  `batch_control_id` int(15) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `user_head_id` int(11) DEFAULT NULL,
  `quality_id` int(11) DEFAULT NULL,
  `quantity` decimal(10,3) DEFAULT NULL,
  `color_tone` varchar(45) DEFAULT NULL,
  `shade_no` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `priority` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production_planning`
--

LOCK TABLES `production_planning` WRITE;
/*!40000 ALTER TABLE `production_planning` DISABLE KEYS */;
/*!40000 ALTER TABLE `production_planning` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programData`
--

DROP TABLE IF EXISTS `programData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `programData` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `program_control_id` int(45) DEFAULT NULL,
  `shade_no` int(45) DEFAULT NULL,
  `quantity` int(45) DEFAULT NULL,
  `batch` int(45) DEFAULT NULL,
  `lot_no` int(45) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `state` varchar(45) DEFAULT NULL,
  `remark` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programData`
--

LOCK TABLES `programData` WRITE;
/*!40000 ALTER TABLE `programData` DISABLE KEYS */;
INSERT INTO `programData` VALUES (4,6,3,300,NULL,NULL,1,NULL,NULL);
/*!40000 ALTER TABLE `programData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programMast`
--

DROP TABLE IF EXISTS `programMast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `programMast` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `party_id` int(45) DEFAULT NULL,
  `quality_id` int(45) DEFAULT NULL,
  `user_head_id` varchar(45) DEFAULT NULL,
  `program_given_by` varchar(45) DEFAULT NULL,
  `remark` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `updated_date` date DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `priority` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programMast`
--

LOCK TABLES `programMast` WRITE;
/*!40000 ALTER TABLE `programMast` DISABLE KEYS */;
INSERT INTO `programMast` VALUES (6,130574,464269,'29','Master1',NULL,'27','2019-09-06',NULL,NULL,1,'Very High');
/*!40000 ALTER TABLE `programMast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quality`
--

DROP TABLE IF EXISTS `quality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quality` (
  `quality_id` varchar(20) NOT NULL,
  `quality_date` datetime DEFAULT NULL,
  `party_id` varchar(45) DEFAULT NULL,
  `quality_type` varchar(45) DEFAULT NULL,
  `quality_name` varchar(45) DEFAULT NULL,
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `remark` varchar(45) DEFAULT NULL,
  `wt_per100m` decimal(10,3) DEFAULT NULL,
  `quality_sub_type` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `is_active` int(11) DEFAULT '1',
  `user_head_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=464271 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quality`
--

LOCK TABLES `quality` WRITE;
/*!40000 ALTER TABLE `quality` DISABLE KEYS */;
INSERT INTO `quality` VALUES ('Q1',NULL,'130574','Fabric','QUALITY1',464269,'testing',100.000,'Polyster','2019-09-05 18:29:17',NULL,'65',NULL,1,27),('Q2',NULL,'130575','Fabric','dd',464270,NULL,12.000,'Polyster','2019-09-05 19:28:52','2019-09-06 14:19:56','65','27',1,27);
/*!40000 ALTER TABLE `quality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quality_type`
--

DROP TABLE IF EXISTS `quality_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quality_type` (
  `quality_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `quality_type_name` varchar(45) NOT NULL,
  `quality_sub_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`quality_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quality_type`
--

LOCK TABLES `quality_type` WRITE;
/*!40000 ALTER TABLE `quality_type` DISABLE KEYS */;
INSERT INTO `quality_type` VALUES (1,'Fabric','Polyster'),(2,'Fabric','poly'),(3,'Yarn',NULL);
/*!40000 ALTER TABLE `quality_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shadeData`
--

DROP TABLE IF EXISTS `shadeData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shadeData` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `control_id` int(11) DEFAULT NULL,
  `item_name` varchar(45) DEFAULT NULL,
  `supplier_name` varchar(45) DEFAULT NULL,
  `rate` decimal(10,3) DEFAULT NULL,
  `amount` decimal(10,3) DEFAULT NULL,
  `concentration` decimal(10,3) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `updated_date` date DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `supplier_item_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shadeData`
--

LOCK TABLES `shadeData` WRITE;
/*!40000 ALTER TABLE `shadeData` DISABLE KEYS */;
INSERT INTO `shadeData` VALUES (4,3,'Item 1','Supplier 1',1188.000,1425.600,1.200,'2019-09-06',NULL,NULL,NULL,NULL,1,19),(5,3,'Item 2','Supplier 1',1287.000,2702.700,2.100,'2019-09-06',NULL,NULL,NULL,NULL,1,20),(6,4,'Item2 1 ','Supplier 2',19993.000,63977.600,3.200,'2019-09-06',NULL,NULL,NULL,NULL,1,22);
/*!40000 ALTER TABLE `shadeData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shadeMast`
--

DROP TABLE IF EXISTS `shadeMast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shadeMast` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `party_shade_no` varchar(45) DEFAULT NULL,
  `process_id` int(11) DEFAULT NULL,
  `quality_id` int(11) DEFAULT NULL,
  `quality_name` varchar(45) DEFAULT NULL,
  `quality_type` varchar(45) DEFAULT NULL,
  `party_name` varchar(45) DEFAULT NULL,
  `colour_tone` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `updated_date` date DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `user_head_id` int(11) DEFAULT NULL,
  `cutting_id` int(11) DEFAULT NULL,
  `remark` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `lab_colour_no` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shadeMast`
--

LOCK TABLES `shadeMast` WRITE;
/*!40000 ALTER TABLE `shadeMast` DISABLE KEYS */;
INSERT INTO `shadeMast` VALUES (3,'P1S1',15,464269,NULL,NULL,NULL,'#4d1f1f','27',NULL,'2019-09-06',NULL,1,NULL,NULL,NULL,NULL,12),(4,'P1S2',16,464270,NULL,NULL,NULL,'RED','27',NULL,'2019-09-06',NULL,1,NULL,NULL,NULL,NULL,22);
/*!40000 ALTER TABLE `shadeMast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockData`
--

DROP TABLE IF EXISTS `stockData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `stockData` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `control_id` int(11) DEFAULT NULL,
  `gr` int(11) DEFAULT NULL,
  `wt` decimal(10,3) DEFAULT NULL,
  `mtr` decimal(10,3) DEFAULT NULL,
  `divided` tinyint(4) DEFAULT NULL,
  `no_of_cones` int(11) DEFAULT NULL,
  `no_of_boxes` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `quality_entry_id` varchar(45) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`entry_id`),
  KEY `entry_id_idx` (`control_id`),
  CONSTRAINT `entry_id` FOREIGN KEY (`control_id`) REFERENCES `stockmast` (`entry_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockData`
--

LOCK TABLES `stockData` WRITE;
/*!40000 ALTER TABLE `stockData` DISABLE KEYS */;
INSERT INTO `stockData` VALUES (24,22,1,100.000,100.000,NULL,20,'20','2019-09-06 18:20:59',NULL,NULL,NULL,'464269',1,NULL),(25,22,2,200.000,200.000,NULL,20,'20','2019-09-06 18:20:59',NULL,NULL,NULL,'464269',1,NULL),(26,23,3,300.000,300.000,NULL,20,'20','2019-09-06 18:21:52',NULL,NULL,NULL,'464270',1,NULL);
/*!40000 ALTER TABLE `stockData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockMast`
--

DROP TABLE IF EXISTS `stockMast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `stockMast` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `chl_no` varchar(45) DEFAULT NULL,
  `chl_date` date DEFAULT NULL,
  `bill_no` varchar(45) DEFAULT NULL,
  `bill_date` date DEFAULT NULL,
  `lot_no` int(45) DEFAULT NULL,
  `party_id` int(45) DEFAULT NULL,
  `stock_in_type` varchar(45) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `updated_date` datetime DEFAULT NULL,
  `updated_by` datetime DEFAULT NULL,
  `stock_id` varchar(45) DEFAULT NULL,
  `remark` varchar(45) DEFAULT NULL,
  `user_head_id` int(11) DEFAULT NULL,
  `batch` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockMast`
--

LOCK TABLES `stockMast` WRITE;
/*!40000 ALTER TABLE `stockMast` DISABLE KEYS */;
INSERT INTO `stockMast` VALUES (22,'1234','2019-09-20','1234','2019-09-12',1,130574,'Fabric','27','2019-09-06 18:20:59',1,NULL,NULL,NULL,'testing',29,NULL),(23,'1235','2019-09-21','1235','2019-09-21',2,130575,'Fabric','27','2019-09-06 18:21:52',1,NULL,NULL,NULL,'testing2',29,1);
/*!40000 ALTER TABLE `stockMast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `supplier` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `discount_percentage` decimal(10,3) DEFAULT NULL,
  `gst_percentage` decimal(10,3) DEFAULT NULL,
  `remark` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `created_by` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `updated_date` datetime DEFAULT NULL,
  `updated_by` datetime DEFAULT NULL,
  `payment_terms` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `user_head_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (5,'Supplier 1',10.000,10.000,'etst','65','2019-09-05 19:30:39',1,NULL,NULL,'test',27),(6,'Supplier 2',2.000,2.000,NULL,'27','2019-09-06 13:40:25',1,NULL,NULL,'test',29);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier_rate`
--

DROP TABLE IF EXISTS `supplier_rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `supplier_rate` (
  `supplier_control_id` int(11) DEFAULT NULL COMMENT 'Reference from party entry id',
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(45) DEFAULT NULL,
  `rate` decimal(10,3) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT '1',
  `updated_date` datetime DEFAULT NULL,
  `updated_by` datetime DEFAULT NULL,
  `discount_rate` decimal(10,3) DEFAULT NULL,
  `gst_rate` decimal(10,3) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `user_head_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`),
  KEY `supplier_control_id_idx` (`supplier_control_id`),
  CONSTRAINT `supplier_control_id` FOREIGN KEY (`supplier_control_id`) REFERENCES `supplier` (`entry_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier_rate`
--

LOCK TABLES `supplier_rate` WRITE;
/*!40000 ALTER TABLE `supplier_rate` DISABLE KEYS */;
INSERT INTO `supplier_rate` VALUES (5,19,'Item 1',1200.000,'65','2019-09-06 01:39:15',0,NULL,NULL,1080.000,1188.000,'old',NULL),(5,20,'Item 2',1300.000,'65','2019-09-06 01:39:15',0,NULL,NULL,1170.000,1287.000,'old',NULL),(5,21,'Item 3',2000.000,'65','2019-09-06 01:39:41',1,NULL,NULL,1800.000,1980.000,'new',NULL),(6,22,'Item2 1 ',20001.000,'27','2019-09-06 01:40:49',1,NULL,NULL,19601.000,19993.000,'new',NULL);
/*!40000 ALTER TABLE `supplier_rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `test` (
  `c_1` int(11) NOT NULL,
  `c_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`c_1`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (12,'abc'),(13,'bcd'),(14,'ddd'),(15,'eee');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `user_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `designation` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `email_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `company_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `department` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `mobile_no` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `created_by` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `updated_by` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `is_active` int(11) DEFAULT '1',
  `user_head_id` int(11) DEFAULT NULL,
  `group_head_check_box` tinyint(4) DEFAULT NULL,
  `usercol` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'shefali','agarwal','admin1','123456','Manager','shefali@gmail.com','','dwef','121212121212',NULL,NULL,'2019-05-22 15:10:55','2019-05-23 12:49:41',1,29,NULL,NULL),(27,'harshit','kyal','admin','1234','Manager','harshit@gmail.com','','SADS','1212121','25','25','2019-06-02 10:06:12','2019-06-02 10:06:32',1,29,1,NULL),(65,'Test','Test','test','test','Master','test@gmail.com','',NULL,'121212','27','27','2019-09-05 18:25:23','2019-09-05 18:27:03',1,27,1,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_permission`
--

DROP TABLE IF EXISTS `user_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_permission` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `can_view` int(11) DEFAULT '0',
  `can_add` int(11) DEFAULT '0',
  `can_edit` int(11) DEFAULT '0',
  `can_delete` int(11) DEFAULT '0',
  `can_view_group` int(11) DEFAULT '0',
  `can_view_all` int(11) DEFAULT '0',
  `can_edit_group` int(11) DEFAULT '0',
  `can_edit_all` int(11) DEFAULT '0',
  `can_delete_group` int(11) DEFAULT '0',
  `can_delete_all` int(11) DEFAULT '0',
  `user_control_id` int(11) NOT NULL,
  `form_name` varchar(50) NOT NULL,
  PRIMARY KEY (`entry_id`),
  KEY `user_id_idx` (`user_control_id`)
) ENGINE=InnoDB AUTO_INCREMENT=439 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_permission`
--

LOCK TABLES `user_permission` WRITE;
/*!40000 ALTER TABLE `user_permission` DISABLE KEYS */;
INSERT INTO `user_permission` VALUES (28,1,1,1,1,1,1,1,1,1,1,25,'Party'),(29,1,1,1,1,1,1,1,1,1,1,25,'Quality'),(30,1,1,1,1,1,1,1,1,1,1,25,'User'),(31,1,1,1,1,1,1,1,1,1,1,25,'Fabric In'),(32,1,1,1,1,1,1,1,1,1,1,25,'Batch'),(33,1,1,1,1,1,1,1,1,1,1,25,'Program'),(34,1,1,1,1,1,1,1,1,1,1,25,'Shade'),(35,1,1,1,1,1,1,1,1,1,1,25,'Supplier'),(36,1,1,1,1,1,1,1,1,1,1,25,'Supplier Rate'),(46,1,1,1,1,1,1,1,1,1,1,27,'Party'),(47,1,1,1,1,1,1,1,1,1,1,27,'Quality'),(48,1,1,1,1,1,1,1,1,1,1,27,'User'),(49,1,1,1,1,1,1,1,1,1,1,27,'Fabric In'),(50,1,1,1,1,1,1,1,1,1,1,27,'Batch'),(51,1,1,1,1,1,1,1,1,1,1,27,'Program'),(52,1,1,1,1,1,1,1,1,1,1,27,'Shade'),(53,1,1,1,1,1,1,1,1,1,1,27,'Supplier'),(54,1,1,1,1,1,1,1,1,1,1,27,'Supplier Rate'),(403,1,1,1,1,1,1,1,1,1,1,27,'Process'),(404,1,1,1,1,1,1,1,1,1,1,25,'Process'),(406,1,1,1,1,1,1,1,1,1,1,27,'Process Planning'),(425,1,1,1,1,1,0,1,0,1,0,65,'Party'),(426,1,1,1,1,1,0,1,0,1,0,65,'Quality'),(427,1,1,1,1,1,0,1,0,1,0,65,'User'),(428,1,1,1,1,1,0,1,0,1,0,65,'Fabric In'),(429,1,1,1,1,1,0,1,0,1,0,65,'Batch'),(430,1,1,1,1,1,0,1,0,1,0,65,'Program'),(431,1,1,1,1,1,0,1,0,1,0,65,'Shade'),(432,1,1,1,1,1,0,1,0,1,0,65,'Supplier'),(433,1,1,1,1,1,0,1,0,1,0,65,'Supplier Rate'),(434,1,1,1,1,1,0,1,0,1,0,65,'Shade'),(435,1,1,1,1,1,0,1,0,1,0,65,'Colour Stock'),(436,1,1,1,1,1,0,1,0,1,0,65,'Process'),(437,1,1,1,1,1,0,1,0,1,0,65,'Process Planning'),(438,1,1,1,1,1,0,1,0,1,0,65,'Jet Planning');
/*!40000 ALTER TABLE `user_permission` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-04 15:11:52
