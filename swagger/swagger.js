const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "StockFlow API",
      version: "1.0.0",
      description:
        "Inventory Management System API built with Express.js and MongoDB",
    },

    servers: [
      {
        url: "https://stockflow-api-lh01.onrender.com",
        description: "Development Server",
      },
    ],

    components: {
      schemas: {
        // ===========================
        // PRODUCT
        // ===========================
        Product: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "6889a0c8c4d5ef1d2f6f4a71",
            },
            name: {
              type: "string",
              example: "Fanta Orange",
            },
            sku: {
              type: "string",
              example: "FAN001",
            },
            category: {
              type: "string",
              example: "Soft Drinks",
            },
            price: {
              type: "number",
              example: 500,
            },
            quantity: {
              type: "integer",
              example: 120,
            },
            supplierId: {
              type: "string",
              example: "6889a0c8c4d5ef1d2f6f4a72",
            },
            description: {
              type: "string",
              example: "50cl bottled soft drink",
            },
            status: {
              type: "string",
              enum: [
                "Available",
                "Out of Stock",
                "Discontinued",
              ],
              example: "Available",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-07-31T12:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-07-31T12:00:00Z",
            },
          },
        },

        ProductInput: {
          type: "object",
          required: [
            "name",
            "sku",
            "category",
            "price",
            "quantity",
            "supplierId",
          ],
          properties: {
            name: {
              type: "string",
              example: "Fanta Orange",
            },
            sku: {
              type: "string",
              example: "FAN001",
            },
            category: {
              type: "string",
              example: "Soft Drinks",
            },
            price: {
              type: "number",
              example: 500,
            },
            quantity: {
              type: "integer",
              example: 120,
            },
            supplierId: {
              type: "string",
              example: "6889a0c8c4d5ef1d2f6f4a72",
            },
            description: {
              type: "string",
              example: "50cl bottled soft drink",
            },
            status: {
              type: "string",
              enum: [
                "Available",
                "Out of Stock",
                "Discontinued",
              ],
              example: "Available",
            },
          },
        },

        // ===========================
        // SUPPLIER
        // ===========================
        Supplier: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "6889a0c8c4d5ef1d2f6f4a72",
            },
            companyName: {
              type: "string",
              example: "The Saintworld",
            },
            contactName: {
              type: "string",
              example: "Josh Johnson",
            },
            email: {
              type: "string",
              example: "josh@work.org",
            },
            phone: {
              type: "string",
              example: "+2347022346512",
            },
            address: {
              type: "string",
              example: "Aba, Abia State, Nigeria",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-07-31T12:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-07-31T12:00:00Z",
            },
          },
        },

        SupplierInput: {
          type: "object",
          required: [
            "companyName",
            "contactName",
            "email",
            "phone",
            "address",
          ],
          properties: {
            companyName: {
              type: "string",
              example: "The Saintworld",
            },
            contactName: {
              type: "string",
              example: "Josh Johnson",
            },
            email: {
              type: "string",
              example: "josh@work.org",
            },
            phone: {
              type: "string",
              example: "+2347022346512",
            },
            address: {
              type: "string",
              example: "Aba, Abia State, Nigeria",
            },
          },
        },

        // ===========================
        // CUSTOMER
        // ===========================
        Customer: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "6891d8e8c4d5ef1d2f6f4a80",
            },
            firstName: {
              type: "string",
              example: "John",
            },
            lastName: {
              type: "string",
              example: "Doe",
            },
            email: {
              type: "string",
              example: "john.doe@email.com",
            },
            phone: {
              type: "string",
              example: "+2348012345678",
            },
            city: {
              type: "string",
              example: "Lagos",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-08-05T10:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-08-05T10:00:00Z",
            },
          },
        },

        CustomerInput: {
          type: "object",
          required: [
            "firstName",
            "lastName",
            "email",
            "phone",
            "city",
          ],
          properties: {
            firstName: {
              type: "string",
              example: "John",
            },
            lastName: {
              type: "string",
              example: "Doe",
            },
            email: {
              type: "string",
              example: "john.doe@email.com",
            },
            phone: {
              type: "string",
              example: "+2348012345678",
            },
            city: {
              type: "string",
              example: "Lagos",
            },
          },
        },

        Order: {
  type: "object",
  properties: {
    _id: {
      type: "string",
      example: "6891e8f8c4d5ef1d2f6f4a90",
    },
    customerId: {
      type: "string",
      example: "6891d8e8c4d5ef1d2f6f4a80",
    },
    productId: {
      type: "string",
      example: "6889a0c8c4d5ef1d2f6f4a71",
    },
    quantity: {
      type: "integer",
      example: 2,
    },
    totalPrice: {
      type: "number",
      example: 1000,
    },
    orderStatus: {
      type: "string",
      enum: [
        "Pending",
        "Processing",
        "Completed",
        "Cancelled",
      ],
      example: "Pending",
    },
    orderDate: {
      type: "string",
      format: "date-time",
      example: "2026-08-05T12:00:00Z",
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2026-08-05T12:00:00Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2026-08-05T12:00:00Z",
    },
  },
},

OrderInput: {
  type: "object",
  required: [
    "customerId",
    "productId",
    "quantity",
    "totalPrice",
  ],
  properties: {
    customerId: {
      type: "string",
      example: "6891d8e8c4d5ef1d2f6f4a80",
    },
    productId: {
      type: "string",
      example: "6889a0c8c4d5ef1d2f6f4a71",
    },
    quantity: {
      type: "integer",
      example: 2,
    },
    totalPrice: {
      type: "number",
      example: 1000,
    },
    orderStatus: {
      type: "string",
      enum: [
        "Pending",
        "Processing",
        "Completed",
        "Cancelled",
      ],
      example: "Pending",
    },
  },
},


      },
    },
  },

  apis: ["./routes/*.js"],
};

module.exports = swaggerJsdoc(options);