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
// // const finishsingle_shopping_list = async (request) => {
// //   const url = new URL(request.url);
// //   const urlParts = url.pathname.split("/");
// //   await single_shopping_listService.finishsingle_shopping_list(urlParts[4]);

// //   return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
// // };
// const addItem = async (request) => {
//   const formData = await request.formData();
//   const name = formData.get("name");

//   await single_shopping_listService.createItem(name);

//   return redirectTo("/lists/{id}");
// };


// // const viewshopping_list = async (request) => {
// //   const url = new URL(request.url);
// //   const urlParts = url.pathname.split("/");

// //   const data = {
// //     shopping_list_items: await shopping_listService.findById(urlParts[2]),
// //     currentNonCollectedItems: await single_shopping_listService.findNonCollectedItems(),
// //   };

// //   return new Response(await renderFile("shopping_list_items.eta", data), responseDetails);
// // };



// export { addItem,  };

import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as single_shopping_listService from "../services/single_shopping_listService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};



const addItem = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const formData = await request.formData();
  const name = formData.get("name");

  await single_shopping_listService.create_item(name);
  
  return requestUtils.redirectTo(`lists/${urlParts[2]}`);
};

const viewItems = async (request) => {
  const data = {
    items: await single_shopping_listService.findAllNonCollectedItems(),
  };

  return new Response(await renderFile("single_shopping_list.eta", data), responseDetails);
};


export { addItem, viewItems };