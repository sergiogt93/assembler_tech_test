const server = require("./server");
require("dotenv").config();

// import connection database and seeders
const { connectDatabase } = require("./db/connection");
const { createCategories } = require("./seeders/CategoriesSeeder");

// import routes
const authRoutes = require("./routes/auth.routes");
const gifsRoutes = require("./routes/gifs.routes");
const categoriesRoutes = require("./routes/categories.routes");

// route middlewares
server.use("/api/v1", authRoutes);
server.use("/api/v1/gifs", gifsRoutes);
server.use("/api/v1/categories", categoriesRoutes);

// turn on server for connect clients
(async function serverInit() {
  try {
    await connectDatabase();
    await createCategories();
    server.listen(process.env.PORT, () => {
      console.log(`Server connected to the port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();

module.exports = server;
