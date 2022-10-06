// import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
// import { configure } from "https://deno.land/x/eta@v1.12.3/mod.ts";
// import * as shopping_listController from "./controllers/shopping_listController.js";
// import * as single_shopping_listController from "./controllers/single_shopping_listController.js";
// import * as requestUtils from "./utils/requestUtils.js";
// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const handleRequest = async (request) => {
//   const url = new URL(request.url);

//   if (url.pathname === "/" && request.method === "GET") {
//     return requestUtils.redirectTo("/lists");
//   } else if (url.pathname === "/lists" && request.method === "POST") {
//     return await shopping_listController.addshopping_list(request);
//   } else if (url.pathname === "/lists/{id}/deactivate" && request.method === "POST") {
//     return await shopping_listController.desactive(request);
//   } else if (url.pathname === "/lists" && request.method === "GET") {
//     return await shopping_listController.viewshopping_lists(request);
//   } else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
//     return await shopping_listController.viewshopping_list(request);
//   } else if (url.pathname.match("lists/[0-9]+/list_items") && request.method === "POST") {
//     return await single_shopping_listController.createsingle_shopping_list(request);
//   } else if (url.pathname.match("lists/[0-9]+/list_items/[0-9]+") && request.method === "POST") {
//     return await single_shopping_listController.finishsingle_shopping_list(request);
//   } else {
//     return new Response("Not found", { status: 404 });
//   }
// };

// serve(handleRequest, { port: 7777 });

// import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
// import { configure } from "https://deno.land/x/eta@v1.12.3/mod.ts";
// import * as shopping_listController from "./controllers/shopping_listController.js";
// import * as single_shopping_listController from "./controllers/single_shopping_listController.js";
// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const handleRequest = async (request) => {
//   const url = new URL(request.url);

//   if (url.pathname === "/" && request.method === "GET") {
//     return new Response(`Redirecting to /lists.`, {
//       status: 303,
//       headers: {
//         "Location": "/lists",
//       },
//     });
//   } else if (url.pathname === "/lists" && request.method === "POST") {
//     return await shopping_listController.addshopping_list(request);
//   } else if (url.pathname === "/lists" && request.method === "GET") {
//     return await shopping_listController.viewshopping_lists(request);
//   } else if (url.pathname.includes("deactivate") && request.method === "POST") {
//     return await shopping_listController.desactivate_shopping_list(request);
//   } else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
//     return await shopping_listController.viewshopping_list(request);
//   } else if (url.pathname === "lists/[0-9]+/items" && request.method === "POST") {
//     return await single_shopping_listController.addItem(request);
//   } else {
//     return new Response("Not found", { status: 404 });
//   }
// };

// serve(handleRequest, { port: 7777 });

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { configure } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as shopping_listController from "./controllers/shopping_listController.js";
import * as single_shopping_listController from "./controllers/single_shopping_listController.js";
import * as requestUtils from "./utils/requestUtils.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/" && request.method === "GET") {
    return requestUtils.redirectTo("/lists");
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await shopping_listController.addshopping_list(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await shopping_listController.viewshopping_lists(request);
  } else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
    return await shopping_listController.viewsignle_shopping_list(request);
  } else if(url.pathname === "/lists/[0-9]+/items" && request.method === "POST"){
    return await single_shopping_listController.addItem(request);
  } else if (url.pathname === "/lists/[0-9]+/items" && request.method === "GET"){
    return await shopping_listController.viewsignle_shopping_list(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};
serve(handleRequest, { port: 7777 });