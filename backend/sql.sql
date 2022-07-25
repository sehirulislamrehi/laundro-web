-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 25, 2022 at 08:15 PM
-- Server version: 5.7.38-cll-lve
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sehiruli_laundro`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_infos`
--

CREATE TABLE `app_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fav` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mail_from_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timing` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `app_infos`
--

INSERT INTO `app_infos` (`id`, `logo`, `fav`, `mail_from_address`, `email`, `phone`, `address`, `city`, `country`, `day`, `timing`, `facebook_link`, `youtube_link`, `twitter_link`, `linkedin_link`, `created_at`, `updated_at`) VALUES
(1, '16579027728qu57W6s9VTW.png', '1657902772MwCtUt21xunr.png', 'mdsehirulislamrehi@gmail.com', 'info@laundro.com', '+23 (000) 68 603', '88 Kilda Broklyn Road', 'New York', 'USA', 'Mon to Sat', '8am - 09pm', NULL, NULL, NULL, NULL, NULL, '2022-07-25 00:06:13');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `position` int(11) NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_text` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `position`, `image`, `title`, `short_description`, `button_text`, `button_link`, `created_at`, `updated_at`) VALUES
(1, 1, '1657902814nhJFplTUavUZ.jpg', 'Welcome to laundro cleaning', 'Quality solutions in cleaning', 'Discover More', '#', '2022-07-15 16:33:34', '2022-07-15 16:33:34'),
(2, 2, '1657902820kNbTrlO4wc22.jpg', 'Welcome to laundro cleaning', 'Quality solutions in cleaning', 'Discover More', '#', '2022-07-15 16:33:40', '2022-07-15 16:33:40');

-- --------------------------------------------------------

--
-- Table structure for table `contact_forms`
--

CREATE TABLE `contact_forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_forms`
--

INSERT INTO `contact_forms` (`id`, `name`, `email`, `phone`, `subject`, `message`, `created_at`, `updated_at`) VALUES
(1, 'null', 'null', 'null', 'null', 'null', '2022-07-24 23:57:04', '2022-07-24 23:57:04'),
(2, 'a', 'a@gmail.com', 'a', 'a', 'a', '2022-07-25 00:01:16', '2022-07-25 00:01:16'),
(3, 'a', 'a@gmail.com', 'a', 'a', 'a', '2022-07-25 00:01:31', '2022-07-25 00:01:31'),
(4, 'a', 'a@gmail.com', 'a', 'a', 'a', '2022-07-25 00:01:36', '2022-07-25 00:01:36');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiry_date` date NOT NULL,
  `type` enum('Cash','Percentage') COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `code`, `expiry_date`, `type`, `amount`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'AAA', '2022-04-30', 'Cash', 100, 1, '2022-04-26 07:44:27', '2022-04-26 07:44:27');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point` int(11) DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `is_verified` tinyint(1) NOT NULL DEFAULT '0',
  `month` int(11) NOT NULL COMMENT 'current month',
  `year` int(11) NOT NULL COMMENT 'current year',
  `remember_token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `phone`, `email`, `password`, `address`, `point`, `image`, `is_active`, `is_verified`, `month`, `year`, `remember_token`, `created_at`, `updated_at`) VALUES
(15, 'Md Sehirul Islam Rehi', '01858361812', 'mdsehirulislam@gmail.com', '$2y$10$cEcDZbtqgI2pw0SngIg8u.MmR5emXrHKVuQsk83/hsX0mUE7zUHcG', 'Dhaka', NULL, '1655809138alsGm.jpeg', 1, 1, 6, 2022, 'R7fXtJI5V6dGCO0ey7gCcZ9SoLUiVPkj6x1YwzIvl5YsGptfPhLTpPEQoBfgS0LXLSFLFCHwCXRVFgoU', '2022-06-03 12:34:54', '2022-07-05 14:30:24'),
(16, 'Faisal Hamid Hemel', '01715234605', NULL, '$2y$10$Hw2ZUvd6ig6PsnGbbTdjG.U3eGkMwvGPeMs8kH.nLigidsC931R2u', NULL, NULL, NULL, 1, 1, 7, 2022, '5mMQQaPVpUIrx7sWAu7xHEhoT7nxtAaV7LsmwDdc2OlIlmdlBoaYJsOfZoL7Ubkku3LKKYXueyYq8nnK', '2022-07-04 09:01:29', '2022-07-04 09:01:29');

-- --------------------------------------------------------

--
-- Table structure for table `custom_pages`
--

CREATE TABLE `custom_pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `position` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `custom_pages`
--

