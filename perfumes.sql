-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2021 a las 21:39:12
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0
CREATE DATABASE perfumes;
USE perfumes;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `perfumes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `numero_movil` varchar(14) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre`, `apellido`, `numero_movil`, `password`, `email`) VALUES
(1, 'yojay', 'esteban', '3045981961', '$2y$10$vuVHlVSpDwOsohk7KRGAFenTpRtat9nmgbCxa9KWaRhFoZmM49vX2', 'yojay1000@gmail.com'),
(2, 'pedro', 'ramirez', '3014342345', '$2y$10$vnjr1bU9IjINFwligZ32tOiTKNaFLsyz6cdUbMr4m6JXIiB.28yCq', 'pedro@gmail.com'),
(3, 'juana', 'alfonso', '3043233424', '$2y$10$GlnwVwfvN2rhGRIhh24Wbu.q1wydY5Sf3NoLhNm.9kFg7Zo02sh1y', 'juan@juan.com'),
(4, 'juana', 'esteban', '305430432411', '$2y$10$iCuIj2lvgM7dS3o3lsNgE.CjfwiwzlCj3v1Gh8OZVAdsk8NxsHB/.', 'juanin@gmail.com'),
(20, 'juana', 'juaninaz', '1234124121', '$2y$10$BqIqKyCkgQXe9YenBciC2u4Wn/82iyj8qMEiUanBjWvqv0Okl6iue', 'povenah12398@0ranges.com'),
(21, 'juana', 'esteban', '3054304322411', '$2y$10$grT7YzvCiEQI9dp2HtJUteSXOs3hf7aPhy6tmdIjCY72kW73nppyS', 'yojay10020@gmail.com'),
(24, 'juana', 'juaninaz', '305431234', '$2y$10$kuU0UcecQVsFR4xyckGWk.zhjadGLCzygZAlSbBi07RB0Q5ti7ma2', 'yojay10030@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id_compra` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `cantidad_compra` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id_compra`, `id_producto`, `id_cliente`, `cantidad_compra`) VALUES
(6, 2, 2, 2),
(8, 1, 1, 1),
(9, 3, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad_compra` int(3) NOT NULL,
  `fecha_compra` date NOT NULL,
  `total_compra` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `stock_disponible` int(5) NOT NULL,
  `nombre_producto` varchar(60) NOT NULL,
  `precio_producto` int(15) NOT NULL,
  `descripcion` text NOT NULL,
  `tipo` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `stock_disponible`, `nombre_producto`, `precio_producto`, `descripcion`, `tipo`) VALUES
(1, 5, 'PERFUME DOLCE EDP 75 ML DOLCE &amp; GABBANA 75 ML', 290, 'Esta fragancia femenina está inspirada en la belleza legendariamente noble de Sicilia, con sus jardines colmados de frescas flores blancas. Dolce es un Eau de Parfum atemporal que combina lo mejor del glamour clásico con la innovación contemporánea.', 'F'),
(2, 7, 'PERFUME THE ONE 75ML DE DOLCE & GABBANA', 250, '75 M/L.(ONZ).THE ONE fue creado en el 2006. Como fue previsto por los diseñadores, es una fragancia para una mujer excepcional que inmediatamente llama la atención, no sólo con su aspecto, sino también con sus modales, postura y el mundo interior.', 'F'),
(3, 12, 'PERFUME LANCOME TRESOR PARA MUJER SIZE 100 ML', 240, 'Perfumes para mujeres Tresor Eau De Parfum Lumineuse De Lancome, su aroma es jovial, dulce sofisticado, con unas arrolladoras notas acarameladas, dedicada a mujeres apasionadas, modernas, sofisticadas y alegres', 'F'),
(4, 6, 'TRÉSOR MIDNIGHT ROSE DE LANCÔMEN', 100, 'Este maravilloso perfume que pertenece a la familia olfativa Almizcle-Floral-Amaderado. Su bella botella rosada, alargada y con un moño de rosa en el cuello, se destaca de sus predecesores de la línea trésor que suelen venir en un envase con forma de pirámide invertida.', 'F'),
(5, 12, 'PERFUME LA VIE EST BELLE', 150, 'La Vie Est Belle de Lancome es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. La Vie Est Belle se lanzó en 2012. La Vie Est Belle fue creada por Olivier Polge, Dominique Ropion y Anne Flipo. Las Notas de Salida son grosellas negras y pera; las Notas de Corazón son iris, jazmín y flor de azahar del naranjo.', 'F'),
(6, 4, 'SKY DE GIOIA DE GIORGIO ARMANI', 240, 'Perfume The One Dolce Gabbana Hombre Eau De Parfum es una fragancia de la familia olfativa Amaderada Especiada para Hombres. The One se lanzó en 2008. La Nariz detrás de esta fragrancia es Olivier Polge. Las Notas de Salida son cilantro, albahaca y toronja (pomelo); las Notas de Corazón son jengibre, flor de azahar del naranjo y cardamomo.', 'F'),
(7, 7, 'STRONGER WITH YOU DE GIORGIO ARMANI', 110, 'Stronger with you se inspira en un hombre que vive en el presente, moldeado por la energía de la modernidad. Es impredecible y original, al igual que el acorde picante de la fragancia: una mezcla de cardamomo, pimienta rosa y hojas de violeta.', 'M'),
(8, 6, 'PERFUME LOCIÓN ACQUA DI GIO', 410, 'ACQUA DI GIÒ PROFONDO de Giorgio Armani es un Eau de Parfum masculino perteneciente a la familia olfativa Aromática Acuática. Se trata de la interpretación contemporánea e intensa de Acqua di Giò, que busca remontarse a los orígenes: el mar.', 'M'),
(9, 5, 'DOLCE & GABBANA- THE ONE FOR MEN', 210, 'Dolce & Gabbana ha sorprendido al mundo en no pocas ocasiones, con aromas rompedores, novedosos y extremadamente gustables. De ello The One for Men es un caso paradigmático, cumple con 2 de los requisitos importantes para encontrar una buena fragancia', 'M'),
(10, 6, 'DOLCE & GABBANA POUR HOMEE HOMBRE PH053', 370, 'Lanzado en 1994, Dolce y Gabbana Pour Homme es un signo de masculinidad, personalidad, y distinción. Tan único como la imagen de Dolce y Gabbana, Pour Homme es una mezcla de ironía, verdad e informalidad. La frescura dinámica que expresa su personalidad a través de olores cítricos con un poco de flores frescas y maderas.', 'M');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`),
  ADD UNIQUE KEY `UQ_Email` (`email`) USING BTREE,
  ADD UNIQUE KEY `UQ_numero_movil` (`numero_movil`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `FK_id_producto` (`id_producto`) USING BTREE,
  ADD KEY `FK_id_cliente` (`id_cliente`) USING BTREE;

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `FK_id_cliente` (`id_cliente`) USING BTREE,
  ADD KEY `FK_id_producto` (`id_producto`) USING BTREE;

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD UNIQUE KEY `nombre_producto` (`nombre_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
