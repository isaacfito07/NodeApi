const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API MVC Node",
      version: "1.0.0",
      description: "Plantilla API con MVC y Swagger"
    },
    servers: [{ url: "http://localhost:3000" }]
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = function(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
