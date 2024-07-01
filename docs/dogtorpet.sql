-- -----------------------------------------------------
-- Schema dogtorpet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dogtorpet` DEFAULT CHARACTER SET utf8mb4;
USE `dogtorpet`;

-- -----------------------------------------------------
-- Table `dogtorpet`.`tipos`
-- -----------------------------------------------------
CREATE TABLE `tipos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `dogtorpet`.`propietarios`
-- -----------------------------------------------------
CREATE TABLE `propietarios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `propietarios_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `dogtorpet`.`mascotas`
-- -----------------------------------------------------
CREATE TABLE `mascotas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `propietario` bigint unsigned NOT NULL,
  `fechaNac` date NOT NULL,
  `raza` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genero` enum('macho','hembra') COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` bigint unsigned NOT NULL,
  `fotoUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mascotas_propietario_foreign` (`propietario`),
  KEY `mascotas_tipo_foreign` (`tipo`),
  CONSTRAINT `mascotas_propietario_foreign` FOREIGN KEY (`propietario`) REFERENCES `propietarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mascotas_tipo_foreign` FOREIGN KEY (`tipo`) REFERENCES `tipos` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;