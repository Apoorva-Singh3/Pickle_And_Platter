const products = [
  {name: "Royal Mango Pickle", category: "mango", price: 299},
  {name: "Grandma Mixed Pickle", category: "mixed", price: 349},
  {name: "Spicy Lemon Reserve", category: "spicy", price: 279},
  {name: "Sweet Mango Delight", category: "sweet", price: 299},
  {name: "Garlic Spice Blend", category: "spicy", price: 329},
  {name: "Amla Heritage Pickle", category: "mixed", price: 289},
  {name: "Chilli Fire Pickle", category: "spicy", price: 319},
  {name: "Sweet Lime Classic", category: "sweet", price: 299}
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
      <img src="https://via.placeholder.com/300x200">
      <div class="product-content">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
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