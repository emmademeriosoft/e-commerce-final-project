-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2021 at 06:57 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `and_shop_ecomerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productName` varchar(55) NOT NULL,
  `productDisplayImage` varchar(255) NOT NULL,
  `productHoverImage` varchar(255) NOT NULL,
  `badgerText` varchar(20) NOT NULL,
  `productPrice` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productName`, `productDisplayImage`, `productHoverImage`, `badgerText`, `productPrice`) VALUES
(1, 'blue dress For Woman', '/images/product5.png', '/images/product8.png', 'New', 4000),
(2, 'blue dress For Woman', '/images/product5.png', '/images/product8.png', 'New', 4000),
(3, 'blue dress For Woman', '/images/product5.png', '/images/product8.png', 'New', 4000),
(4, 'blue dress For Woman', '/images/product5.png', '/images/product8.png', 'New', 4000),
(5, 'blue dress For Woman', '/images/product5.png', '/images/product8.png', 'New', 4000),
(6, 'blue dress For Woman', '/images/product5.png', '/images/product8.png', 'New', 4000),
(7, 'blue dress For Woman', '/images/product5.png', '/images/product8.png', 'New', 4000),
(8, 'blue dress For Woman', '/images/product5.png', '/images/product8.png', 'New', 4000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
