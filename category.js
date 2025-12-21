// Category-specific product data with VND prices
const menProducts = [
  {
    id: 101,
    name: "Classic Denim Jacket",
    price: 909740,
    originalPrice: 2079740,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Like New",
    size: "M",
    category: "jackets",
  },
  {
    id: 102,
    name: "Casual Button-Down Shirt",
    price: 519740,
    originalPrice: 1170000,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    size: "L",
    category: "shirts",
  },
  {
    id: 103,
    name: "Slim Fit Chinos",
    price: 585000,
    originalPrice: 1430000,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Good",
    size: "32",
    category: "pants",
  },
  {
    id: 104,
    name: "Wool Blend Sweater",
    price: 753740,
    originalPrice: 1950000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhYc-kTjn2_Sj62YVpff2xk6aUH6KrJj5yA&s",
    condition: "Like New",
    size: "XL",
    category: "sweaters",
  },
  {
    id: 105,
    name: "Leather Casual Shoes",
    price: 1117740,
    originalPrice: 3120000,
    image:
      "https://thursdayboots.com/cdn/shop/products/1024x1024-Men-Premier-LowTop-Toffee-062922-Flatlay1.jpg?v=1656709015&width=1024",
    condition: "Excellent",
    size: "10",
    category: "shoes",
  },
  {
    id: 106,
    name: "Vintage Graphic Tee",
    price: 389740,
    originalPrice: 910000,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Good",
    size: "M",
    category: "shirts",
  },
];

const womenProducts = [
  {
    id: 201,
    name: "Floral Summer Dress",
    price: 649740,
    originalPrice: 1690000,
    image:
      "https://images.unsplash.com/photo-1517970640957-23d07d5ed08c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxvcmFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
    condition: "Like New",
    size: "S",
    category: "dresses",
  },
  {
    id: 202,
    name: "Knit Cardigan",
    price: 597740,
    originalPrice: 1430000,
    image:
      "https://plus.unsplash.com/premium_photo-1727427849915-c13d406bf86a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    condition: "Excellent",
    size: "M",
    category: "sweaters",
  },
  {
    id: 203,
    name: "High-Waisted Jeans",
    price: 779740,
    originalPrice: 2080000,
    image:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amVhbnN8ZW58MHx8MHx8fDA%3D",
    condition: "Good",
    size: "28",
    category: "pants",
  },
  {
    id: 204,
    name: "Silk Blouse",
    price: 493740,
    originalPrice: 1300000,
    image:
      "https://www.thymeclothing.com.au/wp-content/uploads/2021/09/SS21-BL039_2000x-scaled.jpeg",
    condition: "Like New",
    size: "XS",
    category: "tops",
  },
  {
    id: 205,
    name: "Leather Ankle Boots",
    price: 1039740,
    originalPrice: 3120000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1LNFRuq3bjBAX-eJ9dGvcvNqsmIGz0tOKA&s",
    condition: "Excellent",
    size: "7",
    category: "shoes",
  },
  {
    id: 206,
    name: "Midi Skirt",
    price: 441740,
    originalPrice: 1170000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6lkM_4fRqBl3kw5HjoBvl9SeMaOIHFvorg&s",
    condition: "Good",
    size: "M",
    category: "skirts",
  },
];

const kidProducts = [
  {
    id: 301,
    name: "Kids' Dinosaur Hoodie",
    price: 337740,
    originalPrice: 857740,
    image:
      "https://plus.unsplash.com/premium_photo-1726804936616-9fea71911942?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    condition: "Like New",
    age: "3-5Y",
    category: "sets",
  },
  {
    id: 302,
    name: "Baby Onesie Set",
    price: 233740,
    originalPrice: 650000,
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    age: "0-3M",
    category: "sets",
  },
  {
    id: 303,
    name: "Girls' Floral Dress",
    price: 389740,
    originalPrice: 1040000,
    image:
      "https://plus.unsplash.com/premium_photo-1683147722874-73c83b637a47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    condition: "Good",
    age: "5-12Y",
    category: "dresses",
  },
  {
    id: 304,
    name: "Boys' Cargo Pants",
    price: 259740,
    originalPrice: 728000,
    image:
      "https://www.westside.com/cdn/shop/files/301002945BEIGE_1.jpg?v=1735897588",
    condition: "Like New",
    age: "3-5Y",
    category: "bottoms",
  },
  {
    id: 305,
    name: "Toddler Jacket",
    price: 311740,
    originalPrice: 910000,
    image:
      "https://truly.co.uk/cdn/shop/products/TRULY-LIFESTYLE-NAVY-PADDED-BABY-COAT-ON-MODEL-WITH-GREY-LEGGINS.jpg?v=1755010006&width=1500",
    condition: "Excellent",
    age: "1-3Y",
    category: "outerwear",
  },
  {
    id: 306,
    name: "Kids' Graphic Tee",
    price: 181740,
    originalPrice: 520000,
    image:
      "https://ph-live-01.slatic.net/p/99df459999bb8f30c087b7833eab4cd5.jpg",
    condition: "Good",
    age: "5-12Y",
    category: "tops",
  },
];

