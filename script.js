// ===== HEADER & FOOTER INCLUDE =====

function loadHeaderFooter() {
  const header = `
    <header class="navbar">
      <div class="logo">Pickle & Platter</div>

      <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="index.html#shop">Shop</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>

      <div class="nav-right">
        <div class="cart cart-icon" onclick="openCart()">🛒<span id="cart-count">0</span></div>
        <div class="menu-toggle">☰</div>
      </div>
    </header>
  `;

  const footer = `
    <footer>      
      <div class="footer-links">
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
        <a href="terms.html">Terms & Conditions</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="refund.html">Refund Policy</a>
        <a href="shipping.html">Shipping Policy</a>
        <a href="disclaimer.html">Disclaimer</a>
      </div>
    </footer>
  `;

  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;
}

function loadHero() {
  const page = window.location.pathname.split("/").pop();

  let title = "Zindagi Mein Thoda Achaar Dalo";
  let subtitle = "Handcrafted pickles made with tradition & love";
  let showButton = true;

  // Page-wise customization
  if (page === "about.html") {
    title = "About Us";
    subtitle = "Know our story & tradition";
    showButton = false;
  }

  if (page === "contact.html") {
    title = "Contact Us";
    subtitle = "We’d love to hear from you";
    showButton = false;
  }

  if (page === "terms.html") {
    title = "Terms & Conditions";
    subtitle = "Please read carefully";
    showButton = false;
  }

  if (page === "privacy.html") {
    title = "Privacy Policy";
    subtitle = "Your privacy and data security matter to us";
    showButton = false;
  }

  if (page === "refund.html") {
    title = "Refund Policy";
    subtitle = "Our return guidelines";
    showButton = false;
  }

  if (page === "shipping.html") {
    title = "Shipping Policy";
    subtitle = "Delivery information";
    showButton = false;
  }

  if (page === "disclaimer.html") {
    title = "Disclaimer";
    subtitle = "Important information";
    showButton = false;
  }

  const hero = `
    <section class="hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <img
          src="images/Pickle_&_Platter_Logo_1.jpg"
          alt="Pickle and Platter Logo"
          class="hero-logo"
        />

        <h1>${title}</h1>
        <p>${subtitle}</p>

        ${showButton
      ? `<button onclick="scrollToShop()">Shop Now</button>`
      : `<a href="index.html#shop"><button>Shop Now</button></a>`
    }
      </div>
    </section>
  `;

  document.getElementById("hero").innerHTML = hero;
}

