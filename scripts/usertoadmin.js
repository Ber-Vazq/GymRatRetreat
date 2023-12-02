// usertoadmin.js

let isAdminMode = false;

function toggleAdminMode() {
  isAdminMode = !isAdminMode;

  const accountHeader = document.getElementById("account-header");
  const supportButton = document.getElementById("support-button");
  const paymentButton = document.getElementById("payment-button");
  const logoutButton = document.getElementById("logout-button");

  if (isAdminMode) {
    // Admin mode
    accountHeader.textContent = "Admin Dashboard";
    supportButton.textContent = "Respond to Support Tickets";
    paymentButton.style.display = "none"; // Hide payment link in admin mode
    logoutButton.textContent = "Logout";
  } else {
    // User mode
    accountHeader.textContent = "Welcome to Your Account";
    supportButton.textContent = "Support";
    paymentButton.style.display = ""; // Show payment link in user mode
    logoutButton.textContent = "Logout";
  }
}

// Add event listener to the button with no specific ID
const toggleButton = document.getElementById("admin-toggle");
toggleButton.addEventListener("click", toggleAdminMode);
