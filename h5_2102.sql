-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-05-16 00:24:36
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `h5_2102`
--

-- --------------------------------------------------------

--
-- 表的结构 `prouduct`
--

CREATE TABLE `prouduct` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(11) NOT NULL COMMENT '商品数量',
  `picture` varchar(255) NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品描述'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `prouduct`
--

INSERT INTO `prouduct` (`id`, `title`, `price`, `num`, `picture`, `details`) VALUES
(1, '小米MIX FOLD', 9999, 123, '[{ \"src\": \"img/index/phone-1.jpg\", \"alt\": \"small\" }]', '折叠大屏｜自研芯片'),
(2, '小米11 Ultra', 5999, 123, '[{ \"src\": \"img/index/phone-2.jpg\", \"alt\": \"small\" }]', '1.12\'\'GN2｜2K四微曲屏'),
(3, '小米11 Pro', 4999, 123, '[{ \"src\": \"img/index/phone-3.jpg\", \"alt\": \"small\" }]', '1.12\'\'GN2｜骁龙888'),
(4, '小米11 青春版', 2999, 123, '[{ \"src\": \"img/index/phone-4.jpg\", \"alt\": \"small\" }]', '小米11 青春版 轻薄'),
(5, ' K40 游戏增强版', 1999, 123, '[{ \"src\": \"img/index/phone-5.jpg\", \"alt\": \"small\" }]', '轻薄电竞设计'),
(6, '黑鲨4 Pro', 3999, 123, '[{ \"src\": \"img/index/phone-6.jpg\", \"alt\": \"small\" }]', '黑鲨4 Pro '),
(7, '黑鲨4 Pro ', 2499, 564, '[{ \"src\": \"img/index/phone-7.jpg\", \"alt\": \"small\" }]', '黑鲨4 磁动力升降肩键'),
(8, '小米10S', 3299, 123, '[{ \"src\": \"img/index/phone-8.jpg\", \"alt\": \"small\" }]', '骁龙870 | 对称式双扬立体声');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT 'id',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL COMMENT '电子邮箱',
  `phone` bigint(20) NOT NULL COMMENT '电话号码',
  `address` varchar(255) NOT NULL COMMENT '住址'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `address`) VALUES
(100019, '盛钟璇', '123', 'dd@dddd', 123, 'ffff'),
(100016, 'admin', '', 'cc@wdw', 12364, 'ffff'),
(100015, '111', '111', '111', 11, '111'),
(100013, 'xiaow', '333333333333333', '1678642081@qq.com', 33333333333333, '3333333333333333'),
(100006, 'xiaolv', '1232225', '1678642081@qq.com', 22, '111'),
(100008, 'root', 'a123', '163@qq.com', 959592, '上城'),
(100017, 'dddddaa', 'sqsq', 'dd@dddd', 17858930062, 'ffff'),
(100018, '盛钟铉', '', 'dd@dddd', 123, '123'),
(100020, '陈枪', '123', '1678642081@qq.com', 17858930062, 'ffff'),
(100021, '好兄弟', 'a123', '1678642081@qq.com', 17858930062, 'ffff'),
(100022, 'a', '1', 'cc@wdw', 123, 'ffff'),
(100023, 'dddd', 'xuan567898726', '1678642081@qq.com', 11111111111, 'ffff'),
(100024, 'aaaaa123', 'aaaaaaaaaaaaaaaAa1', '1678642081@qq.com', 17858930062, ''),
(100025, '488888', 'sssss', 'ssssssssssssss@ss', 1785, 'sssssssssssss'),
(100026, '苏大哥', 'xuan567898726', '1678642081@qq.com', 17858930062, 'ddd'),
(100027, 'abcd', '', '1678642081@qq.com', 123789, 'ffff');

--
-- 转储表的索引
--

--
-- 表的索引 `prouduct`
--
ALTER TABLE `prouduct`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `prouduct`
--
ALTER TABLE `prouduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=100028;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
