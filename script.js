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

  const heroContainer =
    document.getElementById("hero");

  // STOP if page has no hero section
  if (!heroContainer) return;

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

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Meetha Aam Achaar 1.png"
  },
  {
    name: "Kairi Lahsun Achaar",
    category: "fruit-based-indian-achaar",
    // price: 329,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Kairi Lahsun Achaar.png"
  },
  {
    name: "Aam Gur Achaar",
    category: "fruit-based-indian-achaar",
    // price: 349,
    sizes: [

      { size: "100g", price: 170 },
      { size: "250g", price: 390 },
      { size: "500g", price: 700 }
    ],
    image: "images/Aam Gur Achaar.png"
  },
  {
    name: "Chunda (Mango)",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Chunda (mango).png"
  },
  {
    name: "Kaccha Aam Mustard Pickle",
    category: "fruit-based-indian-achaar",
    // price: 339,
    sizes: [

      { size: "100g", price: 150 },
      { size: "250g", price: 350 },
      { size: "500g", price: 620 }
    ],
    image: "images/Kaccha Aam Mustard Pickle.png"
  },
  {
    name: "Amla Achaar",
    category: "fruit-based-indian-achaar",
    // price: 289,
    sizes: [

      { size: "100g", price: 180 },
      { size: "250g", price: 420 },
      { size: "500g", price: 750 }
    ],
    image: "images/Amla Achaar.png"
  },
  {
    name: "Lemon Achaar",
    category: "fruit-based-indian-achaar",
    // price: 279,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Lemon Achaar.png"
  },
  {
    name: "Sweet Lemon Pickle",
    category: "fruit-based-indian-achaar",
    // price: 299,
    sizes: [

      { size: "100g", price: 170 },
      { size: "250g", price: 390 },
      { size: "500g", price: 700 }
    ],
    image: "images/Sweet Lemon Pickle.png"
  },
  {
    name: "Lime Chilli Pickle",
    category: "fruit-based-indian-achaar",
    // price: 309,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Lime Chilli Pickle.png"
  },
  {
    name: "Jackfruit Pickle (Kathal)",
    category: "fruit-based-indian-achaar",
    // price: 359,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 380 },
      { size: "500g", price: 680 }
    ],
    image: "images/Jackfruit Pickle (Kathal).png"
  },
  {
    name: "Karonda Pickle",
    category: "fruit-based-indian-achaar",
    // price: 329,
    sizes: [

      { size: "100g", price: 180 },
      { size: "250g", price: 420 },
      { size: "500g", price: 760 }
    ],
    image: "images/Karonda Pickle.png"
  },
  {
    name: "Tamarind Pickle",
    category: "fruit-based-indian-achaar",
    // price: 299,
    sizes: [

      { size: "100g", price: 170 },
      { size: "250g", price: 390 },
      { size: "500g", price: 700 }
    ],
    image: "images/Tamarind Pickle.png"
  },
  {
    name: "Sweet Tamarind Achaar",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 170 },
      { size: "250g", price: 390 },
      { size: "500g", price: 700 }
    ],
    image: "images/Sweet Tamarind Achaar.png"
  },
  {
    name: "Aloo-Semi Pickle",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 150 },
      { size: "250g", price: 350 },
      { size: "500g", price: 620 }
    ],
    image: "images/Aloo-Semi Pickle.png"
  },
  {
    name: "Semi Pickle",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 150 },
      { size: "250g", price: 350 },
      { size: "500g", price: 620 }
    ],
    image: "images/Semi Pickle.png"
  },
  {
    name: "Sooran (Jimikand Achaar)",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 170 },
      { size: "250g", price: 390 },
      { size: "500g", price: 700 }
    ],
    image: "images/Sooran (Jimikand Achaar).png"
  },
  {
    name: "Chanabhaji Pickle (Seasonal)",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 170 },
      { size: "250g", price: 390 },
      { size: "500g", price: 700 }
    ],
    image: "images/Chanabhaji Pickle (Seasonal).png"
  },
  {
    name: "Green Chana Achaar (Seasonal)",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 170 },
      { size: "250g", price: 390 },
      { size: "500g", price: 700 }
    ],
    image: "images/Green Chana Achaar (Seasonal).png"
  },
  {
    name: "Green Chilli Achaar",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 150 },
      { size: "250g", price: 340 },
      { size: "500g", price: 600 }
    ],
    image: "images/Green Chilli Achaar.png"
  },
  {
    name: "Bharwa Red Mirchi Pickle",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 180 },
      { size: "250g", price: 420 },
      { size: "500g", price: 760 }
    ],
    image: "images/Bharwa Red Mirchi Pickle.png"
  },
  {
    name: "Hari Mirch Lahsun Achaar",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Hari Mirch Lahsun Achaar.png"
  },
  {
    name: "Mixed Vegetable Achaar",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Mixed Vegetable Achaar.png"
  },
  {
    name: "Onion Pickle",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 150 },
      { size: "250g", price: 340 },
      { size: "500g", price: 600 }
    ],
    image: "images/Onion Pickle.png"
  },
  {
    name: "Raw Turmeric Achaar",
    category: "fruit-based-indian-achaar",
    // price: 319,
    sizes: [

      { size: "100g", price: 180 },
      { size: "250g", price: 420 },
      { size: "500g", price: 760 }
    ],
    image: "images/Raw Turmeric Achaar.png"
  },

  // Indian Chutneys
  {
    name: "Green Chilli Lehsun Chutney",
    category: "indian-chutneys",
    // price: 199,
    sizes: [

      { size: "100g", price: 150 },
      { size: "250g", price: 340 },
      { size: "500g", price: 600 }
    ],
    image: "images/Green chilli lehsun chutney.png"
  },
  {
    name: "Sweet Lemon Chutney",
    category: "indian-chutneys",
    // price: 219,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Sweet lemon chutney.png"
  },
  {
    name: "Mango Chutney",
    category: "indian-chutneys",
    // price: 229,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Mango chutney.png"
  },
  {
    name: "Jimikanda Chutney",
    category: "indian-chutneys",
    // price: 239,
    sizes: [

      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Jimikanda chutney.png"
  },
  {
    name: "Tomato Chutney",
    category: "indian-chutneys",
    // price: 199,
    sizes: [

      { size: "100g", price: 150 },
      { size: "250g", price: 340 },
      { size: "500g", price: 600 }
    ],
    image: "images/Tomato chutney.png"
  },
  {
    name: "Red Chilli Chutney (Dry Thecha)",
    category: "indian-chutneys",
    // price: 249,
    sizes: [

      { size: "100g", price: 150 },
      { size: "250g", price: 340 },
      { size: "500g", price: 600 }
    ],
    image: "images/Red chilli chutney(dry thecha).png"
  },
  {
    name: "Sweet Amla Chutney",
    category: "indian-chutneys",
    // price: 229,
    sizes: [

      { size: "100g", price: 170 },
      { size: "250g", price: 390 },
      { size: "500g", price: 700 }
    ],
    image: "images/Sweet amla chutney.png"
  },

  // Healthy Bites
  {
    name: "Amla Laddu",
    category: "healthy-bites",
    // price: 249,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 350 },
      { size: "500g", price: 600 }
    ],
    image: "images/Amla laddu.png"
  },
  {
    name: "Sukha Amla Bites",
    category: "healthy-bites",
    // price: 219,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 350 },
      { size: "500g", price: 600 }
    ],
    image: "images/Sukha amla bites.png"
  },
  {
    name: "Seed Laddu",
    category: "healthy-bites",
    // price: 299,
    sizes: [
      { size: "100g", price: 160 },
      { size: "250g", price: 370 },
      { size: "500g", price: 660 }
    ],
    image: "images/Seed laddu(pumpkin,chia,flax sunflower seeds).png"
  },
  {
    name: "Dry Fruits Laddu",
    category: "healthy-bites",
    // price: 349,
    sizes: [
      { size: "100g", price: 280 },
      { size: "250g", price: 640 },
      { size: "500g", price: 1080 }
    ],
    image: "images/Dry fruits laddu.png"
  },
  {
    name: "Spiced Turmeric Powder <br><span class='prepaid-note'>(Buknu)</span>",
    category: "healthy-bites",
    // price: 189,
    sizes: [
      { size: "100g", price: 150 },
      { size: "250g", price: 350 },
      { size: "500g", price: 600 }
    ],
    image: "images/Spiced turmeric powder(buknu).png"
  },

  // Non-Vegetarian Indian Achaar
  {
    // name: "Prawn Pickle <br><span class='prepaid-note'>(on prepaid orders)</span>",
    name: "Prawn Pickle",
    category: "non-vegetarian-achaar",
    // price: 499,
    sizes: [

      { size: "100g", price: 280 },
      { size: "250g", price: 640 },
      { size: "500g", price: 1080 }
    ],
    image: "images/Prawn Pickle.png"
  },
  {
    // name: "Chicken Pickle <br><span class='prepaid-note'>(on prepaid orders)</span>",
    name: "Chicken Pickle",
    category: "non-vegetarian-achaar",
    // price: 449,
    sizes: [

      { size: "100g", price: 260 },
      { size: "250g", price: 590 },
      { size: "500g", price: 1000 }
    ],
    image: "images/Chicken Pickle.png"
  }
];

