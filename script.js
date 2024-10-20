const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');
const maxChars = 200;

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;

  // Update the character counter
  counter.textContent = `${currentLength}/${maxChars} characters`;

  // Show or hide the warning message
  if (currentLength >= maxChars) {
    warning.classList.remove('hidden');
  } else {
    warning.classList.add('hidden');
  }
});