const accessoriesProducts = [
  {
    id: 401,
    name: "Leather Crossbody Bag",
    price: 909740,
    originalPrice: 3120000,
    image:
      "https://images.unsplash.com/photo-1718622795525-2295971921ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvc3Nib2R5JTIwYmFnfGVufDB8fDB8fHww",
    condition: "Like New",
    category: "bags",
  },
  {
    id: 402,
    name: "Silver Statement Necklace",
    price: 493740,
    originalPrice: 1690000,
    image:
      "https://plus.unsplash.com/premium_photo-1673285096761-79e49ff5b760?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    condition: "Excellent",
    category: "jewelry",
  },
  {
    id: 403,
    name: "Wool Scarf",
    price: 389740,
    originalPrice: 1170000,
    image:
      "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    condition: "Good",
    category: "scarves",
  },
  {
    id: 404,
    name: "Designer Sunglasses",
    price: 779740,
    originalPrice: 3900000,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Like New",
    category: "sunglasses",
  },
  {
    id: 405,
    name: "Leather Belt",
    price: 337740,
    originalPrice: 1040000,
    image:
      "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    condition: "Excellent",
    category: "belts",
  },
  {
    id: 406,
    name: "Canvas Tote Bag",
    price: 441740,
    originalPrice: 1300000,
    image:
      "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    condition: "Good",
    category: "bags",
  },
];

// Get current page category
function getCurrentCategory() {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  switch (page) {
    case "men.html":
      return "men";
    case "women.html":
      return "women";
    case "kid.html":
      return "kid";
    case "accessories.html":
      return "accessories";
    default:
      return "men";
  }
}

// Display category products
function displayCategoryProducts() {
  const category = getCurrentCategory();
  const productsGrid = document.getElementById("productsGrid");

  if (!productsGrid) return;

  let products = [];
  switch (category) {
    case "men":
      products = menProducts;
      break;
    case "women":
      products = womenProducts;
      break;
    case "kid":
      products = kidProducts;
      break;
    case "accessories":
      products = accessoriesProducts;
      break;
  }

  productsGrid.innerHTML = "";

  // Format price for VND
  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + "₫";
  };

  products.forEach((product) => {
    const savings = Math.round(
      (1 - product.price / product.originalPrice) * 100
    );

    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${
              product.image
            }')">
                <span class="product-tag">Save ${savings}%</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="original-price">${formatPrice(
                      product.originalPrice
                    )}</span>
                    ${formatPrice(product.price)}
                </div>
                <p><strong>Condition:</strong> ${product.condition}</p>
                ${
                  product.size
                    ? `<p><strong>Size:</strong> ${product.size}</p>`
                    : ""
                }
                ${
                  product.age
                    ? `<p><strong>Age:</strong> ${product.age}</p>`
                    : ""
                }
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${
                      product.id
                    }">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                    <button class="btn save-for-later" data-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `;

    productsGrid.appendChild(productCard);
  });

  // Add event listeners to Add to Cart buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      addToCart(productId);
    });
  });

  // Add event listeners to Save for Later buttons
  document.querySelectorAll(".save-for-later").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      saveForLater(productId);
    });
  });
}

// Category page initialization
document.addEventListener("DOMContentLoaded", function () {
  // Only run on category pages
  if (document.querySelector(".category-page")) {
    displayCategoryProducts();

    // Filter functionality
    const applyFiltersBtn = document.querySelector(".apply-filters");
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", function () {
        showNotification("Filters applied!");
      });
    }

    // View options
    document.querySelectorAll(".view-option").forEach((button) => {
      button.addEventListener("click", function () {
        document
          .querySelectorAll(".view-option")
          .forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        const view = this.getAttribute("data-view");
        const productsGrid = document.getElementById("productsGrid");

        if (view === "list") {
          productsGrid.classList.add("list-view");
        } else {
          productsGrid.classList.remove("list-view");
        }
      });
    });

    // Size selection
    document.querySelectorAll(".size-option").forEach((option) => {
      option.addEventListener("click", function () {
        document
          .querySelectorAll(".size-option")
          .forEach((opt) => opt.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // Sort functionality
    const sortSelect = document.getElementById("sort");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        showNotification(`Sorted by: ${this.options[this.selectedIndex].text}`);
      });
    }
  }
});

// Helper functions
function addToCart(productId) {
  showNotification("Item added to cart!");
}

function saveForLater(productId) {
  const button = document.querySelector(
    `.save-for-later[data-id="${productId}"]`
  );

  if (button.innerHTML.includes("far fa-heart")) {
    button.innerHTML = '<i class="fas fa-heart"></i>';
    button.style.color = "#e76f51";
    showNotification("Item saved for later!");
  } else {
    button.innerHTML = '<i class="far fa-heart"></i>';
    button.style.color = "";
  }
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--primary);
        color: white;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        z-index: 1003;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}
