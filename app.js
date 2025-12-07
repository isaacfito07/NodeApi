const express = require("express");
const swaggerDocs = require("./config/swagger");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

// Swagger
swaggerDocs(app);

app.listen(3000, () => console.log("Servidor en puerto 3000 - Swagger en /api-docs"));
