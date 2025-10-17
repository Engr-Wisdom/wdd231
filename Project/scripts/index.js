import {saveCarts, getCarts} from "./carts.js"

function toggleNavBar() {
  let navBar = document.getElementById("nav-bar");
  let menuBtn = document.getElementById("menu-btn");
  let removeBtn = document.getElementById("remove-btn");

  if (navBar) {
    menuBtn.addEventListener("click", () => {
      navBar.classList.toggle("show");
    });

    removeBtn.addEventListener("click", () => {
      navBar.classList.remove("show");
    });

    document.addEventListener("click", event => {
      if (!menuBtn.contains(event.target) && !navBar.contains(event.target)) {
        navBar.classList.remove("show");
      }
    });
  }
}

toggleNavBar();

let shopBtn = document.getElementById("shop-btn");
if (shopBtn) {
  shopBtn.addEventListener("click", () => {
    window.location.href = "./shop.html"
  });
}

// Displaying feature on page

function displayFeatures() {
  const features = [
    { img: "./images/shipping.png", name: "Free Shipping"}, 
    { img: "./images/order.png", name: "Online Order" },
    { img: "./images/save.png", name: "Save Money" },
    { img: "./images/promotions.png", name: "Promotions" },
    { img: "./images/sell.png", name: "Happy Sell" },
    { img: "./images/support.png", name: "F24/7 Support" },
  ];

  const featureCont = document.querySelector(".feature-cont");

  if (featureCont) {
    features.forEach((feature) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <img src="${feature.img}" alt="${feature.name}">
        <button>${feature.name}</button>
      `;
      featureCont.appendChild(div);
    });
  }
}

displayFeatures()

let carts = getCarts() || [];

function updateCartCount() {
  let cartCount = document.querySelector(".cart-count span")
  
  if (cartCount) {
    cartCount.textContent = carts.length;
  }
}

updateCartCount()

function addToCarts(product) {
  carts.unshift(product);
  saveCarts(carts);
  updateCartCount()
  console.log(carts)
}

// Creating product card function

export default function createProductCard(product) {
  let div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}" loading="lazy">
    <div>
      <p>${product.company}</p>
      <h4>${product.name}</h4>
      <p class="star">${product.star}</p>
      <div class="cart-cont">
        <p>${product.price}</p>
        <button class="cart-btn"><i class="fas fa-cart-shopping"></i></button>
      </div>
    </div>
  `;

  // div.addEventListener("click", () => {
  //   localStorage.clear();
  //   localStorage.setItem("selectedProduct", JSON.stringify(product));

  //   window.location.href = "./sproduct.html"
  // });
  
  let cartBtn = div.querySelector(".cart-btn");
  
  cartBtn.addEventListener("click", () => addToCarts(product))
  
  return div;
}


// Displaying Product on the page

function displayProduct(products) {
  const productCont = document.getElementById("product-cont");
  const discountCont = document.getElementById("discount-cont")

  products.forEach(product => {
    let card = createProductCard(product);
    
    if (!product.price.includes("off")) {
      productCont.appendChild(card)
    } else {
      discountCont.appendChild(card);
    }
  });  
}

// Fetching Product data from JSON

async function fetchProduct() {
  try {
    let response = await fetch("./JSON/products.json");
    
    if (!response.ok) {
      throw new Error("Could not fetch data from this resource")
    }

    let values = await response.json();
    displayProduct(values);

  } catch(error) {
    console.error(error)
  }
}

fetchProduct();