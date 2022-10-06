// import { executeQuery } from "../database/database.js";

// const createItem = async (name) => {
//   await executeQuery("INSERT INTO shopping_list_items (name) VALUES ($1);", name);
// };

// // const findNonCollectedItems = async (shopping_list_id) => {
// //   let result = await executeQuery(
// //     "SELECT * FROM shopping_list_items WHERE shopping_list_id = $1 AND collected  IS FALSE;",
// //     shopping_list_id,
// //   );

// //   if (result.rows && result.rows.length > 0) {
// //     return result.rows[0];
// //   }

// //   return false;
// // };

// const findNonCollectedItems = async () => {
//   let result = await executeQuery(
//     "SELECT * FROM shopping_list_items WHERE   collected  IS FALSE;",
    
//   );

//   if (result.rows && result.rows.length > 0) {
//     return result.rows[0];
//   }

//   return false;
// };

// const collectItem = async (id) => {
//   await executeQuery("UPDATE shopping_list_items SET collected  = true WHERE id = $1;",id);
// };

// // const finishsingle_shopping_list = async (id) => {
// //   await executeQuery(
// //     "UPDATE shopping_list_items  SET collected  IS TRUE WHERE id = $1;",
// //     id,
// //   );
// // };

// export {
//   createItem,
//   findNonCollectedItems,
//   collectItem,
// };

import { executeQuery } from "../database/database.js";

const create_item = async (name) => {
  await executeQuery("INSERT INTO shopping_list_items (name) VALUES ($name);", {
    name: name,
  });
};

const findAllNonCollectedItems = async () => {
  let result = await executeQuery(
    "SELECT * FROM shopping_list_items WHERE collected = false;"
  );
  return result.rows;
};



export { create_item, findAllNonCollectedItems };