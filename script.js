/* ===========================
   PICKLE & PLATTER – script.js
   =========================== */

// ===================== PRODUCT DATA =====================
const products = [
  {
    id: 1,
    name: "Raw Mango Achaar",
    category: "mango",
    desc: "Classic sun-dried raw mango pickle in mustard oil with 12 hand-ground spices.",
    price: 199,
    originalPrice: 249,
    badge: "Bestseller",
    badgeClass: "",
    rating: 4.8,
    reviews: 312,
    img: "https://images.unsplash.com/photo-1601493700631-2851bdbc9d0d?w=400&q=80",
  },
  {
    id: 2,
    name: "Aam Ka Meetha Achaar",
    category: "mango",
    desc: "Sweet & tangy mango pickle in jaggery — a perfect balance of sugar and spice.",
    price: 219,
    originalPrice: 270,
    badge: "New",
    badgeClass: "green",
    rating: 4.7,
    reviews: 185,
    img: "https://images.unsplash.com/photo-1571167366136-b57e40761c05?w=400&q=80",
  },
  {
    id: 3,
    name: "Nimbu Achaar",
    category: "lemon",
    desc: "Whole lemon pickle slow-cured with rock salt and aromatic spices. Zingy & bold.",
    price: 179,
    originalPrice: 220,
    badge: "Vegan",
    badgeClass: "green",
    rating: 4.6,
    reviews: 228,
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: 4,
    name: "Mirchi Ka Achaar",
    category: "chilli",
    desc: "Fiery green chilli pickle for those who love the heat. Extra spicy & crunchy.",
    price: 189,
    originalPrice: 230,
    badge: "🔥 Spicy",
    badgeClass: "",
    rating: 4.5,
    reviews: 143,
    img: "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?w=400&q=80",
  },
  {
    id: 5,
    name: "Gajar Gobhi Shalgam",
    category: "mixed",
    desc: "Winter special carrot, cauliflower & turnip pickle — a Punjab classic.",
    price: 229,
    originalPrice: 280,
    badge: "Seasonal",
    badgeClass: "amber",
    rating: 4.9,
    reviews: 404,
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
  },
  {
    id: 6,
    name: "Amla Achaar",
    category: "mixed",
    desc: "Vitamin C-rich Indian gooseberry pickle with immunity-boosting spices.",
    price: 209,
    originalPrice: 255,
    badge: "Healthy",
    badgeClass: "green",
    rating: 4.7,
    reviews: 197,
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
  },
  {
    id: 7,
    name: "Mango Combo Pack",
    category: "combo",
    desc: "Get our 3 bestselling mango achaar varieties in one great-value gift box.",
    price: 549,
    originalPrice: 699,
    badge: "Save 21%",
    badgeClass: "",
    rating: 4.9,
    reviews: 267,
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
  },
  {
    id: 8,
    name: "Festive Gift Pack",
    category: "combo",
    desc: "5 assorted achaar jars beautifully packaged — perfect for gifting loved ones.",
    price: 899,
    originalPrice: 1149,
    badge: "Gift Ready",
    badgeClass: "green",
    rating: 5.0,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80",
  },
  {
    id: 9,
    name: "Lehsun Achaar",
    category: "chilli",
    desc: "Slow-fermented garlic pickle that's pungent, spicy and deeply aromatic.",
    price: 199,
    originalPrice: 240,
    badge: null,
    badgeClass: "",
    rating: 4.6,
    reviews: 156,
    img: "https://images.unsplash.com/photo-1612502169027-5d9e5a2df6e1?w=400&q=80",
  },
];

// ===================== STATE =====================
let cart = JSON.parse(localStorage.getItem("pp_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("pp_wishlist") || "[]");
let currentFilter = "all";
let currentSort = "default";
let currentSearch = "";

// ===================== RENDER PRODUCTS =====================
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  const productCount = document.getElementById("productCount");

  let filtered = products.filter((p) => {
    const matchFilter = currentFilter === "all" || p.category === currentFilter;
    const matchSearch =
      !currentSearch ||
      p.name.toLowerCase().includes(currentSearch) ||
      p.desc.toLowerCase().includes(currentSearch) ||
      p.category.toLowerCase().includes(currentSearch);
    return matchFilter && matchSearch;
  });

  // Sorting
  if (currentSort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (currentSort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    productCount.textContent = "No products found";
    return;
  }

  noResults.style.display = "none";
  productCount.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? "s" : ""}`;

  filtered.forEach((product, i) => {
    const inWish = wishlist.includes(product.id);
    const cartItem = cart.find((c) => c.id === product.id);
    const qty = cartItem ? cartItem.qty : 0;
    const stars = renderStars(product.rating);

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.06}s`;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/FFF8F0/D93025?text=Pickle+%26+Platter'"/>
        ${product.badge ? `<span class="card-badge ${product.badgeClass}">${product.badge}</span>` : ""}
        <button class="wishlist-btn ${inWish ? "active" : ""}" onclick="toggleWishlist(${product.id}, this)" aria-label="Wishlist">
          ${inWish ? "♥" : "♡"}
        </button>
      </div>
      <div class="card-body">
        <p class="card-cat">${categoryLabel(product.category)}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.desc}</p>
        <div class="card-rating">
          <span class="stars-small">${stars}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-curr">₹${product.price}</span>
            <span class="price-orig">₹${product.originalPrice}</span>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            ${qty > 0 ? `In Cart (${qty})` : "Add to Cart"}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function categoryLabel(cat) {
  const labels = {
    mango: "Mango Achaar",
    mixed: "Mixed Achaar",
    lemon: "Lemon & Citrus",
    chilli: "Chilli & Spicy",
    combo: "Combo Pack",
  };
  return labels[cat] || cat;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = "★".repeat(full);
  if (half) s += "½";
  return s;
}

// ===================== FILTER =====================
document.querySelectorAll(".pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    currentFilter = pill.dataset.filter;
    renderProducts();
  });
});