const products = [
  // Fruit-Based Indian Achaars
  {
    name: "Meetha Aam Achaar",
    category: "fruit-based-indian-achaar",
    // price: 299,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Meetha Aam Achaar 1.png"
  },
  {
    name: "Kairi Lahsun Achaar",
    category: "fruit-based-indian-achaar",
    // price: 329,
    sizes: [
      { size: "100g", price: 180 },
      { size: "250g", price: 450 },
      { size: "500g", price: 750 }
    ],
    image: "images/Kairi Lahsun Achaar.png"
  },
  {
    name: "Aam Gur Achaar",
    category: "fruit-based-indian-achaar",
    // price: 349,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Aam Gur Achaar.png"
  },
  {
    name: "Chunda (Mango)",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 300 },
      { size: "500g", price: 500 }
    ],
    image: "images/Chunda (mango).png"
  },
  {
    name: "Kaccha Aam Mustard Pickle",
    category: "fruit-based-indian-achaar",
    // price: 339,
    sizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 300 },
      { size: "500g", price: 500 }
    ],
    image: "images/Kaccha Aam Mustard Pickle.png"
  },
  {
    name: "Amla Achaar",
    category: "fruit-based-indian-achaar",
    // price: 289,
    sizes: [
      { size: "100g", price: 180 },
      { size: "250g", price: 450 },
      { size: "500g", price: 750 }
    ],
    image: "images/Amla Achaar.png"
  },
  {
    name: "Lemon Achaar",
    category: "fruit-based-indian-achaar",
    // price: 279,
    sizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 300 },
      { size: "500g", price: 500 }
    ],
    image: "images/Lemon Achaar.png"
  },
  {
    name: "Sweet Lemon Pickle",
    category: "fruit-based-indian-achaar",
    // price: 299,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Sweet Lemon Pickle.png"
  },
  {
    name: "Lime Chilli Pickle",
    category: "fruit-based-indian-achaar",
    // price: 309,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Lime Chilli Pickle.png"
  },
  {
    name: "Jackfruit Pickle (Kathal)",
    category: "fruit-based-indian-achaar",
    // price: 359,
    sizes: [
      { size: "100g", price: 180 },
      { size: "250g", price: 450 },
      { size: "500g", price: 750 }
    ],
    image: "images/Jackfruit Pickle (Kathal).png"
  },
  {
    name: "Karonda Pickle",
    category: "fruit-based-indian-achaar",
    // price: 329,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Karonda Pickle.png"
  },
  {
    name: "Tamarind Pickle",
    category: "fruit-based-indian-achaar",
    // price: 299,
    sizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 300 },
      { size: "500g", price: 500 }
    ],
    image: "images/Tamarind Pickle.png"
  },
  {
    name: "Sweet Tamarind Achaar",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Sweet Tamarind Achaar.png"
  },

  // Indian Chutneys
  {
    name: "Green Chilli Lehsun Chutney",
    category: "indian-chutneys",
    // price: 199,
    sizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 300 },
      { size: "500g", price: 500 }
    ],
    image: "images/Green chilli lehsun chutney.png"
  },
  {
    name: "Sweet Lemon Chutney",
    category: "indian-chutneys",
    // price: 219,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Sweet lemon chutney.png"
  },
  {
    name: "Mango Chutney",
    category: "indian-chutneys",
    // price: 229,
    sizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 300 },
      { size: "500g", price: 500 }
    ],
    image: "images/Mango chutney.png"
  },
  {
    name: "Jimikanda Chutney",
    category: "indian-chutneys",
    // price: 239,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Jimikanda chutney.png"
  },
  {
    name: "Tomato Chutney",
    category: "indian-chutneys",
    // price: 199,
    sizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 300 },
      { size: "500g", price: 500 }
    ],
    image: "images/Tomato chutney.png"
  },
  {
    name: "Red Chilli Chutney (Dry Thecha)",
    category: "indian-chutneys",
    // price: 249,
    sizes: [
      { size: "100g", price: 180 },
      { size: "250g", price: 450 },
      { size: "500g", price: 750 }
    ],
    image: "images/Red chilli chutney(dry thecha).png"
  },
  {
    name: "Sweet Amla Chutney",
    category: "indian-chutneys",
    // price: 229,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 360 },
      { size: "500g", price: 600 }
    ],
    image: "images/Sweet amla chutney.png"
  },

  // Healthy Bites
  {
    name: "Amla Laddu",
    category: "healthy-bites",
    // price: 249,
    sizes: [
      { size: "100g", price: 240 },
      { size: "250g", price: 600 },
      { size: "500g", price: 1000 }
    ],
    image: "images/Amla laddu.png"
  },
  {
    name: "Sukha Amla Bites",
    category: "healthy-bites",
    // price: 219,
    sizes: [
      { size: "100g", price: 180 },
      { size: "250g", price: 450 },
      { size: "500g", price: 750 }
    ],
    image: "images/Sukha amla bites.png"
  },
  {
    name: "Seed Laddu",
    category: "healthy-bites",
    // price: 299,
    sizes: [
      { size: "100g", price: 240 },
      { size: "250g", price: 600 },
      { size: "500g", price: 1000 }
    ],
    image: "images/Seed laddu(pumpkin,chia,flax sunflower seeds).png"
  },
  {
    name: "Dry Fruits Laddu",
    category: "healthy-bites",
    // price: 349,
    sizes: [
      { size: "100g", price: 450 },
      { size: "250g", price: 1050 },
      { size: "500g", price: 1800 }
    ],
    image: "images/Dry fruits laddu.png"
  },
  {
    name: "Spiced Turmeric Powder <br><span class='prepaid-note'>(Buknu)</span>",
    category: "healthy-bites",
    // price: 189,
    sizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 300 },
      { size: "500g", price: 500 }
    ],
    image: "images/Spiced turmeric powder(buknu).png"
  },

  // Non-Vegetarian Indian Achaar
  {
    name: "Prawn Pickle <br><span class='prepaid-note'>(on prepaid orders)</span>",
    category: "non-vegetarian-achaar",
    // price: 499,
    sizes: [
      { size: "100g", price: 450 },
      { size: "250g", price: 1050 },
      { size: "500g", price: 1800 }
    ],
    image: "images/Prawn Pickle.png"
  },
  {
    name: "Chicken Pickle <br><span class='prepaid-note'>(on prepaid orders)</span>",
    category: "non-vegetarian-achaar",
    // price: 449,
    sizes: [
      { size: "100g", price: 360 },
      { size: "250g", price: 900 },
      { size: "500g", price: 1500 }
    ],
    image: "images/Chicken Pickle.png"
  }
];

let selectedProduct = null;

let selectedSizeIndex = 0;

let quantity = 1;

const productList = document.getElementById("product-list");
let cartCount = 0;
let cart = [];

