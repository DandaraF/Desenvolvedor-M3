// console.log("Dev m3");

function requestProducts() {
  const url = "http://localhost:5000/products";
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function getProducts() {
  data = requestProducts();
  products = JSON.parse(data);
  return products;
}

function listProducts() {
  products = getProducts();
  console.log(products);
  const teste = products.map((produto, index) => {
    return `
    <div class="card-product">
      <img class="img-product" src=".${produto.image}"/>
      <p class="name-product">${produto.name}</p>
      <p class="price-product">R$ ${replaceSeparator(
        produto.price.toFixed(2)
      )}</p>
      <p class="share">até ${produto.parcelamento[0]}x de R$${replaceSeparator(
      produto.parcelamento[1].toFixed(2)
    )}</p>
      <button class="btn-buy">COMPRAR</button> 
    </div>

    `;
  });
  document.querySelector(".container-products").innerHTML = teste.join("");
}

function replaceSeparator(price) {
  return price.toString().replace(".", ",");
}

listProducts();