let selectedProduct = null;

let selectedQuantities = {};

let selectedOil = "Coldpressed mustard oil";

let selectedSalt = "rocksalt(sendhanamak)";

const productList = document.getElementById("product-list");

let cart = JSON.parse(localStorage.getItem("pickleCart")) || [];

function saveCart() {
  localStorage.setItem(
    "pickleCart",
    JSON.stringify(cart)
  );
}

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

  selectedQuantities = {};

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

    div.innerHTML = `

      <div class="size-left">

        <h4>${s.size}</h4>

        <p>₹${s.price}</p>

      </div>

      <div class="size-qty">

        <button onclick="changeSizeQty(${i}, -1)">
          −
        </button>

        <span id="size-qty-${i}">0</span>

        <button onclick="changeSizeQty(${i}, 1)">
          +
        </button>

      </div>
    `;

    sizeOptions.appendChild(div);
  });

  updatePopupTotal();

  document
    .getElementById("modal-overlay")
    .classList.add("show");
}

function changeSizeQty(index, change) {

  if (!selectedQuantities[index]) {
    selectedQuantities[index] = 0;
  }

  selectedQuantities[index] += change;

  if (selectedQuantities[index] < 0) {
    selectedQuantities[index] = 0;
  }

  document.getElementById(
    `size-qty-${index}`
  ).innerText = selectedQuantities[index];

  updatePopupTotal();
}

