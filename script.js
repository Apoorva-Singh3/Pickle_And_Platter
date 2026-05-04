// const products = [
//   {name: "Royal Mango Pickle", category: "mango", price: 299},
//   {name: "Grandma Mixed Pickle", category: "mixed", price: 349},
//   {name: "Spicy Lemon Reserve", category: "spicy", price: 279},
//   {name: "Sweet Mango Delight", category: "sweet", price: 299},
//   {name: "Garlic Spice Blend", category: "spicy", price: 329},
//   {name: "Amla Heritage Pickle", category: "mixed", price: 289},
//   {name: "Chilli Fire Pickle", category: "spicy", price: 319},
//   {name: "Sweet Lime Classic", category: "sweet", price: 299}
// ];

// const productList = document.getElementById("product-list");
// let cartCount = 0;

// function renderProducts(filter = "all") {
//   productList.innerHTML = "";
//   const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

//   filtered.forEach(p => {
//     const div = document.createElement("div");
//     div.classList.add("product");
//     div.innerHTML = `
//       <img src="https://via.placeholder.com/300x200">
//       <div class="product-content">
//         <h4>${p.name}</h4>
//         <p>₹${p.price}</p>
//         <button onclick="addToCart()">Add to Cart</button>
//       </div>
//     `;
//     productList.appendChild(div);
//   });
// }
const products = [
  // Fruit-Based Indian Achaars
  {
    name: "Meetha Aam Achaar",
    category: "fruit-based-indian-achaar",
    price: 299,
    image: "images/Meetha Aam Achaar 1.png"
  },
  {
    name: "Kairi Lahsun Achaar",
    category: "fruit-based-indian-achaar",
    price: 329,
    image: "images/Kairi Lahsun Achaar.png"
  },
  {
    name: "Aam Gur Achaar",
    category: "fruit-based-indian-achaar",
    price: 349,
    image: "images/Aam Gur Achaar.png"
  },
  {
    name: "Chunda (Mango)",
    category: "fruit-based-indian-achaar",
    price: 319,
    image: "images/Chunda (mango).png"
  },
  {
    name: "Kaccha Aam Mustard Pickle",
    category: "fruit-based-indian-achaar",
    price: 339,
    image: "images/Kaccha Aam Mustard Pickle.png"
  },
  {
    name: "Amla Achaar",
    category: "fruit-based-indian-achaar",
    price: 289,
    image: "images/Amla Achaar.png"
  },
  {
    name: "Lemon Achaar",
    category: "fruit-based-indian-achaar",
    price: 279,
    image: "images/Lemon Achaar.png"
  },
  {
    name: "Sweet Lemon Pickle",
    category: "fruit-based-indian-achaar",
    price: 299,
    image: "images/Sweet Lemon Pickle.png"
  },
  {
    name: "Lime Chilli Pickle",
    category: "fruit-based-indian-achaar",
    price: 309,
    image: "images/Lime Chilli Pickle.png"
  },
  {
    name: "Jackfruit Pickle (Kathal)",
    category: "fruit-based-indian-achaar",
    price: 359,
    image: "images/Jackfruit Pickle (Kathal).png"
  },
  {
    name: "Karonda Pickle",
    category: "fruit-based-indian-achaar",
    price: 329,
    image: "images/Karonda Pickle.png"
  },
  {
    name: "Tamarind Pickle",
    category: "fruit-based-indian-achaar",
    price: 299,
    image: "images/Tamarind Pickle.png"
  },
  {
    name: "Sweet Tamarind Achaar",
    category: "fruit-based-indian-achaar",
    price: 319,
    image: "images/Sweet Tamarind Achaar.png"
  },

  // Indian Chutneys
  {
    name: "Green Chilli Lehsun Chutney",
    category: "indian-chutneys",
    price: 199,
    image: "images/Green chilli lehsun chutney.png"
  },
  {
    name: "Sweet Lemon Chutney",
    category: "indian-chutneys",
    price: 219,
    image: "images/Sweet lemon chutney.png"
  },
  {
    name: "Mango Chutney",
    category: "indian-chutneys",
    price: 229,
    image: "images/Mango chutney.png"
  },
  {
    name: "Jimikanda Chutney",
    category: "indian-chutneys",
    price: 239,
    image: "images/Jimikanda chutney.png"
  },
  {
    name: "Tomato Chutney",
    category: "indian-chutneys",
    price: 199,
    image: "images/Tomato chutney.png"
  },
  {
    name: "Red Chilli Chutney (Dry Thecha)",
    category: "indian-chutneys",
    price: 249,
    image: "images/Red chilli chutney(dry thecha).png"
  },
  {
    name: "Sweet Amla Chutney",
    category: "indian-chutneys",
    price: 229,
    image: "images/Sweet amla chutney.png"
  },

  // Healthy Bites
  {
    name: "Amla Laddu",
    category: "healthy-bites",
    price: 249,
    image: "images/Amla laddu.png"
  },
  {
    name: "Sukha Amla Bites",
    category: "healthy-bites",
    price: 219,
    image: "images/Sukha amla bites.png"
  },
  {
    name: "Seed Laddu",
    category: "healthy-bites",
    price: 299,
    image: "images/Seed laddu(pumpkin,chia,flax sunflower seeds).png"
  },
  {
    name: "Dry Fruits Laddu",
    category: "healthy-bites",
    price: 349,
    image: "images/Dry fruits laddu.png"
  },
  {
    name: "Spiced Turmeric Powder <br><span class='prepaid-note'>(Buknu)</span>",
    category: "healthy-bites",
    price: 189,
    image: "images/Spiced turmeric powder(buknu).png"
  },

  // Non-Vegetarian Indian Achaar
  {
    name: "Prawn Pickle <br><span class='prepaid-note'>(on prepaid orders)</span>",
    category: "non-vegetarian-achaar",
    price: 499,
    image: "images/Prawn Pickle.png"
  },
  {
    name: "Chicken Pickle <br><span class='prepaid-note'>(on prepaid orders)</span>",
    category: "non-vegetarian-achaar",
    price: 449,
    image: "images/Chicken Pickle.png"
  }
];

const productList = document.getElementById("product-list");
let cartCount = 0;

function renderProducts(filter = "all") {
  productList.innerHTML = "";

  const filtered =
    filter === "all"
      ? products
      : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    const div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">      
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