// ===================== SORT =====================
function sortProducts() {
  currentSort = document.getElementById("sortSelect").value;
  renderProducts();
}

// ===================== SEARCH =====================
function filterProducts() {
  currentSearch = document.getElementById("searchInput").value.trim().toLowerCase();
  renderProducts();
}

document.getElementById("searchInput")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") filterProducts();
  if (e.key === "Escape") {
    currentSearch = "";
    document.getElementById("searchInput").value = "";
    renderProducts();
    toggleSearch();
  }
});

// ===================== WISHLIST =====================
function toggleWishlist(id, btn) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((w) => w !== id);
    btn.textContent = "♡";
    btn.classList.remove("active");
    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    btn.textContent = "♥";
    btn.classList.add("active");
    showToast("Added to wishlist ♥");
  }
  localStorage.setItem("pp_wishlist", JSON.stringify(wishlist));
}

// ===================== CART =====================
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  saveCart();
  renderProducts();
  updateCartCount();
  showToast(`${product.name} added to cart 🛒`);
}

function removeFromCart(id) {
  cart = cart.filter((c) => c.id !== id);
  saveCart();
  updateCartCount();
  renderCartDrawer();
  renderProducts();
}

function changeQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartCount();
  renderCartDrawer();
  renderProducts();
}

function saveCart() {
  localStorage.setItem("pp_cart", JSON.stringify(cart));
}

function updateCartCount() {
  const total = cart.reduce((sum, c) => sum + c.qty, 0);
  document.getElementById("cartCount").textContent = total;
}

function renderCartDrawer() {
  const cartItems = document.getElementById("cartItems");
  const cartFooter = document.getElementById("cartFooter");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    cartFooter.style.display = "none";
    return;
  }

  cartFooter.style.display = "block";
  let total = 0;

  cartItems.innerHTML = cart
    .map((c) => {
      const product = products.find((p) => p.id === c.id);
      if (!product) return "";
      total += product.price * c.qty;
      return `
        <div class="cart-item">
          <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/60x60/FFF8F0/D93025?text=P'"/>
          <div class="cart-item-info">
            <p class="cart-item-name">${product.name}</p>
            <p class="cart-item-price">₹${product.price} × ${c.qty} = ₹${product.price * c.qty}</p>
            <div class="cart-qty">
              <button class="qty-btn" onclick="changeQty(${c.id}, -1)">−</button>
              <span class="qty-num">${c.qty}</span>
              <button class="qty-btn" onclick="changeQty(${c.id}, 1)">+</button>
            </div>
          </div>
          <button class="remove-item" onclick="removeFromCart(${c.id})" aria-label="Remove">✕</button>
        </div>
      `;
    })
    .join("");

  cartTotal.textContent = `₹${total}`;
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  renderCartDrawer();
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}

document.getElementById("cartToggle").addEventListener("click", openCart);

// ===================== SEARCH TOGGLE =====================
function toggleSearch() {
  document.getElementById("searchBar").classList.toggle("open");
  if (document.getElementById("searchBar").classList.contains("open")) {
    setTimeout(() => document.getElementById("searchInput").focus(), 100);
  }
}

document.getElementById("searchToggle").addEventListener("click", toggleSearch);

// ===================== HAMBURGER =====================
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileNav").classList.toggle("open");
});

// ===================== NEWSLETTER =====================
function subscribeNewsletter(e) {
  e.preventDefault();
  const msg = document.getElementById("newsletterMsg");
  msg.textContent = "🎉 Thank you! Check your inbox for your 10% off code.";
  e.target.reset();
  setTimeout(() => (msg.textContent = ""), 5000);
}

// ===================== TOAST =====================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href="#products"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
});

// ===================== INIT =====================
renderProducts();
updateCartCount();
