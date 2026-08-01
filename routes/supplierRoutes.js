const express = require("express");

const router = express.Router();

const {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

const validate = require("../middleware/validate");
const supplierSchema = require("../validation/supplierValidation");

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: Supplier management endpoints
 */

/**
 * @swagger
 * /api/suppliers:
 *   get:
 *     summary: Retrieve all suppliers
 *     description: Returns a list of all suppliers in the system.
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Suppliers retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 count:
 *                   type: integer
 *                   example: 2
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Supplier'
 */
router.get("/", getAllSuppliers);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   get:
 *     summary: Retrieve a supplier by ID
 *     description: Returns a single supplier using its MongoDB ObjectId.
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Supplier ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Supplier'
 *       404:
 *         description: Supplier not found.
 */
router.get("/:id", getSupplierById);

/**
 * @swagger
 * /api/suppliers:
 *   post:
 *     summary: Create a new supplier
 *     description: Adds a new supplier to the database.
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SupplierInput'
 *     responses:
 *       201:
 *         description: Supplier created successfully.
 *       400:
 *         description: Validation error.
 */
router.post("/", validate(supplierSchema), createSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   put:
 *     summary: Update an existing supplier
 *     description: Updates an existing supplier by its ID.
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Supplier ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SupplierInput'
 *     responses:
 *       200:
 *         description: Supplier updated successfully.
 *       404:
 *         description: Supplier not found.
 */
router.put("/:id", validate(supplierSchema), updateSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   delete:
 *     summary: Delete a supplier
 *     description: Deletes a supplier by its ID.
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Supplier ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier deleted successfully.
 *       404:
 *         description: Supplier not found.
 */
router.delete("/:id", deleteSupplier);

module.exports = router;