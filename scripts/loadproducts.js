document.addEventListener('DOMContentLoaded', function () {
  fetch('products.json')
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById('featured-items');
      const shoppingCart = document.getElementById('shopping-cart');

      data.forEach((item) => {
        // Create a new listItem element for each location
        const productListItem = document.createElement('div');
        productListItem.classList.add('item-listing');

        const cartListItem = document.createElement('div');
        cartListItem.classList.add('item-listing');

        productListItem.innerHTML = `
                  <img src="${item.imgDirectory}" alt="${item.name}" style="width:100%">
                  <h1>${item.name}</h1>
                  <p class="price">${item.price}</p>
                  <p><button class="default-button">Product Page</button></p>
              `;

        cartListItem.innerHTML = `
                  <img src="${item.imgDirectory}" alt="${item.name}" style="width:100%">
                  <h1>${item.name}</h1>
                  <p class="price">${item.price}</p>
                  <p><button class="default-button">Remove From Cart</button></p>
              `;

        if (item.isFeatured == 1) productList.appendChild(productListItem);

        if (item.inCart == 1) {
          shoppingCart.appendChild(cartListItem);
        }

        // Add click event listener to the "Product Page" button
        const productPageButton = productListItem.querySelector('button');
        productPageButton.addEventListener('click', function () {
          // Handle the opening of the product page
          openProductPage(item);
        });
      });
    })
    .catch((error) => console.error('Error fetching data:', error));

  function openProductPage(productDetails) {
    // Fetch the content of your existing HTML file
    fetch('product-page.html')
      .then((response) => response.text())
      .then((htmlContent) => {
        // Replace placeholders in the HTML content with actual product details
        htmlContent = htmlContent.replace(
          '{{productName}}',
          productDetails.name
        );
        htmlContent = htmlContent.replace(
          '{{productPrice}}',
          productDetails.price
        );
        htmlContent = htmlContent.replace(
          '{{productDescription}}',
          productDetails.description
        );
        htmlContent = htmlContent.replace(
          '{{productImage}}',
          productDetails.imgDirectory
        );

        // Open a new page with the dynamically created content
        const newPage = window.open('', '_blank');
        newPage.document.body.innerHTML = htmlContent;
      })
      .catch((error) => console.error('Error fetching HTML content:', error));
  }
});
