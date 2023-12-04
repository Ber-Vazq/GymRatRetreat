document.addEventListener('DOMContentLoaded', function () {
  fetch('products.json')
    .then((response) => response.json())
    .then((data) => {
      const searchResults = document.getElementById('search-results');

      data.forEach((item) => {
        const tableItem = document.createElement('tr');

        tableItem.innerHTML = `
                    <td><img src="${item.imgDirectory}" /></td>
                    <td>${item.price}</td>
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                `;

        tableItem.setAttribute('data-product-name', item.name);
        searchResults.appendChild(tableItem);
      });

      initializeDataTable();

      searchResults.addEventListener('click', function (event) {
        const clickedRow = event.target.closest('tr');

        if (clickedRow) {
          const productName = clickedRow.getAttribute('data-product-name');

          const productDetails = data.find((item) => item.name === productName);

          openProductPage(productDetails);
        }
      });
    })
    .catch((error) => console.error('Error fetching data:', error));

  function openProductPage(productDetails) {
    // Assume productDetails contains information like product name, price, category, etc.

    // Create a new page
    const newPage = window.open('', '_blank');

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
          '{{productCategory}}',
          productDetails.category
        );
        htmlContent = htmlContent.replace(
          '{{productImage}}',
          productDetails.imgDirectory
        );
        htmlContent = htmlContent.replace(
          '{{productDescription}}',
          productDetails.description
        );
        // Write the modified HTML content into the new window
        newPage.document.body.innerHTML = htmlContent;
      })
      .catch((error) => console.error('Error fetching HTML content:', error));
  }
});

function initializeDataTable() {
  var dataTable = new DataTable('#search-table');

  // Use event delegation for dynamically added elements
  $(document).on('change', '#category-filter', function () {
      var selectedCategory = $(this).val();

      dataTable.column(3).search(selectedCategory).draw();
  });
}