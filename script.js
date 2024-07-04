const loginForm = document.getElementById('login-form');
const socialButtons = document.querySelectorAll('.social-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

function showPopup() {
  popup.style.display = 'flex';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  showPopup();
});

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();
  showPopup();
});

socialButtons.forEach(button => {
  button.addEventListener('click', showPopup);
});

closePopup.addEventListener('click', function() {
  popup.style.display = 'none';
});
