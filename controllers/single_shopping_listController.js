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

  await single_shopping_listService.create_item(name,urlParts[2]);
  
  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const viewItems_signle_shopping_list = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const data = {
    items: await single_shopping_listService.findAllNonCollectedItems(urlParts[2]),
    collected_items : await single_shopping_listService.findAllCollectedItems(urlParts[2]),
    current_signle_shopping_list: await single_shopping_listService.findCurrentShoppingList(urlParts[2]),

  };

  return new Response(await renderFile("single_shopping_list.eta", data), responseDetails);
};

const collectItem = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await single_shopping_listService.collect_item(urlParts[4]);

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};



export { addItem, viewItems_signle_shopping_list, collectItem};
