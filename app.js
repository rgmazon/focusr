// Signup form — basic UX feedback only.
// Tracking code will be added here step by step.

const signupForm = document.getElementById('signupForm');
const formNote   = document.getElementById('formNote');

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formNote.textContent = '🎉 You\'re on the list! Check your inbox soon.';
  signupForm.reset();
  setTimeout(function() { formNote.textContent = ''; }, 4000);
});
