// Event Handling
document.getElementById('change-text-btn').addEventListener('click', () => {
  alert('Button clicked!');
});

document.getElementById('hover-box').addEventListener('mouseover', () => {
  document.getElementById('hover-box').style.backgroundColor = 'lightgreen';
});

document.getElementById('keypress-input').addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

document.getElementById('secret-action-btn').addEventListener('dblclick', () => {
  alert('Double-click detected!');
});

// Interactive Elements
document.getElementById('color-change-btn').addEventListener('click', () => {
  document.getElementById('color-change-btn').style.backgroundColor = 'purple';
});

const images = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300/FF0000',
  'https://via.placeholder.com/300/00FF00',
];
let currentImageIndex = 0;

document.getElementById('next-img-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('gallery-img').src = images[currentImageIndex];
});

document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const tabNumber = e.target.dataset.tab;
    document.querySelectorAll('.tab-content').forEach((content) => {
      content.classList.add('hidden');
    });
    document.getElementById(`tab-content-${tabNumber}`).classList.remove('hidden');
  });
});

// Form Validation
document.getElementById('validation-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let valid = true;

  if (!email.includes('@')) {
    document.getElementById('email-error').classList.remove('hidden');
    valid = false;
  } else {
    document.getElementById('email-error').classList.add('hidden');
  }

  if (password.length < 8) {
    document.getElementById('password-error').classList.remove('hidden');
    valid = false;
  } else {
    document.getElementById('password-error').classList.add('hidden');
  }

  if (valid) {
    alert('Form submitted successfully!');
  }
});