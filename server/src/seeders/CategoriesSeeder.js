const Category = require("../models/Category");

const createCategories = async () => {
  try {
    const count = await Category.estimatedDocumentCount();

    if (count > 0) return;

    await Promise.all([
      new Category({ name: "invizimals" }).save(),
      new Category({ name: "digimon" }).save(),
      new Category({ name: "pokemon" }).save(),
    ]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createCategories };
