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

const deactivateShopping_list = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await shopping_listService.deactivate_shopping_list(urlParts[2]);

  return requestUtils.redirectTo(`/lists`);
};

const countListsItems = async (request) => {
  const data = {
    count_lists: await shopping_listService.count_lists(),
    count_items: await shopping_listService.count_items(),
  };
  
  return new Response(await renderFile("main_page.eta", data), responseDetails);
};




export { addshopping_list, viewshopping_lists, deactivateShopping_list, countListsItems };