INSERT INTO `custom_pages` (`id`, `position`, `name`, `slug`, `content`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 'Privacy Policy', 'privacy-policy', '<p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device</p><br /></p>', 1, '2022-07-15 16:34:52', '2022-07-15 16:34:52'),
(2, 2, 'Return and Refund Policy', 'return-and-refund-policy', '<p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device</p><br /></p>', 1, '2022-07-15 16:35:13', '2022-07-15 16:35:13'),
(3, 3, 'Terms and Condition', 'terms-and-condition', '<p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p><p class=\"mb-3\" style=\" margin-bottom: 1rem !important; color: rgb(123, 125, 131); font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-weight: 500; background-color: rgb(255, 255, 255)\">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device</p><br /></p>', 1, '2022-07-15 16:35:23', '2022-07-15 16:35:23');

-- --------------------------------------------------------

--
-- Table structure for table `durations`
--

CREATE TABLE `durations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `duration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('Hour') COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `durations`
--

INSERT INTO `durations` (`id`, `duration`, `type`, `is_active`, `created_at`, `updated_at`) VALUES
(1, '0.5', 'Hour', 1, '2022-04-26 07:20:04', '2022-04-26 07:20:04'),
(2, '1', 'Hour', 1, '2022-04-26 07:20:08', '2022-04-26 07:20:44');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `position` int(11) NOT NULL,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `position`, `question`, `answer`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 'Do you wash my clothes together with other people\'s clothes?', 'bsolutely not. Each order is washed separately so no need to worry about that. Your clothes are safe with us!', 1, '2022-07-15 16:34:03', '2022-07-15 16:34:03'),
(2, 2, 'Where do you clean my clothes?', 'After your items are collected by our driver, they are taken to one of our trusted partner facilities to ensure your items are treated with the utmost care. We take pride in supporting local businesses and minimizing the carbon emissions from transport.', 1, '2022-07-15 16:34:13', '2022-07-15 16:34:13'),
(3, 3, 'What is the turnaround time?', 'ou will be happy to know that last month we have delivered 98.7% of all standard laundry and dry cleaning within 24 hours.', 1, '2022-07-15 16:34:24', '2022-07-15 16:34:24');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location_id` bigint(20) UNSIGNED DEFAULT NULL,
  `zipcode_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type` enum('area','zone') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `name`, `location_id`, `zipcode_id`, `type`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Dhaka', NULL, NULL, NULL, 1, '2022-04-22 11:40:04', '2022-04-22 11:40:04'),
(2, 'Mohakhali', 1, NULL, 'zone', 1, '2022-04-22 11:40:15', '2022-04-22 11:40:15'),
(3, 'Mohammadpur', 1, NULL, 'zone', 1, '2022-04-22 11:40:20', '2022-04-22 11:40:20'),
(4, 'Tb Gate', 2, 1, 'area', 1, '2022-04-22 11:45:47', '2022-04-22 11:45:47'),
(5, 'Warless Gate', 2, 1, 'area', 1, '2022-04-22 11:45:57', '2022-04-22 11:45:57'),
(6, 'Uttara', 1, NULL, 'zone', 1, '2022-04-22 11:46:08', '2022-04-22 11:46:08'),
(7, 'Sector 1', 6, 2, 'area', 1, '2022-04-22 11:46:23', '2022-04-22 11:46:23'),
(8, 'Demra', 1, NULL, 'zone', 1, '2022-04-22 15:45:15', '2022-04-22 15:45:15'),
(9, 'Dhaka Cantt.', 1, NULL, 'zone', 1, '2022-04-22 15:45:20', '2022-04-22 15:45:20'),
(10, 'Dhamrai', 1, NULL, 'zone', 1, '2022-04-22 15:45:25', '2022-04-22 15:45:25'),
(11, 'Dhanmondi', 1, NULL, 'zone', 1, '2022-04-22 15:45:29', '2022-04-22 15:45:29'),
(12, 'Demra', 8, 3, 'area', 1, '2022-04-22 15:46:19', '2022-04-22 15:46:19'),
(13, 'Matuail', 8, 4, 'area', 1, '2022-04-22 15:46:30', '2022-04-22 15:46:30'),
(14, 'Sarulia', 8, 5, 'area', 1, '2022-04-22 15:46:36', '2022-04-22 15:46:36'),
(15, 'Dhaka CantonmentTSO', 9, 6, 'area', 1, '2022-04-22 15:46:49', '2022-04-22 15:46:49'),
(16, 'Dhamrai', 10, 7, 'area', 1, '2022-04-22 15:47:01', '2022-04-22 15:47:01'),
(17, 'Kamalpur', 10, 8, 'area', 1, '2022-04-22 15:47:08', '2022-04-22 15:47:08'),
(18, 'Chattogram', NULL, NULL, NULL, 1, '2022-04-22 15:47:25', '2022-04-22 15:47:25'),
(19, 'Sylhet', NULL, NULL, NULL, 1, '2022-04-22 15:47:29', '2022-04-22 15:47:29'),
(20, 'Rajshahi', NULL, NULL, NULL, 1, '2022-04-22 15:47:39', '2022-04-22 15:47:39'),
(21, 'Khulna', NULL, NULL, NULL, 1, '2022-04-22 15:47:45', '2022-04-22 15:47:45');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_04_24_161700_create_modules_table', 1),
(5, '2021_04_24_161711_create_permissions_table', 1),
(6, '2021_04_24_161733_create_roles_table', 1),
(7, '2021_04_24_161734_create_permission_roles_table', 1),
(8, '2021_04_24_161742_create_sub_modules_table', 1),
(9, '2021_04_24_161757_create_super_admins_table', 1),
(12, '2022_02_02_130530_create_zipcodes_table', 2),
(13, '2022_02_02_130531_create_locations_table', 2),
(14, '2022_02_08_111156_create_durations_table', 3),
(15, '2022_02_09_091043_create_coupons_table', 4),
(16, '2022_02_09_072433_create_services_table', 5),
(17, '2022_02_09_072514_create_service_durations_table', 5),
(18, '2022_05_28_005933_create_customers_table', 6),
(25, '2022_06_02_103400_create_orders_table', 7),
(26, '2022_06_02_103721_create_order_services_table', 7),
(27, '2021_08_19_102916_create_app_infos_table', 8),
(28, '2022_07_15_112735_create_banners_table', 8),
(29, '2022_07_15_182532_create_faqs_table', 8),
(30, '2022_07_15_193805_create_custom_pages_table', 8),
(31, '2022_07_25_054222_create_app_models_settings_module_contact_forms_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` int(11) NOT NULL,
  `route` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `name`, `key`, `icon`, `position`, `route`, `created_at`, `updated_at`) VALUES
