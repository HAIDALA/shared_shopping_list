// // import { executeQuery } from "../database/database.js";

// // const create = async (name) => {
// //   await executeQuery("INSERT INTO shopping_lists (name) VALUES ($1);", name);
// // };

// // const desactive = async (name) => {
// //   await executeQuery("UPDATE shopping_lists SET active = false WHERE name = '$1';",name);
// // };


// // const findAllActiveShopping_lists = async () => {
// //   let result = await executeQuery(
// //     "SELECT * FROM shopping_lists WHERE active  = true;",
// //   );
// //   return result.rows;
// // };

// // const findById = async (id) => {
// //   let result = await executeQuery("SELECT * FROM shopping_lists  WHERE id = $1;", id);
// //   if (result.rows && result.rows.length > 0) {
// //     return result.rows[0];
// //   }

// //   return { id: 0, name: "Unknown" };
// // };


// // export { create, findAllActiveShopping_lists, findById, desactive };

// import { executeQuery } from "../database/database.js";

// const create = async (name) => {
//   await executeQuery("INSERT INTO shopping_lists (name) VALUES ($1);", name);
// };
// const desactivateById = async (id) => {
//   await executeQuery("UPDATE shopping_lists SET active = false WHERE id = $1;",id);
// };
// const findActiveShoppingList = async () => {
//   let result = await executeQuery(
//     "SELECT * FROM shopping_lists WHERE active = true;",
//   );
//   return result.rows;
// };

// const findById = async (id) => {
//   let result = await executeQuery("SELECT * FROM shopping_lists  WHERE id = $1;", id);
//   if (result.rows && result.rows.length > 0) {
//     return result.rows[0];
//   }

//   return { id: 0, name: "Unknown" };
// };


// export { create, findActiveShoppingList, desactivateById, findById};

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

export {create, findActiveShoppingList,  findById}
