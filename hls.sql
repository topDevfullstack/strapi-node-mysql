/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3306
 Source Schema         : hls

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 24/10/2022 07:49:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for videos_categories_links
-- ----------------------------
DROP TABLE IF EXISTS `videos_categories_links`;
CREATE TABLE `videos_categories_links`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `video_id` int UNSIGNED NULL DEFAULT NULL,
  `category_id` int UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `videos_categories_links_fk`(`video_id` ASC) USING BTREE,
  INDEX `videos_categories_links_inv_fk`(`category_id` ASC) USING BTREE
);

SET FOREIGN_KEY_CHECKS = 1;
