var form = document.querySelector(".form");
var container = document.querySelector(".container");
var listProduct = [];
var showitem = {};
const addProduct = () => {
  var formData = new FormData(form);
  var info = {
    name: formData.get("bookName"),
    author: formData.get("authorName"),
    price: formData.get("price"),
    introduce: formData.get("introduce"),
    img: formData.get("img"),
  };
  listProduct.push(info);
  var list = listProduct.map((item, index) => {
    return `
     <li class="product-item">
          <img
            src="${item.img}"
          />
          <h1 class="product-name">${item.name}</h1>
          <h2 class="product-author">Author:${item.author}</h2>
          <p class="product-price">Price:${item.price}</p>
          <a class="desc-link" href="./productItem.html" onclick="getItem(${index})">Description</a>
        </li>

        `;
  });
  container.innerHTML = list.join("");
};
const getItem = (index) => {
  product = listProduct[index];
  window.localStorage.setItem("productDatail", JSON.stringify(product));
};

// console.log(listProduct);
const resetForm = () => {
  form.reset();
};