function renderProducts(filter = "all") {

  productList.innerHTML = "";

  const filtered =
    filter === "all"
      ? products
      : products.filter(p => p.category === filter);

  filtered.forEach((p, index) => {

    const startingPrice = p.sizes[0].price;

    const div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">

      <div class="product-content">

        <h4>${p.name}</h4>

        <p>Starting from ₹${startingPrice}</p>

        <button onclick="openModal(${index})">
          Customize
        </button>

      </div>
    `;

    productList.appendChild(div);
  });
}

function openModal(index) {

  selectedProduct = products[index];

  selectedSizeIndex = 0;

  quantity = 1;

  document.getElementById("qty").innerText = quantity;

  document.getElementById("modal-image").src =
    selectedProduct.image;

  document.getElementById("modal-title").innerHTML =
    selectedProduct.name;

  const sizeOptions =
    document.getElementById("size-options");

  sizeOptions.innerHTML = "";

  selectedProduct.sizes.forEach((s, i) => {

    const div = document.createElement("div");

    div.classList.add("size-option");

    if (i === 0) {
      div.classList.add("active");
    }

    div.innerHTML = `
      <span>${s.size}</span>
      <strong>₹${s.price}</strong>
    `;

    div.onclick = () => selectSize(i);

    sizeOptions.appendChild(div);
  });

  document
    .getElementById("modal-overlay")
    .classList.add("show");
}

function closeModal() {

  document
    .getElementById("modal-overlay")
    .classList.remove("show");
}

function selectSize(index) {

  selectedSizeIndex = index;

  document
    .querySelectorAll(".size-option")
    .forEach((el, i) => {

      el.classList.toggle(
        "active",
        i === index
      );
    });
}

function changeQty(change) {

  quantity += change;

  if (quantity < 1) {
    quantity = 1;
  }

  document.getElementById("qty").innerText =
    quantity;
}

function confirmAddToCart() {

  const sizeData =
    selectedProduct.sizes[selectedSizeIndex];

  const cartItem = {

    id: Date.now(),

    name: selectedProduct.name,

    image: selectedProduct.image,

    size: sizeData.size,

    price: sizeData.price,

    quantity: quantity
  };

  cart.push(cartItem);

  updateCartUI();

  closeModal();

  // openCart();
}

function updateCartUI() {

  const cartItems =
    document.getElementById("cart-items");

  const cartCountEl =
    document.getElementById("cart-count");

  const cartTotalEl =
    document.getElementById("cart-total");

  cartItems.innerHTML = "";

  let total = 0;

  let totalItems = 0;

  if(cart.length === 0){

    cartItems.innerHTML = `
      <div class="empty-cart">
        Your cart is empty
      </div>
    `;

    cartTotalEl.innerText = "₹0";

    cartCountEl.innerText = "0";

    return;
  }

  cart.forEach(item => {

    total += item.price * item.quantity;

    totalItems += item.quantity;

    const div = document.createElement("div");

    div.classList.add("cart-item");

    div.innerHTML = `

      <img src="${item.image}" alt="">

      <div class="cart-item-info">

        <h4>${item.name}</h4>

        <p>${item.size}</p>

        <div class="cart-item-price">
          ₹${item.price * item.quantity}
        </div>

        <div class="cart-qty">

          <button onclick="changeCartQty(${item.id}, -1)">
            −
          </button>

          <span>${item.quantity}</span>

          <button onclick="changeCartQty(${item.id}, 1)">
            +
          </button>

        </div>

      </div>
    `;

    cartItems.appendChild(div);
  });

  cartTotalEl.innerText = `₹${total}`;

  cartCountEl.innerText = totalItems;
}

function changeCartQty(id, change) {

  const item = cart.find(i => i.id === id);

  if(!item) return;

  item.quantity += change;

  if(item.quantity <= 0){

    cart = cart.filter(i => i.id !== id);
  }

  updateCartUI();
}

function openCart() {

  document
    .getElementById("cart-drawer")
    .classList.add("show");

  document
    .getElementById("cart-overlay")
    .classList.add("show");
}

function closeCart() {

  document
    .getElementById("cart-drawer")
    .classList.remove("show");

  document
    .getElementById("cart-overlay")
    .classList.remove("show");
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});

function scrollToShop() {
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter();
  loadHero();

  // MENU TOGGLE (after header loads)
  setTimeout(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.toggle("show");
      });
    }
  }, 100);

  // PRODUCTS ONLY ON HOME
  if (document.getElementById("product-list")) {
    renderProducts();
  }

  // FILTERS
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      btn.classList.add("active");
      renderProducts(btn.dataset.category);
    });
  });
});

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#8B1E1E";
    link.style.fontWeight = "600";
  }
});

