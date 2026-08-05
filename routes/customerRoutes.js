const express = require("express");

const router = express.Router();

const {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

const authenticate = require("../middleware/authenticate");
const validate = require("../middleware/validate");
const customerSchema = require("../validation/customerValidation");

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer management endpoints
 */

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Retrieve all customers
 *     description: Returns a list of all customers.
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Customers retrieved successfully.
 */
router.get("/", getAllCustomers);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Retrieve a single customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the customer
 *     responses:
 *       200:
 *         description: Customer retrieved successfully.
 *       404:
 *         description: Customer not found.
 */
router.get("/:id", getCustomerById);

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerInput'
 *     responses:
 *       201:
 *         description: Customer created successfully.
 *       400:
 *         description: Validation error.
 */
router.post(
  "/",
  authenticate,
  validate(customerSchema),
  createCustomer
);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Update an existing customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerInput'
 *     responses:
 *       200:
 *         description: Customer updated successfully.
 *       404:
 *         description: Customer not found.
 */
router.put(
  "/:id",
  authenticate,
  validate(customerSchema),
  updateCustomer
);
/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the customer
 *     responses:
 *       200:
 *         description: Customer deleted successfully.
 *       404:
 *         description: Customer not found.
 */
router.delete("/:id", authenticate,deleteCustomer);

module.exports = router;