(1, 'User Module', 'user_module', 'fas fa-users', 1, NULL, NULL, NULL),
(2, 'Settings', 'settings', 'fas fa-cog', 10, NULL, NULL, NULL),
(3, 'Locations', 'location_module', 'fas fa-location-arrow', 2, NULL, NULL, NULL),
(4, 'Services', 'service_module', 'fas fa-wrench', 3, NULL, NULL, NULL),
(5, 'Order Module', 'order_module', 'fas fa-cart-arrow-down', 4, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_details` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timing` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` int(11) NOT NULL,
  `order_status` enum('Pending','Confirmed','Assigned','OnProcess','Delivered','Cancelled') COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_status` enum('Pending','Success','Cancelled') COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_method` enum('Cash','Online') COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_date` date NOT NULL,
  `delivery_date` date NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_no`, `customer_id`, `name`, `email`, `phone`, `postal_code`, `location`, `address_details`, `address_type`, `timing`, `total`, `order_status`, `payment_status`, `payment_method`, `order_date`, `delivery_date`, `month`, `year`, `created_at`, `updated_at`) VALUES
(11, 'L-99448262', 15, 'Md Sehirul Islam Rehi', 'mdsehirulislamrehi@gmail.com', '01858361812', '1213', 'Warless Gate', 'GP-CHA-29 ( 4th Floor )', 'Home', '{\"day_for_collection\":\"Friday, Jun 3\",\"time_for_collection\":\"19:00-21:00\",\"instructions_for_collection\":\"Driver collects from you\",\"day_for_delivery\":\"Saturday, Jun 4\",\"time_for_delivery\":\"17:00-19:00\",\"instructions_for_delivery\":\"Driver drops, rings, waits\",\"others_instruction\":null}', 17, 'Pending', 'Pending', 'Cash', '2022-06-03', '2022-06-04', 7, 2022, '2022-06-03 12:41:55', '2022-07-15 16:28:36'),
(12, 'L-52000347', 15, 'Md Sehirul Islam Rehi', 'mdsehirulislamrehi@gmail.com', '01858361812', '1213', 'Tb Gate', 'Gp-cha-29', 'Home', '{\"day_for_collection\":\"Saturday, Jun 4\",\"time_for_collection\":\"13:00-15:00\",\"instructions_for_collection\":\"Driver collects from you\",\"day_for_delivery\":\"Sunday, Jun 5\",\"time_for_delivery\":\"09:00-11:00\",\"instructions_for_delivery\":\"Driver drops, rings, waits\",\"others_instruction\":null}', 15, 'Pending', 'Pending', 'Cash', '2022-06-04', '2022-06-05', 7, 2022, '2022-06-04 06:48:00', '2022-07-15 16:28:36'),
(13, 'L-74152272', 15, 'Md Sehirul Islam Rehi', 'mdsehirulislamrehi@gmail.com', '01858361812', '1213', 'Tb Gate', 'GP-CHA-29', 'Home', '{\"day_for_collection\":\"Tuesday, Jun 21\",\"time_for_collection\":\"19:00-21:00\",\"instructions_for_collection\":\"Driver collects from you\",\"day_for_delivery\":\"Wednesday, Jun 22\",\"time_for_delivery\":\"09:00-11:00\",\"instructions_for_delivery\":\"Driver drops, rings, waits\",\"others_instruction\":null}', 7, 'Pending', 'Pending', 'Cash', '2022-06-21', '2022-06-22', 6, 2022, '2022-06-21 11:53:45', '2022-07-15 16:28:36'),
(14, 'L-58160197', 16, 'Faisal Hamid Hemel', 'faisal@gmail.com', '01715234605', '1213', 'Tb Gate', 'asdasd', 'Home', '{\"day_for_collection\":\"Monday, Jul 4\",\"time_for_collection\":\"15:00-17:00\",\"instructions_for_collection\":\"Driver collects from you\",\"day_for_delivery\":\"Tuesday, Jul 5\",\"time_for_delivery\":\"09:00-11:00\",\"instructions_for_delivery\":\"Driver drops, rings, waits\",\"others_instruction\":null}', 10, 'Pending', 'Pending', 'Cash', '2022-07-04', '2022-07-05', 5, 2022, '2022-07-04 09:12:22', '2022-07-15 16:28:36'),
(15, 'L-36590532', 15, 'Md Sehirul Islam Rehi', 'mdsehirulislam@gmail.com', '01858361812', '1213', 'Tb Gate', 'Dhaka', 'Home', '{\"day_for_collection\":\"Tuesday, Jul 5\",\"time_for_collection\":\"11:00-13:00\",\"instructions_for_collection\":\"Driver collects from you\",\"day_for_delivery\":\"Thursday, Jul 7\",\"time_for_delivery\":\"13:00-15:00\",\"instructions_for_delivery\":\"Driver drops, rings, waits\",\"others_instruction\":null}', 8, 'Pending', 'Pending', 'Cash', '2022-07-05', '2022-07-07', 5, 2022, '2022-07-05 03:09:42', '2022-07-15 16:28:36');

-- --------------------------------------------------------

--
-- Table structure for table `order_services`
--

CREATE TABLE `order_services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `service_duration_id` bigint(20) UNSIGNED DEFAULT NULL,
  `price` int(11) NOT NULL,
  `instruction` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_services`
--

INSERT INTO `order_services` (`id`, `order_id`, `service_id`, `service_duration_id`, `price`, `instruction`, `created_at`, `updated_at`) VALUES
(16, 11, 4, NULL, 7, NULL, '2022-06-03 12:41:55', '2022-06-03 12:41:55'),
(17, 11, 2, 3, 10, '5 Dress', '2022-06-03 12:41:55', '2022-06-03 12:41:55'),
(18, 12, 6, NULL, 7, NULL, '2022-06-04 06:48:00', '2022-06-04 06:48:00'),
(19, 12, 1, 1, 8, '1 Dress', '2022-06-04 06:48:00', '2022-06-04 06:48:00'),
(20, 13, 6, NULL, 7, NULL, '2022-06-21 11:53:45', '2022-06-21 11:53:45'),
(21, 14, 3, NULL, 10, NULL, '2022-07-04 09:12:22', '2022-07-04 09:12:22'),
(22, 15, 1, 1, 8, '1 Dress', '2022-07-05 03:09:42', '2022-07-05 03:09:42');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `module_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `key`, `display_name`, `module_id`, `created_at`, `updated_at`) VALUES
(1, 'user_module', 'User Module', 1, NULL, NULL),
(2, 'all_user', 'All User', 1, NULL, NULL),
(3, 'add_user', '-- Add User', 1, NULL, NULL),
(4, 'edit_user', '-- Edit User', 1, NULL, NULL),
(5, 'reset_password', '-- Reset Password', 1, NULL, NULL),
(6, 'settings', 'Setting Module', 2, NULL, NULL),
(7, 'app_info', '-- App Info', 2, NULL, NULL),
(9, 'location_module', 'Location Module', 3, NULL, NULL),
(10, 'emirates', 'Emirates', 3, NULL, NULL),
(11, 'add_emirates', '-- Add Emirates', 3, NULL, NULL),
(12, 'edit_emirates', '-- Edit Emirates', 3, NULL, NULL),
(13, 'view_emirates', '-- View Emirates', 3, NULL, NULL),
(14, 'areas', 'Areas', 3, NULL, NULL),
(15, 'add_areas', '-- Add Areas', 3, NULL, NULL),
(16, 'edit_areas', '-- Edit Areas', 3, NULL, NULL),
(17, 'view_areas', '-- View Areas', 3, NULL, NULL),
(18, 'zones', 'Zones', 3, NULL, NULL),
(19, 'add_zones', '-- Add Zones', 3, NULL, NULL),
(20, 'edit_zones', '-- Edit Zones', 3, NULL, NULL),
(21, 'view_zones', '-- View Zones', 3, NULL, NULL),
(22, 'zip_code', 'Zip Code', 3, NULL, NULL),
(23, 'add_zip_code', '-- Add Zip Code', 3, NULL, NULL),
(24, 'edit_zip_code', '-- Edit Zip Code', 3, NULL, NULL),
(25, 'view_zip_code', '-- View Zip Code', 3, NULL, NULL),
(26, 'service_module', 'Service Module', 4, NULL, NULL),
(27, 'duration', 'Duration', 4, NULL, NULL),
(28, 'add_duration', '-- Add Duration', 4, NULL, NULL),
(29, 'edit_duration', '-- Edit Duration', 4, NULL, NULL),
(30, 'view_duration', '-- View Duration', 4, NULL, NULL),
(31, 'coupon', 'Coupon', 4, NULL, NULL),
(32, 'add_coupon', '-- Add Coupon', 4, NULL, NULL),
(33, 'edit_coupon', '-- Edit Coupon', 4, NULL, NULL),
(34, 'view_coupon', '-- View Coupon', 4, NULL, NULL),
(35, 'services', 'Services', 4, NULL, NULL),
(36, 'add_services', '-- Add Services', 4, NULL, NULL),
(37, 'edit_services', '-- Edit Services', 4, NULL, NULL),
(38, 'view_services', '-- View Services', 4, NULL, NULL),
(39, 'order_module', 'Order Module', 5, NULL, NULL),
(40, 'all_order', 'All Order', 5, NULL, NULL),
(41, 'view_order_details', '-- View Order Details', 5, NULL, NULL),
(42, 'edit_order', '-- Edit Order', 5, NULL, NULL),
(43, 'banners', 'Banners', 2, NULL, NULL),
(44, 'add_banners', '-- Add Banners', 2, NULL, NULL),
(45, 'edit_banners', '-- Edit Banners', 2, NULL, NULL),
(46, 'delete_banners', '-- Delete Banners', 2, NULL, NULL),
(47, 'faq', 'FAQ', 2, NULL, NULL),
(48, 'add_faq', '-- Add Faq', 2, NULL, NULL),
(49, 'edit_faq', '-- Edit Faq', 2, NULL, NULL),
(50, 'delete_faq', '-- Delete Faq', 2, NULL, NULL),
(51, 'custom_page', 'Custom Page', 2, NULL, NULL),
(52, 'add_custom_page', '-- Add Custom Page', 2, NULL, NULL),
(53, 'edit_custom_page', '-- Edit Custom Page', 2, NULL, NULL),
(54, 'delete_custom_page', '-- Delete Custom Page', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  `service_overview` longtext COLLATE utf8mb4_unicode_ci,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL,
  `service_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `slug`, `short_description`, `service_overview`, `icon`, `image`, `price`, `is_active`, `service_id`, `created_at`, `updated_at`) VALUES
(1, 'Wash', 'wash', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Wash1652634417NVsZYFJRHUQ0.jpg', 'Wash1655814767m69xDVJfX8YY.jpg', 10, 1, NULL, '2022-04-26 15:16:39', '2022-06-21 12:32:47'),
(2, 'Wash & Iron', 'wash-iron', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Wash & Iron16526344453I3s1VRi1AoC.jpg', 'Wash & Iron1655814753NJZlYR92Fkcn.jpg', NULL, 1, NULL, '2022-05-15 11:07:25', '2022-06-21 12:32:33'),
(3, 'Dry Cleaning', 'dry-cleaning', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Dry Cleaning1652634518MTzCVt5umHB2.jpg', 'Dry Cleaning1655814744L6E8Gpc6XyJj.jpg', 10, 1, NULL, '2022-05-15 11:07:36', '2022-06-21 12:32:24'),
(4, 'Ironing', 'ironing', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Ironing1652634474YO7KBMWUMb8E.jpg', 'Ironing1655814734WMA78SHuSY1H.jpg', 7, 1, NULL, '2022-05-15 11:07:54', '2022-06-21 12:32:14'),
(5, 'Dulvets & Bulky Items', 'dulvets-bulky-items', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Dulvets & Bulky Items1652634494cRCldvCwBsbW.jpg', 'Dulvets & Bulky Items1655814725ukmsHvOZBHns.jpg', 7, 1, NULL, '2022-05-15 11:08:14', '2022-06-21 12:32:05'),
(6, 'Deals', 'deals', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Deals1652634505ZUpidKCySYUq.jpg', 'Deals1655814705pIuPWEsBgYeu.jpg', 7, 1, NULL, '2022-05-15 11:08:25', '2022-06-21 12:31:45');

-- --------------------------------------------------------

--
-- Table structure for table `service_durations`
--

CREATE TABLE `service_durations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `duration_id` bigint(20) UNSIGNED NOT NULL,
  `price` int(11) NOT NULL,
  `instructions` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_durations`
--

INSERT INTO `service_durations` (`id`, `service_id`, `duration_id`, `price`, `instructions`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 8, '1 Dress', '2022-04-26 15:18:43', '2022-04-26 15:18:43'),
(2, 1, 1, 10, '2 Dress', '2022-04-26 15:18:43', '2022-04-26 15:18:43'),
(3, 2, 2, 10, '5 Dress', '2022-06-01 11:28:12', '2022-06-01 11:28:12');

-- --------------------------------------------------------

--
-- Table structure for table `sub_modules`
--

CREATE TABLE `sub_modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` int(11) NOT NULL,
  `route` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `module_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_modules`
--

INSERT INTO `sub_modules` (`id`, `name`, `key`, `position`, `route`, `module_id`, `created_at`, `updated_at`) VALUES
(1, 'All User', 'all_user', 1, 'user.all', 1, NULL, NULL),
(2, 'Roles', 'roles', 2, 'role.all', 1, NULL, NULL),
(3, 'App Info', 'app_info', 1, 'app.info.all', 2, NULL, NULL),
(4, 'Cities', 'emirates', 2, 'emirate.all', 3, NULL, NULL),
(5, 'Areas', 'areas', 4, 'area.all', 3, NULL, NULL),
(6, 'Zones', 'zones', 3, 'zone.all', 3, NULL, NULL),
(7, 'Zip Code', 'zip_code', 1, 'zip_code.all', 3, NULL, NULL),
(8, 'Duration', 'duration', 2, 'duration.all', 4, NULL, NULL),
(9, 'Coupon', 'coupon', 1, 'coupon.all', 4, NULL, NULL),
(10, 'Service', 'service', 3, 'service.all', 4, NULL, NULL),
(11, 'All Order', 'all_order', 1, 'order.all', 5, NULL, NULL),
(12, 'Banners', 'banners', 2, 'banner.all', 2, NULL, NULL),
(13, 'FAQ', 'faq', 3, 'faq.all', 2, NULL, NULL),
(14, 'Custom Pages', 'custom_page', 4, 'custom_page.all', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `super_admins`
--

CREATE TABLE `super_admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `super_admins`
--

INSERT INTO `super_admins` (`id`, `name`, `email`, `image`, `phone`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'superadmin@gmail.com', NULL, '1858361812', NULL, '$2y$10$Pq8GTKELk27N8Y6kCjIgzOAuQK0uaGob9wrx6O/wjnmL6AdwinjIS', 'eLYNFxp4OfuLfn80vzL4ISJ5T2PCnRxHmceIWYt1VdpB0GpEzjeywQuP7y7Q', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `zipcodes`
--

CREATE TABLE `zipcodes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `zipcodes`
--

INSERT INTO `zipcodes` (`id`, `code`, `is_active`, `created_at`, `updated_at`) VALUES
(1, '1213', 1, '2022-04-22 11:26:48', '2022-04-22 11:26:48'),
(2, '1230', 1, '2022-04-22 11:33:18', '2022-04-22 11:36:54'),
(3, '1360', 1, '2022-04-22 15:44:06', '2022-04-22 15:44:06'),
(4, '1362', 1, '2022-04-22 15:44:12', '2022-04-22 15:44:12'),
(5, '1361', 1, '2022-04-22 15:44:19', '2022-04-22 15:44:19'),
(6, '1206', 1, '2022-04-22 15:44:24', '2022-04-22 15:44:24'),
(7, '1350', 1, '2022-04-22 15:44:30', '2022-04-22 15:44:30'),
(8, '1351', 1, '2022-04-22 15:44:35', '2022-04-22 15:44:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_infos`
--
ALTER TABLE `app_infos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `banners_position_unique` (`position`);

--
-- Indexes for table `contact_forms`
--
ALTER TABLE `contact_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `coupons_code_unique` (`code`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_phone_unique` (`phone`);

--
-- Indexes for table `custom_pages`
--
ALTER TABLE `custom_pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `custom_pages_position_unique` (`position`),
  ADD UNIQUE KEY `custom_pages_name_unique` (`name`),
  ADD UNIQUE KEY `custom_pages_slug_unique` (`slug`);

--
-- Indexes for table `durations`
--
ALTER TABLE `durations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `durations_duration_unique` (`duration`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `faqs_position_unique` (`position`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `locations_location_id_foreign` (`location_id`),
  ADD KEY `locations_zipcode_id_foreign` (`zipcode_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `modules_name_unique` (`name`),
  ADD UNIQUE KEY `modules_key_unique` (`key`),
  ADD UNIQUE KEY `modules_position_unique` (`position`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_order_no_unique` (`order_no`),
  ADD KEY `orders_customer_id_foreign` (`customer_id`);

--
-- Indexes for table `order_services`
--
ALTER TABLE `order_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_services_order_id_foreign` (`order_id`),
  ADD KEY `order_services_service_id_foreign` (`service_id`),
  ADD KEY `order_services_service_duration_id_foreign` (`service_duration_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_key_unique` (`key`),
  ADD KEY `permissions_module_id_foreign` (`module_id`);

--
-- Indexes for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permission_role_role_id_foreign` (`role_id`),
  ADD KEY `permission_role_permission_id_foreign` (`permission_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `services_name_unique` (`name`),
  ADD KEY `services_service_id_foreign` (`service_id`);

--
-- Indexes for table `service_durations`
--
ALTER TABLE `service_durations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `service_durations_service_id_foreign` (`service_id`),
  ADD KEY `service_durations_duration_id_foreign` (`duration_id`);

--
-- Indexes for table `sub_modules`
--
ALTER TABLE `sub_modules`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_modules_name_unique` (`name`),
  ADD UNIQUE KEY `sub_modules_key_unique` (`key`),
  ADD KEY `sub_modules_module_id_foreign` (`module_id`);

--
-- Indexes for table `super_admins`
--
ALTER TABLE `super_admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `super_admins_email_unique` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `zipcodes`
--
ALTER TABLE `zipcodes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `zipcodes_code_unique` (`code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_infos`
--
ALTER TABLE `app_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact_forms`
--
ALTER TABLE `contact_forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `custom_pages`
--
ALTER TABLE `custom_pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `durations`
--
ALTER TABLE `durations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `order_services`
--
ALTER TABLE `order_services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `permission_role`
--
ALTER TABLE `permission_role`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `service_durations`
--
ALTER TABLE `service_durations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_modules`
--
ALTER TABLE `sub_modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `super_admins`
--
ALTER TABLE `super_admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `zipcodes`
--
ALTER TABLE `zipcodes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_location_id_foreign` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `locations_zipcode_id_foreign` FOREIGN KEY (`zipcode_id`) REFERENCES `zipcodes` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_services`
--
ALTER TABLE `order_services`
  ADD CONSTRAINT `order_services_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_services_service_duration_id_foreign` FOREIGN KEY (`service_duration_id`) REFERENCES `service_durations` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_services_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_module_id_foreign` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `service_durations`
--
ALTER TABLE `service_durations`
  ADD CONSTRAINT `service_durations_duration_id_foreign` FOREIGN KEY (`duration_id`) REFERENCES `durations` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `service_durations_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sub_modules`
--
ALTER TABLE `sub_modules`
  ADD CONSTRAINT `sub_modules_module_id_foreign` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
