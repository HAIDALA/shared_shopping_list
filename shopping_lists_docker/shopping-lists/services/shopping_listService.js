import { executeQuery } from "../database/database.js";

const create = async (name) => {
  await executeQuery("INSERT INTO shopping_lists (name) VALUES ($name);", {
    name: name,
  });
};

const findActiveShoppingList = async () => {
  let result = await executeQuery(
    "SELECT * from shopping_lists WHERE active = true;"
  );

  return result.rows;
};



const findById = async (id) => {
  let result = await executeQuery("SELECT * FROM shopping_lists WHERE id = $id;", {
    id: id,
  });

  if (result.rows && result.rows.length > 0) {
    return result.rows[0];
  }

  return { id: 0, name: "Unknown" };
};

const deactivate_shopping_list = async (id) => {
  await executeQuery(
    "UPDATE shopping_lists SET active = false WHERE id = $id;",
    {
      id: id,
    }
  );
};



const count_lists = async () => {
  let result = await executeQuery(
    "SELECT COUNT(id) FROM shopping_lists;"
  );

  return result.rows[0].count;
};

const count_items = async () => {
  let result = await executeQuery(
    "SELECT COUNT(id) FROM shopping_list_items;"
  );

  return result.rows[0].count;
};
export {create, findActiveShoppingList, findById, deactivate_shopping_list, count_lists, count_items}
