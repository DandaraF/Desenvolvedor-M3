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
  const teste = products.map((produto, index) => {
    return `
    <div class="card-product">
      <img class="img-product" src=".${produto.image}"/>
      <p class="name-product">${produto.name}</p>
      <p class="price-product">R$ ${produto.price}</p>
      <p class="share">até ${produto.parcelamento[0]}x de R${produto.parcelamento[1]}</p>
      <button class="btn-buy">COMPRAR</button> 
    </div>

    `;
  });
  document.querySelector(".container-products").innerHTML = teste.join("");
}

listProducts();
