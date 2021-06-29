-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2021 a las 05:03:14
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `citasmedicas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `medico` varchar(10) NOT NULL,
  `paciente` varchar(10) NOT NULL,
  `descripcion` text NOT NULL,
  `estado` text NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`id`, `fecha`, `medico`, `paciente`, `descripcion`, `estado`, `hora`) VALUES
(2, '2021-06-29', '12339434-2', '12234432-1', 'patologia cardiaca leve', 'abierta', '15:00:00'),
(3, '2021-06-29', '13665778-9', '19757707-k', 'adasd', 'abierta', '15:00:00'),
(4, '2021-06-29', '12339434-2', '19757707-k', 'ayudaa', 'abierta', '15:00:00'),
(5, '2021-06-30', '13665778-9', '19757707-k', 'wdasd', 'abierta', '15:00:00'),
(6, '2021-06-30', '13665778-9', '12234432-1', 'aadasdas', 'abierta', '18:05:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

CREATE TABLE `medicos` (
  `especialidad` varchar(200) NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `rutmedico` varchar(10) NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`especialidad`, `nombres`, `apellidos`, `rutmedico`, `correo`) VALUES
('Cardiologo', 'Ramon Antonio', 'Farias Villagran', '12339434-2', 'ramonvillagran@lunimed.cl'),
('Pediatra', 'Alejandra Sofia', 'Aravena Inostroza', '13665778-9', 'alejandraaravena@lunimed.cl'),
('Traumatólogo', 'Andres Eduardo', 'Pavez Gonzalez', '15646567-8', 'andrespavez@lunimed.cl');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `rut` varchar(10) NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `region` varchar(50) NOT NULL,
  `comuna` varchar(50) NOT NULL,
  `direccion` varchar(60) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `contraseña` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`rut`, `nombres`, `apellidos`, `region`, `comuna`, `direccion`, `correo`, `contraseña`) VALUES
('11737690-7', 'Luis Alberto', 'Gonzalez Aguirre', 'Valparaiso', 'San Antonio', 'Pasaje Elgueta 22', 'laga_1971@gmail.com', '12cff92a4519d0536e1a9fa022d88796'),
('12234432-1', 'Marino Antonio', 'Hinojosa Cepeda', 'Metropolitana', 'La pintana', 'las acacias 221', 'marino@gmail.com', '83775a85294da71bf7148892d898cd6e'),
('12895824-k', 'Daniela Andrea ', 'Riquelme Torres', 'Valparaiso', 'San Antonio', 'Alcalde Armando Pino 1610', 'daniriqui@gmail.com', '5e543256c480ac577d30f76f9120eb74'),
('13444444-6', 'Gabriela Francisca', 'Norambuena Palacios', 'Araucania', 'los vilos', 'enmicasa 123', 'gabrielanorambuena@gmail.com', 'fbc685ca9f7771fd10d889bf82646005'),
('19757707-k', 'Luis Felipe', 'Gonzalez Riquelme', 'Valparaiso', 'San Antonio', 'Alcalde Armando Pino 1610', 'lugori97@gmail.com', '014436b6640304b2cfad8a43f4aaad1a'),
('19827382-1', 'Andrea Constanza', 'Aravena Palacios', 'Araucania', 'Panguipulli', 'los lilios 1010', 'adreaaaa@gmail.com', 'f2f2f1b8139e0b349e72820d562f4aa3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citas_ibfk_1` (`medico`),
  ADD KEY `citas_ibfk_2` (`paciente`);

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`rutmedico`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`medico`) REFERENCES `medicos` (`rutmedico`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`paciente`) REFERENCES `pacientes` (`rut`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
