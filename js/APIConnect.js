async function listProducts() {
  const connection = await fetch("http://localhost:3001/products");
  const parsedConnection = connection.json();
  console.log(parsedConnection);
  return parsedConnection;
}

async function uploadProduct(title, price, image) {
  const connection = await fetch("http://localhost:3001/products", {
    method:"POST",
    headers:{"Content-type":"application/json"},
    body: JSON.stringify({
      title:title,
      price:price,
      image:image
    })
  });
  const parsedConnection = connection.json();
  return parsedConnection;
}

export const APIConnect = {
  listProducts, uploadProduct
}
