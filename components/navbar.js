document.addEventListener('DOMContentLoaded', function () {
  // Create a new div element
  var navbar = document.createElement('div');
  var parentElement = document.getElementById('navbar');

  // Add HTML content to the div
  navbar.innerHTML = `      
        <img id="logo" src="images/logo.png" width="200" height="150" />
        <ul class="main-nav">
            <li>
                <div class="search-container">
                    <input type="text" id="query"placeholder="Search For an Item.." name="search">
                    <button type="submit" onClick="submitForm()">Go</button>
                </div>
            </li>
            <li><a href="index.html">Home</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="dashboard.html">Dashboard</a></li>
            <li><a href="login.html">Login/Signup</a></li>
        </ul>
    `;

  parentElement.appendChild(navbar);
});
