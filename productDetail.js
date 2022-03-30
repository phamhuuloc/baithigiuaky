var product = JSON.parse(window.localStorage.getItem("productDatail"));
console.log(product);
document.body.innerHTML = `
 <div class="product">
      <div class="img">
        <img
          src="${product.img}"
          alt=""
        />
      </div>
      <div class="product-info">
        <h2 class="title">${product.name}</h2>
        <h3 class="author">Author: ${product.author}</h3>
        <p class="price">Price: ${product.price}</p>
      </div>
    </div>
    <div class="desc">
      <h1>Description</h1>
      <p>${product.introduce} </p>
    </div>
 
`;
