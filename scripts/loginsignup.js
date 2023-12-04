document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('login-signup-header');
  const content = document.querySelector('.content');
  const usernameInput = document.querySelector(
    '.input-field input[type="text"]'
  );
  const emailInput = document.querySelector('.input-field input[type="email"]');
  const passwordInput = document.querySelector(
    '.input-field input[type="password"]'
  );
  const signUpButton = document.querySelector('.action button:nth-child(1)');
  const logInButton = document.querySelector('.action button:nth-child(2)');

  // Function to handle button click
  function handleButtonClick(event) {
    // Prevent form submission
    event.preventDefault();

    const clickedButton = event.target;

    header.textContent = clickedButton.textContent;

    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    if (clickedButton.textContent === 'Sign Up') {
      usernameInput.parentElement.style.display = 'block';
    } else {
      usernameInput.parentElement.style.display = 'none';
    }
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleButtonClick);

  // Attach event listener to the buttons
  signUpButton.addEventListener('click', handleButtonClick);
  logInButton.addEventListener('click', handleButtonClick);
});
