import { executeQuery } from "../database/database.js";

const create_item = async (name, shopping_list_id ) => {
  await executeQuery("INSERT INTO shopping_list_items (name,shopping_list_id ) VALUES ($name, $shopping_list_id );", {
    name: name,
    shopping_list_id : shopping_list_id,
  });
};

const findAllNonCollectedItems = async (shopping_list_id ) => {
  let result = await executeQuery(
    "SELECT * FROM shopping_list_items WHERE shopping_list_id = $shopping_list_id and collected = false;",{
      shopping_list_id  : shopping_list_id,
    }
  );
  return result.rows;
};

const findAllCollectedItems = async (shopping_list_id ) => {
  let result = await executeQuery(
    "SELECT * FROM shopping_list_items WHERE shopping_list_id = $shopping_list_id and collected = true;",{
      shopping_list_id  : shopping_list_id,
    }
  );
  return result.rows;
};

const findCurrentShoppingList = async (id) => {
  let result = await executeQuery("SELECT * FROM shopping_lists  WHERE id   = $id ;", {
    id  : id,
  });

  if (result.rows && result.rows.length > 0) {
    return result.rows[0];
  }

  return false;
};

const collect_item = async (id) => {
  await executeQuery(
    "UPDATE shopping_list_items  SET collected = TRUE WHERE id = $id;",
    {
      id: id,
    }
  );
};



export { create_item, findAllNonCollectedItems, findCurrentShoppingList, collect_item, findAllCollectedItems};