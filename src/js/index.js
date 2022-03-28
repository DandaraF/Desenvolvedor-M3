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
  const product = products.map((produto, index) => {
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
  document.querySelector(".container-products").innerHTML = product.join("");
}

function FilterColors() {
  colors = ["Amarelo", "Azul", "Branco", "Cinza", "Laranja", "Verde", "Vermelho", "Preto", "Rosa", "Vinho"];
  const color = colors.map((color, index)=>{
    return `
    <div id="checkbox-colors" class="checkbox">
      <div class="item-checkbox" id=${index}>
        <input class="input-checkbox" type="checkbox" id=${color} name=${color}" value=${color}>
        <label class="label-checkbox world-capitalize" for=${color}>${color} </label>
      </div> 
    </div>
    `;
    
  });
  document.querySelector("#itens-colors").innerHTML = color.join("");
  document.querySelector("#colors").innerHTML = color.join("");
}


listProducts();
FilterColors();
