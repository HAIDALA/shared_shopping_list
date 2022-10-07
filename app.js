import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { configure } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as shopping_listController from "./controllers/shopping_listController.js";
import * as single_shopping_listController from "./controllers/single_shopping_listController.js";


configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/" && request.method === "GET") {
    return shopping_listController.countListsItems(request);
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await shopping_listController.addshopping_list(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await shopping_listController.viewshopping_lists(request);
  } else if(url.pathname.match("/lists/[0-9]+/items/[0-9]+/collect") && request.method === "POST"){
    return await single_shopping_listController.collectItem(request);
  } else if(url.pathname.match("/lists/[0-9]+/deactivate") && request.method === "POST"){
    return await shopping_listController.deactivateShopping_list(request);
  } else if(url.pathname.match("/lists/[0-9]+/items") && request.method === "POST"){
    return await single_shopping_listController.addItem(request);
  } else if (url.pathname.match("/lists/[0-9]+") && request.method === "GET"){
    return await single_shopping_listController.viewItems_signle_shopping_list(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};
let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}

serve(handleRequest, { port: port });




