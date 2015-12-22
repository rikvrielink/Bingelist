-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2015 at 03:23 PM
-- Server version: 5.7.9
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bingelist`
--

-- --------------------------------------------------------

--
-- Table structure for table `shows`
--

DROP TABLE IF EXISTS `shows`;
CREATE TABLE IF NOT EXISTS `shows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shows`
--

INSERT INTO `shows` (`id`, `name`, `year`, `created_at`, `updated_at`) VALUES
(1, 'Space', 1970, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(2, 'Lloyd in Space', 1971, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(3, 'Live from Space', 1972, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(4, 'Milton: Office Space', 2013, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(5, 'Space Ghost Coast to Coast', 2011, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(6, 'Josie and the Pussycats in Outer Space', 1999, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(7, 'Space Island One', 1980, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(8, 'Space Cadets (2005)', 2010, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(9, 'Fujiko F. Fujio''s Parallel Space', 1995, '2015-12-21 18:08:04', '2015-12-21 18:08:04'),
(10, 'Human Centipede', 1985, '2015-12-21 18:59:38', '2015-12-21 18:59:38'),
(11, 'Human Centipede', 2009, '2015-12-21 21:21:34', '2015-12-21 21:21:34');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
