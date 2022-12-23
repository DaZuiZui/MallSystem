/*
 Navicat Premium Data Transfer

 Source Server         : 商城系统
 Source Server Type    : MySQL
 Source Server Version : 50173
 Source Host           : 101.34.210.38:3306
 Source Schema         : mell

 Target Server Type    : MySQL
 Target Server Version : 50173
 File Encoding         : 65001

 Date: 23/12/2022 23:04:06
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '标题',
  `ima_url` varchar(255) DEFAULT NULL COMMENT '图片url',
  `create_time` varchar(255) DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of activity
-- ----------------------------
BEGIN;
INSERT INTO `activity` (`id`, `name`, `ima_url`, `create_time`) VALUES (6, '新上市别云剑武器，购买送黑钻', 'http://localhost:3000/download?file_name=1f974f86-27d0-44f0-8290-2134f9be2fc7.png', 'Sun Dec 18 2022 22:02:44 GMT 0800 (China Standard Time)');
COMMIT;

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `id` bigint(9) NOT NULL AUTO_INCREMENT,
  `tiitle` varchar(255) DEFAULT NULL COMMENT '标题',
  `context` varchar(2000) DEFAULT NULL COMMENT '内容',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `create_by` varchar(255) DEFAULT NULL COMMENT '创建人id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog
-- ----------------------------
BEGIN;
INSERT INTO `blog` (`id`, `tiitle`, `context`, `create_time`, `create_by`) VALUES (7, '玩剑魂到底入手别云剑还是光剑？', '小编推荐入手光剑。', 'Sun Dec 18 2022 22:04:04 GMT 0800 (China Standard Time)', '1');
COMMIT;

-- ----------------------------
-- Table structure for buyhis
-- ----------------------------
DROP TABLE IF EXISTS `buyhis`;
CREATE TABLE `buyhis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `good_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buyhis
-- ----------------------------
BEGIN;
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (1, 1, 1, 1);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (2, 1, 1, 4);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (3, 1, 1, 3);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (4, 3, 1, 2);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (5, 3, 1, 3);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (6, 3, 1, 4);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (7, 1, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (8, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (9, 0, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (10, 0, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (11, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (12, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (13, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (14, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (15, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (16, 1, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (17, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (18, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (19, 1, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (20, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (21, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (22, 6, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (23, 3, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (24, 1, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (25, 1, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (26, 1, 1, 0);
INSERT INTO `buyhis` (`id`, `good_id`, `user_id`, `status`) VALUES (27, 3, 1, 0);
COMMIT;

-- ----------------------------
-- Table structure for carousel
-- ----------------------------
DROP TABLE IF EXISTS `carousel`;
CREATE TABLE `carousel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ima_url` varchar(255) DEFAULT NULL COMMENT '图片url',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carousel
-- ----------------------------
BEGIN;
INSERT INTO `carousel` (`id`, `ima_url`) VALUES (5, 'http://localhost:3000/download?file_name=4ae41453-e244-41db-9d96-2a93ba9021bf.png');
INSERT INTO `carousel` (`id`, `ima_url`) VALUES (6, 'http://localhost:3000/download?file_name=e338b42e-5249-49b7-ba35-e4944928058f.png');
INSERT INTO `carousel` (`id`, `ima_url`) VALUES (4, 'http://localhost:3000/download?file_name=6f12bd7b-ca35-4d92-82be-a797712c1cf5.png');
INSERT INTO `carousel` (`id`, `ima_url`) VALUES (7, 'http://localhost:3000/download?file_name=2c338e37-ed0d-495e-ab2e-759d12a77411.png');
INSERT INTO `carousel` (`id`, `ima_url`) VALUES (8, 'http://localhost:3000/download?file_name=ae5a4056-b8df-4e27-9842-13f13346b055.png');
COMMIT;

-- ----------------------------
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `context` varchar(2000) DEFAULT NULL COMMENT '聊天内容',
  `type` int(2) DEFAULT NULL COMMENT '1是管理员恢复0是客户',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chat
-- ----------------------------
BEGIN;
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (1, 1, 'test', 0);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (2, 1, 'requst', 1);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (3, 1, '123', 0);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (4, 1, '11', 0);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (5, 1, '已经解决', 1);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (6, 1, '123', 1);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (7, 1, '12312312', 1);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (8, 1, '34344455666688', 0);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (9, 1, '123', 0);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (10, 1, '????', 0);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (11, 1, '别云剑', 1);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (12, 1, '光剑', 0);
INSERT INTO `chat` (`id`, `user_id`, `context`, `type`) VALUES (13, 1, '小编这边还是建议入手别云剑', 1);
COMMIT;

-- ----------------------------
-- Table structure for good_info
-- ----------------------------
DROP TABLE IF EXISTS `good_info`;
CREATE TABLE `good_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `goodid` varchar(128) DEFAULT NULL COMMENT '商品编号',
  `gamename` varchar(128) DEFAULT NULL COMMENT '游戏昵称',
  `score` double DEFAULT NULL COMMENT '商品价格',
  `goodintroduction` varchar(2000) DEFAULT NULL COMMENT '简介',
  `type` varchar(128) DEFAULT NULL COMMENT '分类',
  `ima_url` varchar(528) DEFAULT NULL COMMENT '图片url',
  `numbers` int(9) DEFAULT NULL COMMENT '库存数量',
  `name` varchar(128) DEFAULT NULL COMMENT '商品昵称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of good_info
-- ----------------------------
BEGIN;
INSERT INTO `good_info` (`id`, `goodid`, `gamename`, `score`, `goodintroduction`, `type`, `ima_url`, `numbers`, `name`) VALUES (1, '123', '123', 100, '123', 'DNF', 'http://localhost:3000/download?file_name=3d7c0194-315c-4de1-92fe-d9f72a70f86b.png', 44, '屠龙 1');
INSERT INTO `good_info` (`id`, `goodid`, `gamename`, `score`, `goodintroduction`, `type`, `ima_url`, `numbers`, `name`) VALUES (3, '123', '123', 100, '123', 'DNF', 'http://localhost:3000/download?file_name=c0bf712e-a7a0-4d38-a71f-7ef87e95609a.png', 8, '别云剑.超有用');
INSERT INTO `good_info` (`id`, `goodid`, `gamename`, `score`, `goodintroduction`, `type`, `ima_url`, `numbers`, `name`) VALUES (6, '1231', 'PUBG', 100, '小说会员', 'PUBG', 'http://localhost:3000/download?file_name=17510968-a9ab-4229-9163-a762c43c13ff.png', 99, '小说会员');
INSERT INTO `good_info` (`id`, `goodid`, `gamename`, `score`, `goodintroduction`, `type`, `ima_url`, `numbers`, `name`) VALUES (5, '1231', 'PUBG', 100, '车载小说DJ', 'PUBG', 'http://localhost:3000/download?file_name=a493ed65-c237-4cfb-8f62-82700fb84508.png', 100, '车载小说DJ');
INSERT INTO `good_info` (`id`, `goodid`, `gamename`, `score`, `goodintroduction`, `type`, `ima_url`, `numbers`, `name`) VALUES (7, '100', '地下城', 100, '别云剑 增幅12 锻造8', 'DNF-武器', 'http://localhost:3000/download?file_name=d37d2efd-ce4d-4b22-9f9f-e006eb7d5b56.png', 100, '别云剑 增幅12 锻造8');
INSERT INTO `good_info` (`id`, `goodid`, `gamename`, `score`, `goodintroduction`, `type`, `ima_url`, `numbers`, `name`) VALUES (8, '1231', 'AWP-聚龙传说', 100, 'AWP-聚龙传说', 'CS-武器', 'http://localhost:3000/download?file_name=2a87244f-660d-4a2a-960c-6a1c026afe7c.png', 10, 'AWP-聚龙传说');
COMMIT;

-- ----------------------------
-- Table structure for good_shopcar
-- ----------------------------
DROP TABLE IF EXISTS `good_shopcar`;
CREATE TABLE `good_shopcar` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `good_id` bigint(20) DEFAULT NULL COMMENT '商品id',
  `user_id` varchar(129) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of good_shopcar
-- ----------------------------
BEGIN;
INSERT INTO `good_shopcar` (`id`, `good_id`, `user_id`) VALUES (16, 3, '1');
COMMIT;

-- ----------------------------
-- Table structure for good_type
-- ----------------------------
DROP TABLE IF EXISTS `good_type`;
CREATE TABLE `good_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of good_type
-- ----------------------------
BEGIN;
INSERT INTO `good_type` (`id`, `type_name`) VALUES (15, 'Dota2');
INSERT INTO `good_type` (`id`, `type_name`) VALUES (9, 'Csgo');
INSERT INTO `good_type` (`id`, `type_name`) VALUES (8, 'Rust');
INSERT INTO `good_type` (`id`, `type_name`) VALUES (6, 'PUBG');
INSERT INTO `good_type` (`id`, `type_name`) VALUES (5, 'DNF');
INSERT INTO `good_type` (`id`, `type_name`) VALUES (14, 'Dota');
INSERT INTO `good_type` (`id`, `type_name`) VALUES (16, 'DNF-武器');
INSERT INTO `good_type` (`id`, `type_name`) VALUES (17, 'CS-武器');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(128) DEFAULT NULL COMMENT '用户名',
  `password` varchar(128) DEFAULT NULL COMMENT '密码',
  `role` int(3) DEFAULT NULL COMMENT '权限等级',
  `address` varchar(255) DEFAULT NULL COMMENT '地址',
  `score` double DEFAULT NULL COMMENT '钱',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `username`, `password`, `role`, `address`, `score`) VALUES (1, 'root', 'admin', 1, '123', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
