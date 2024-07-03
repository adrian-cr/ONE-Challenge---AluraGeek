import { APIConnect } from "./APIConnect.js"

const listings = document.querySelector("[data-listings]");

function createCard(title, price, imgSrc) {
  const listing = document.createElement("li");
  listing.className = "listing-card";
  listing.innerHTML = `
    <img src="${imgSrc}">
    <div class="listing-info-wrapper">
      <h3 class="listing-title">${title}</h3>
      <h4 class="listing-price">${price}</h4>
      <i class="fa fa-trash" aria-hidden="true"></i>
    </div>
  `;
  return listing;
}

async function list() {
  const APIList = await APIConnect.listProducts();
  console.log(APIList);
  APIList.forEach(e => {
    listings.appendChild(createCard(e.title, e.price, e.image))
  });
}

list();
