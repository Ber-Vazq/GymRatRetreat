document.addEventListener('DOMContentLoaded', function () {
  fetch('products.json')
    .then((response) => response.json())
    .then((data) => {
      const shoppingCart = document.getElementById('shopping-cart');

      let totalPrice = 0;

      data.forEach((item) => {
        const cartListItem = document.createElement('div');
        cartListItem.classList.add('cart-items');

        cartListItem.innerHTML = `
              <div class="image-box">
                  <img src="${item.imgDirectory}" style="height: 120px;">
              </div>
              <div>
                  <h1 class="title">${item.name}</h1>
                  <h3 class="subtitle">${item.category}</h3>
              </div>
              <div class="counter">
                  <button class="btn">+</button>1<button class="btn">-</button>
              </div>
              <div>
                  ${item.price}<br>
                  <u>Save For Later</u><br>
                  <u>Remove</u><br>
              </div>
            `;

        if (item.inCart == 1) {
          shoppingCart.appendChild(cartListItem);
          totalPrice += parseFloat(item.price);
        }
      });

      let totalDiv = document.getElementById('total-div');
      if (!totalDiv) {
        totalDiv = document.createElement('div');
        totalDiv.id = 'total-div';
        document.body.appendChild(totalDiv);
      }

      totalDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
    })
    .catch((error) => console.error('Error fetching data:', error));
});
