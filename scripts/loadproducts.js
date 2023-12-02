document.addEventListener("DOMContentLoaded", function() {
    fetch("products.json")
      .then(response => response.json())
      .then(data => {
  
        const productList = document.getElementById("featured-items");
        const shoppingCart = document.getElementById("shopping-cart")
  
        data.forEach(item => {
          // Create a new listItem element for each location
          const productListItem = document.createElement("div");
          productListItem.classList.add("item-listing");
  
          const cartListItem = document.createElement("div");
          cartListItem.classList.add("item-listing");
  
          productListItem.innerHTML = `
            <img src="${item.imgDirectory}" alt="${item.name}" style="width:100%">
            <h1>${item.name}</h1>
            <p class="price">${item.price}</p>
            <p><a href="product-page.html">Product Page</a></button></p>
          `;
  
          cartListItem.innerHTML = `
            <img src="${item.imgDirectory}" alt="${item.name}" style="width:100%">
            <h1>${item.name}</h1>
            <p class="price">${item.price}</p>
            <p><button class="default-button">Remove From Cart</button></p>
          `;
  
          if(item.isFeatured == 1)
          productList.appendChild(productListItem);
          if(item.inCart == 1)
          shoppingCart.appendChild(cartListItem);
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  });
  