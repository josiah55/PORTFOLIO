//blog for React and Vue Js
  document.getElementById('frameworkPoll').addEventListener('submit', function(e) {
    e.preventDefault();
    const choice = document.querySelector('input[name="framework"]:checked').value;
    document.getElementById('poll-result').innerHTML = `<strong>Thanks for voting!</strong> You chose: <em>${choice}</em>`;
    document.getElementById('poll-result').style.display = 'block';
    this.style.display = 'none';
  });

//Time
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  timeElement.textContent = `Current Time: ${formattedTime}`;
  }
  
  // Initial call
  updateTime();
  // Update every second
setInterval(updateTime, 1000);


//carousel
const modal = document.getElementById('fullModal');
const carousel = document.getElementById('modalCarousel');

modal.addEventListener('show.bs.modal', function (event) {
  const trigger = event.relatedTarget;
  const slideTo = trigger.getAttribute('data-bs-slide-to');
  const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
  carouselInstance.to(parseInt(slideTo));
});


//search bar for photos on the AfricaVista
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('explore');
const items = itemList.getElementsByTagName('button');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();
    if (text.includes(filter)) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
});


//upload your photo
const uploadForm = document.getElementById('uploadForm');
const photoUpload = document.getElementById('photoUpload');
const previewContainer = document.getElementById('previewContainer');
const previewImage = document.getElementById('previewImage');

photoUpload.addEventListener('change', () => {
  const file = photoUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      previewImage.src = e.target.result;
      previewContainer.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("This is a demo upload. To make it work, connect to a backend.");
});


//business starter Placeholder JS for form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We'll get back to you soon.");
});


//ecommerce shop
document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  let cart = JSON.parse(localStorage.getItem('cart')) || {};

  function updateCartCount() {
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function addToCart(product) {
    const id = product.name; // Using name as key (you can add IDs later)
    if (cart[id]) {
      cart[id].quantity += 1;
    } else {
      cart[id] = {
        name: product.name,
        price: product.price,
        quantity: 1,
      };
    }
    saveCart();
    updateCartCount();
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const cardBody = button.closest('.card-body');
      const name = cardBody.querySelector('.card-title').textContent.trim();
      const priceText = cardBody.querySelector('.card-text.text-success').textContent.trim();
      const price = parseFloat(priceText.replace(/[^0-9.-]+/g, ''));

      addToCart({ name, price });
      alert(`${name} has been added to your cart.`);
    });
  });

  updateCartCount();
});


//Agency template
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const newsletterForm = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('✅ Thank you for contacting us! We will respond shortly.');
  form.reset();
});

//Resume template
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf'; // Make sure you have a resume.pdf in your project folder
  link.download = 'Emmy-John-Resume.pdf';
  link.click();
};


//Tech blog 
// Newsletter form submission handling
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('emailInput');
  const messageDiv = document.getElementById('newsletterMessage');

  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    messageDiv.textContent = 'Please enter a valid email address.';
    messageDiv.style.color = 'red';
    return;
  }

  // Simulate successful subscription
  messageDiv.textContent = 'Thank you for subscribing!';
  messageDiv.style.color = 'green';

  emailInput.value = '';
});

// Email validation function
function validateEmail(email) {
  // Basic email regex pattern
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Search form submission (example: alert with search term)
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const query = this.querySelector('input[type="search"]').value.trim();

  if (query) {
    alert(`Search function is under development. You searched for: "${query}"`);
  }
});


//form validation  
const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = form.name.value.trim();
    if (name.length < 2) {
      e.preventDefault();
      alert("Name is too short!");
    }
  });