function updatePopupTotal() {

  let total = 0;

  selectedProduct.sizes.forEach((s, i) => {

    const qty = selectedQuantities[i] || 0;

    total += qty * s.price;
  });

  document.getElementById(
    "popup-total"
  ).innerText = `₹${total}`;
}

function closeModal() {

  document
    .getElementById("modal-overlay")
    .classList.remove("show");
}

function confirmAddToCart() {

  selectedOil =
    document.querySelector('input[name="oil"]:checked').value;

  selectedSalt =
    document.querySelector('input[name="salt"]:checked').value;

  let addedSomething = false;

  selectedProduct.sizes.forEach((s, i) => {

    const qty = selectedQuantities[i] || 0;

    if (qty > 0) {

      addedSomething = true;

      // CHECK IF SAME CUSTOMIZATION ALREADY EXISTS

      const existingItem = cart.find(item =>

        item.name === selectedProduct.name &&
        item.size === s.size &&
        item.oil === selectedOil &&
        item.salt === selectedSalt
      );

      if (existingItem) {

        // increase quantity

        existingItem.quantity += qty;

      } else {

        // create new cart item

        const cartItem = {

          id: Date.now() + i,

          name: selectedProduct.name,

          image: selectedProduct.image,

          size: s.size,

          oil: selectedOil,

          salt: selectedSalt,

          price: s.price,

          quantity: qty
        };

        cart.push(cartItem);
      }
    }
  });

  if (!addedSomething) {

    alert("Please select at least 1 item");

    return;
  }

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

  let total = 0;
  let totalItems = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    totalItems += item.quantity;
  });

  // UPDATE ONLY HEADER COUNT
  if (cartCountEl) {
    cartCountEl.innerText = totalItems;
  }

  // STOP IF CART DRAWER DOESN'T EXIST
  if (!cartItems || !cartTotalEl) {
    return;
  }

  cartItems.innerHTML = "";

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        Your cart is empty
      </div>
    `;

    cartTotalEl.innerText = "₹0";

    return;
  }

  cart.forEach(item => {

    const div = document.createElement("div");

    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}" alt="">

      <div class="cart-item-info">

        <h4>${item.name}</h4>

        <p>${item.size}</p>

        <p>Oil: ${item.oil}</p>

        <p>Salt: ${item.salt}</p>

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

  // cartTotalEl.innerText = `₹${total}`;
  cartTotalEl.innerText =
    `₹${Math.round(total)}`;

  saveCart();

}

function changeCartQty(id, change) {

  const item = cart.find(i => i.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {

    cart = cart.filter(i => i.id !== id);
  }

  saveCart();

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

  renderOffers();

  // RESTORE CART

  const savedCart = localStorage.getItem("pickleCart");

  if (savedCart) {

    cart = JSON.parse(savedCart);
  }

  updateCartUI();

  console.log("RESTORED CART:", cart);

  // MENU TOGGLE

  setTimeout(() => {

    const menuToggle =
      document.querySelector(".menu-toggle");

    if (menuToggle) {

      menuToggle.addEventListener("click", () => {

        document
          .querySelector(".nav-links")
          .classList.toggle("show");
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

      document
        .querySelector(".active")
        ?.classList.remove("active");

      btn.classList.add("active");

      renderProducts(btn.dataset.category);
    });
  });

  // CHECKOUT PAGE

  renderCheckoutPage();

  setupCheckoutForm();

});

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#8B1E1E";
    link.style.fontWeight = "600";
  }
});

function goToCheckout() {

  if (cart.length === 0) {

    alert("Your cart is empty");

    return;
  }

  window.location.href = "checkout.html";
}

function renderCheckoutPage() {

  const checkoutItems =
    document.getElementById("checkout-items");

  const checkoutTotal =
    document.getElementById("checkout-total");

  if (!checkoutItems || !checkoutTotal) return;

  if (cart.length === 0) {

    checkoutItems.innerHTML = `
      <p>Your cart is empty</p>
    `;

    checkoutTotal.innerText = "₹0";

    return;
  }

  checkoutItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {

    total += item.price * item.quantity;

    const div = document.createElement("div");

    div.classList.add("checkout-item");

    div.innerHTML = `

      <img src="${item.image}" alt="">

      <div class="checkout-item-info">

        <h4>${item.name}</h4>

        <p>Size: ${item.size}</p>

        <p>Oil: ${item.oil}</p>

        <p>Salt: ${item.salt}</p>

        <p>Qty: ${item.quantity}</p>

        <div class="checkout-price">
          ₹${item.price * item.quantity}
        </div>

      </div>
    `;

    checkoutItems.appendChild(div);
  });

  checkoutTotal.innerText = `₹${total}`;
}

function setupCheckoutForm() {

  const form =
    document.getElementById("checkout-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const orderData = {

      customer: {
        name: document.getElementById("customer-name").value,
        phone: document.getElementById("customer-phone").value,
        email: document.getElementById("customer-email").value,
        address: document.getElementById("customer-address").value,
        city: document.getElementById("customer-city").value,
        pincode: document.getElementById("customer-pincode").value
      },

      items: cart,

      createdAt: new Date().toISOString()
    };

    console.log("ORDER DATA", orderData);

    alert("Order placed successfully!");

    cart = [];

    localStorage.removeItem("pickleCart");

    updateCartUI();

    window.location.href = "index.html";
  });
}

function renderOffers() {

  const container =
    document.getElementById("offers-container");

  if (!container) return;

  container.innerHTML = "";

  sampleOffers.forEach(offer => {

    const div = document.createElement("div");

    div.classList.add("offer-card");

    div.innerHTML = `

      <h3>${offer.title}</h3>

      <p>
        Choose any ${offer.quantityRequired}
        products of ${offer.size} sample jars.
      </p>

      <div class="offer-price">
        ₹${offer.offerPrice}
      </div>

    `;

    container.appendChild(div);

  });
}

// function openSampleBox(quantity, price) {

//   const sampleItem = {

//     id: Date.now(),

//     name: `${quantity} Sample Jars Box`,

//     image: "images/Pickle_&_Platter_Logo.jpeg",

//     size: "50g Sample Combo",

//     oil: "Custom",

//     salt: "Custom",

//     price: price,

//     quantity: 1
//   };

//   cart.push(sampleItem);

//   updateCartUI();

//   alert(`${quantity} Sample Jar Box added to cart`);
// }

let sampleBoxQty = 0;

let sampleBoxPrice = 0;

let selectedSampleProducts = [];

function openSampleBox(qty, price) {

  sampleBoxQty = qty;

  sampleBoxPrice = price;

  selectedSampleProducts = [];

  document
    .getElementById("sample-modal-overlay")
    .classList.add("show");

  document.getElementById(
    "sample-modal-title"
  ).innerText =
    `Create Your ${qty} Jar Sample Box`;

  renderSampleProducts();

  updateSamplePreview();
}

function closeSampleModal() {

  document
    .getElementById("sample-modal-overlay")
    .classList.remove("show");
}

function renderSampleProducts() {

  const container =
    document.getElementById("sample-products-list");

  container.innerHTML = "";

  products.forEach(product => {

    const div = document.createElement("div");

    div.classList.add("sample-product-card");

    div.onclick = () =>
      toggleSampleProduct(product, div);

    div.innerHTML = `
      <img src="${product.image}" alt="">

      <h4>${product.name}</h4>
    `;

    container.appendChild(div);
  });
}

// function toggleSampleProduct(product, element) {

//   const exists =
//     selectedSampleProducts.find(
//       p => p.name === product.name
//     );

//   if (exists) {

//     selectedSampleProducts =
//       selectedSampleProducts.filter(
//         p => p.name !== product.name
//       );

//     element.classList.remove("active");

//   } else {

//     if (
//       selectedSampleProducts.length >= sampleBoxQty
//     ) {

//       alert(
//         `You can only select ${sampleBoxQty} flavours`
//       );

//       return;
//     }

//     selectedSampleProducts.push(product);

//     element.classList.add("active");
//   }

//   updateSamplePreview();
// }

function toggleSampleProduct(product) {

  const existingIndex =
    selectedSampleProducts.findIndex(
      p => p.name === product.name
    );

  // REMOVE IF ALREADY SELECTED

  if (existingIndex > -1) {

    selectedSampleProducts.splice(existingIndex, 1);

  } else {

    // LIMIT SELECTION

    if (selectedSampleProducts.length >= currentSampleOffer.qty) {

      alert(
        `You can only choose ${currentSampleOffer.qty} jars`
      );

      return;
    }

    selectedSampleProducts.push(product);
  }

  renderSelectedPreview();

  renderSampleProducts();
}

function renderSelectedPreview() {

  const preview =
    document.getElementById("selected-sample-preview");

  preview.innerHTML = "";

  if (selectedSampleProducts.length === 0) {

    preview.innerHTML = `
      <p>No flavours selected yet</p>
    `;

    return;
  }

  selectedSampleProducts.forEach((product, index) => {

    const div = document.createElement("div");

    div.classList.add("preview-jar");

    div.innerHTML = `

      <button
        class="remove-preview-btn"
        onclick="removeSampleProduct(${index})"
      >
        ×
      </button>

      <img src="${product.image}" alt="">

      <p>${product.name}</p>
    `;

    preview.appendChild(div);
  });
}

function removeSampleProduct(index) {

  selectedSampleProducts.splice(index, 1);

  renderSelectedPreview();

  renderSampleProducts();
}

function updateSamplePreview() {

  const preview =
    document.getElementById(
      "selected-sample-preview"
    );

  preview.innerHTML = "";

  selectedSampleProducts.forEach(product => {

    const div = document.createElement("div");

    div.classList.add("preview-jar");

    div.innerHTML = `
      <img src="${product.image}" alt="">
      <p>${product.name}</p>
    `;

    preview.appendChild(div);
  });

  document.getElementById(
    "sample-selection-count"
  ).innerText =
    `${selectedSampleProducts.length} / ${sampleBoxQty} Selected`;
}

function addSampleBoxToCart() {

  if (
    selectedSampleProducts.length !== sampleBoxQty
  ) {

    alert(
      `Please select exactly ${sampleBoxQty} flavours`
    );

    return;
  }

  const selectedOil =
    document.querySelector(
      'input[name="sample-oil"]:checked'
    ).value;

  const selectedSalt =
    document.querySelector(
      'input[name="sample-salt"]:checked'
    ).value;

  const cartItem = {

    id: Date.now(),

    name:
      `${sampleBoxQty} Sample Jars Box`,

    image:
      selectedSampleProducts[0].image,

    size: "50g Sample Combo",

    oil: selectedOil,

    salt: selectedSalt,

    price: sampleBoxPrice,

    quantity: 1,

    flavours:
      selectedSampleProducts.map(
        p => p.name
      )
  };

  cart.push(cartItem);

  updateCartUI();

  closeSampleModal();

  alert("Sample box added to cart");
}