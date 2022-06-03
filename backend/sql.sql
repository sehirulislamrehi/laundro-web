-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2022 at 02:03 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laundro`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_infos`
--

CREATE TABLE `app_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fav` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `app_infos`
--

INSERT INTO `app_infos` (`id`, `logo`, `fav`, `created_at`, `updated_at`) VALUES
(1, '16506454434A5CdEoPH7hI.png', '1650645443kqaOH4wgbLin.png', NULL, '2022-04-22 10:37:23');

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
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
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
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `is_verified` tinyint(1) NOT NULL DEFAULT 0,
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
(11, 'Md Sehirul Islam Rehi', '01858361812', 'mdsehirulislamrehi@gmail.com', '$2y$10$OCgVmoFjU3vxQkZF84Xw7.fMmZWyLyN.ci6g5.fO.xmCbL4ByG/ay', 'Dhaka', NULL, NULL, 1, 1, 5, 2022, 'Ty2qqJmpuLrBEeN0dd0RozgEcZTbP60jB6zW8RRs99N3CMzG8Tc2b5ruf1tDfAZXgqUPVwt2EQrg4ELz', '2022-05-29 05:08:26', '2022-05-31 01:58:21'),
(14, 'Hasan Masrur', '01858361813', 'hasan@gmail.com', '$2y$10$iMfpfyusIGdLkUwL.f9iw.ENTW1BHpYSzR.3Ph.ugOoDIvZT41ebq', 'Dhaka', NULL, NULL, 1, 1, 5, 2022, 'phNPd2anFh3rQo3mx3Zltn5dCGADVodT6SDQIs52njWsUKl7mE1CSMGzbTYCCBXI9rJYgvL19UoiiKxo', '2022-05-29 18:40:31', '2022-05-29 18:47:16');

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
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `is_active` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
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
(10, '2021_08_19_102916_create_app_infos_table', 1),
(12, '2022_02_02_130530_create_zipcodes_table', 2),
(13, '2022_02_02_130531_create_locations_table', 2),
(14, '2022_02_08_111156_create_durations_table', 3),
(15, '2022_02_09_091043_create_coupons_table', 4),
(16, '2022_02_09_072433_create_services_table', 5),
(17, '2022_02_09_072514_create_service_durations_table', 5),
(18, '2022_05_28_005933_create_customers_table', 6),
(25, '2022_06_02_103400_create_orders_table', 7),
(26, '2022_06_02_103721_create_order_services_table', 7);

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
(2, 'Setting Module', 'settings', 'fas fa-cog', 10, NULL, NULL, NULL),
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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(42, 'edit_order', '-- Edit Order', 5, NULL, NULL);

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
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
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
  `short_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_overview` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL,
  `service_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `slug`, `short_description`, `service_overview`, `icon`, `price`, `is_active`, `service_id`, `created_at`, `updated_at`) VALUES
(1, 'Wash', 'wash', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Wash1652634417NVsZYFJRHUQ0.jpg', 10, 1, NULL, '2022-04-26 15:16:39', '2022-05-30 03:28:18'),
(2, 'Wash & Iron', 'wash-iron', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Wash & Iron16526344453I3s1VRi1AoC.jpg', NULL, 1, NULL, '2022-05-15 11:07:25', '2022-06-01 11:27:46'),
(3, 'Dry Cleaning', 'dry-cleaning', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Dry Cleaning1652634518MTzCVt5umHB2.jpg', 10, 1, NULL, '2022-05-15 11:07:36', '2022-05-30 03:28:05'),
(4, 'Ironing', 'ironing', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Ironing1652634474YO7KBMWUMb8E.jpg', 7, 1, NULL, '2022-05-15 11:07:54', '2022-05-30 03:27:59'),
(5, 'Dulvets & Bulky Items', 'dulvets-bulky-items', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Dulvets & Bulky Items1652634494cRCldvCwBsbW.jpg', 7, 1, NULL, '2022-05-15 11:08:14', '2022-05-30 03:27:54'),
(6, 'Deals', 'deals', 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware house clients…courteously, responsively.\r\n\r\nUSA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time. We provide janitorial.\r\n\r\nA neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.', '<p><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p></div><div class=\"pera-txt mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"><p style=\" color: rgb(58, 66, 104)\">Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p></div></p>\r\n<li style=\"background-color: rgb(255, 255, 255); color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; display: inline !important; gap: 10px;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>\r\n<div class=\"srd-list mt-20\" style=\" margin-top: 20px; color: rgb(58, 66, 104); font-family: Rubik, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255)\"></div><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><li style=\"gap: 10px; margin-top: 20px; display: inline !important;\"><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li><li style=\"display: flex; gap: 10px; margin-top: 20px;\"></li><i class=\"fas fa-check\" style=\"display: inline-block; -webkit-font-smoothing: antialiased; font-variant-numeric: normal; font-variant-east-asian: normal; text-rendering: auto; line-height: 1; font-family: &quot;Font Awesome 5 Free&quot;; font-weight: 900; margin-top: 3px; color: rgb(0, 107, 204);\"></i><p><ul><li>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li></ul></p>', 'Deals1652634505ZUpidKCySYUq.jpg', 7, 1, NULL, '2022-05-15 11:08:25', '2022-05-30 03:27:48');

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
(11, 'All Order', 'all_order', 1, 'order.all', 5, NULL, NULL);

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
(1, 'Super Admin', 'superadmin@gmail.com', NULL, '1858361812', NULL, '$2y$10$DL4GYEre.pxRW.Ie17TKdOt1Qu1Ht578RmDVL7A0yfhoxjj2d4vXi', 'SkEbzeFj6aLjRpOAmk3BkQhxvmKIbmOA4UAghQnaXXlHO422A6Bhhn8hwJ7M', NULL, NULL);

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
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
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
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
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
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

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
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `order_services`
--
ALTER TABLE `order_services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
