const products = [
  {name: "Mango Pickle", category: "mango", price: 199},
  {name: "Mixed Pickle", category: "mixed", price: 249},
  {name: "Spicy Lemon", category: "spicy", price: 179},
  {name: "Sweet Mango", category: "sweet", price: 199},
  {name: "Garlic Pickle", category: "spicy", price: 229},
  {name: "Amla Pickle", category: "mixed", price: 189},
  {name: "Chilli Pickle", category: "spicy", price: 209},
  {name: "Sweet Lime", category: "sweet", price: 199}
];

const productList = document.getElementById("product-list");
let cartCount = 0;

function renderProducts(filter = "all") {
  productList.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="https://via.placeholder.com/200">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
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
  document.getElementById("shop").scrollIntoView({behavior: "smooth"});
}

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

renderProducts();