// // import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
// // import * as shopping_listService from "../services/shopping_listService.js";
// // import * as single_shopping_listService from "../services/single_shopping_listService.js";
// // import * as requestUtils from "../utils/requestUtils.js";
// // const responseDetails = {
// //   headers: { "Content-Type": "text/html;charset=UTF-8" },
// // };

// // // const redirectTo = (path) => {
// // //   return new Response(`Redirecting to ${path}.`, {
// // //     status: 303,
// // //     headers: {
// // //       "Location": path,
// // //     },
// // //   });
// // // };



// // const addshopping_list = async (request) => {
// //   const formData = await request.formData();
// //   const name = formData.get("name");

// //   await shopping_listService.create(name);

// //   return requestUtils.redirectTo("/lists");
// // };

// // const desactvate_shopping_list = async (request) => {
// //   const formData = await request.formData();
// //   const name = formData.get("name");

// //   await shopping_listService.desactive(name);

// //   return requestUtils.redirectTo("/lists/{id}/deactivate");
// // };

// // const viewshopping_list = async (request) => {
// //   const url = new URL(request.url);
// //   const urlParts = url.pathname.split("/");

// //   const data = {
// //     shopping_list: await shopping_listService.findById(urlParts[2]),
// //     currentWorkEntry: await single_shopping_listService.findAllActiveShopping_lists(urlParts[2]),
// //   };

// //   return new Response(await renderFile("shopping_list.eta", data), responseDetails);
// // };

// // const viewshopping_lists = async (request) => {
// //   const data = {
// //     shopping_lists: await shopping_listService.findAllActiveShopping_lists(),
// //   };

// //   return new Response(await renderFile("shopping_lists.eta", data), responseDetails);
// // };
// // export { addshopping_list, viewshopping_list,viewshopping_lists, desactvate_shopping_list };




// import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
// import * as shopping_listService from "../services/shopping_listService.js";
// import * as single_shopping_listService from "../services/single_shopping_listService.js";
// const responseDetails = {
//   headers: { "Content-Type": "text/html;charset=UTF-8" },
// };

// const redirectTo = (path) => {
//   return new Response(`Redirecting to ${path}.`, {
//     status: 303,
//     headers: {
//       "Location": path,
//     },
//   });
// };

// const desactivate_shopping_list = async (request) => {
//   const url = new URL(request.url);
//   const parts = url.pathname.split("/");
//   const id = parts[2];

//   await shopping_listService.desactivateById(id);

//   return redirectTo("/");
// };

// const addshopping_list = async (request) => {
//   const formData = await request.formData();
//   const name = formData.get("name");

//   await shopping_listService.create(name);

//   return redirectTo("/lists");
// };

// const viewshopping_lists = async (request) => {
//   const data = {
//     shopping_lists: await shopping_listService.findActiveShoppingList(),
//   };

//   return new Response(await renderFile("shopping_lists.eta", data), responseDetails);
// };

// const viewshopping_list = async (request) => {
//   const url = new URL(request.url);
//   const urlParts = url.pathname.split("/");

//   const data = {
//     // shopping_list: await shopping_listService.findById(urlParts[2]),
//     // currentNonCollectedItems: await single_shopping_listService.findNonCollectedItems(),
//     shopping_list: await single_shopping_listService.findNonCollectedItems(),
//   };

//   return new Response(await renderFile("shopping_list.eta", data), responseDetails);
// };

// export { addshopping_list, viewshopping_lists, desactivate_shopping_list, viewshopping_list };

import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as shopping_listService from "../services/shopping_listService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addshopping_list = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await shopping_listService.create(name);

  return requestUtils.redirectTo("/lists");
};

const viewshopping_lists = async (request) => {
  const data = {
    shopping_lists: await shopping_listService.findActiveShoppingList(),
  };

  return new Response(await renderFile("shopping_lists.eta", data), responseDetails);
};



export { addshopping_list, viewshopping_lists };
