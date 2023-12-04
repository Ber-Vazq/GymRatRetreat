// usertoadmin.js
document.addEventListener('DOMContentLoaded', function () {
  let isAdminMode = true;
  toggleAdminMode();

  function toggleAdminMode() {
    isAdminMode = !isAdminMode;

    const accountHeader = document.getElementById('account-header');
    const supportButton = document.getElementById('support-button');
    const paymentLink = document.getElementById('payment-button');
    const newItemLink = document.getElementById('new-item');
    const logoutButton = document.getElementById('logout-button');

    if (isAdminMode) {
      // Admin mode
      accountHeader.textContent = 'Admin Dashboard';
      supportButton.textContent = 'Support Tickets';
      supportButton.href = 'admin-support.html';
      paymentLink.style.display = 'none';
      newItemLink.style.display = '';
      logoutButton.textContent = 'Logout';
    } else {
      // User mode
      accountHeader.textContent = 'Welcome to Your Account';
      supportButton.textContent = 'Support';
      paymentLink.style.display = '';
      newItemLink.style.display = 'none';
      logoutButton.textContent = 'Logout';
    }

    if (isAdminMode) {
      paymentLink.textContent = 'Create New Item Listing';
      paymentLink.href = '#';
      newItemLink.href = 'create-item.html';
    } else {
      paymentLink.textContent = 'Payment Info';
      paymentLink.href = 'payment-info.html';
      newItemLink.href = '#';
    }
  }

  const toggleButton = document.getElementById('admin-toggle');
  toggleButton.addEventListener('click', toggleAdminMode);
});
