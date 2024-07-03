import { APIConnect, uploadProduct } from "./APIConnect";
const form = document.querySelector("[data-form]");

async function createListing(event) {

  event.preventDefault();
  const title = document.querySelector("[data-title]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  await APIConnect.uploadProduct(title, price, image);
}

form.addEventListener("submit", e => createListing(e));
