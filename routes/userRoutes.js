const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints de usuarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/", userController.getAll);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post("/", userController.create);

module.exports = router;
