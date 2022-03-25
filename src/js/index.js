function requestProducts() {
  const url = "http://localhost:5000/products";
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function getAllProducts() {
  data = requestProducts();
  products = JSON.parse(data);
  return products;
}
function replaceSeparator(price) {
  return price.toString().replace(".", ",");
}

function listProducts() {
  products = getAllProducts();
  const teste = products.map((produto, index) => {
    return `
      <div class="card-product" ${index}>
        <img class="img-product" src=".${produto.image}"/>
        <p class="name-product">${produto.name}</p>
        <div class="container-price">
        <p class="price-product">R$ ${replaceSeparator(
          produto.price.toFixed(2)
        )}</p>
        <p class="share">até ${
          produto.parcelamento[0]
        }x de R$${replaceSeparator(produto.parcelamento[1].toFixed(2))}</p>
      </div>
        <button class="btn-buy">COMPRAR</button>
      </div>


    `;
  });
  console.log(products);
  document.querySelector(".container-products").innerHTML = teste.join("");
}

listProducts();
