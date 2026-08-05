const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
const connectDB = require("../config/db");

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Orders API", () => {
  test("GET /api/orders should return all orders", async () => {
    const response = await request(app).get("/api/orders");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  test("GET /api/orders/:id with invalid id should return 400 or 500", async () => {
    const response = await request(app).get("/api/orders/invalid-id");

    expect([400, 500]).toContain(response.statusCode);
  });
});