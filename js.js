// Product Data with VND prices
const products = [
  {
    id: 1,
    name: "Denim Jacket",
    category: "Women's Clothing",
    price: 649740,
    originalPrice: 1559740,
    image:
      "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    tag: "Bestseller",
    condition: "Like New",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    category: "Women's Clothing",
    price: 519740,
    originalPrice: 1170000,
    image:
      "https://plus.unsplash.com/premium_photo-1723914108893-ac3047a4f1df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    tag: "New Arrival",
    condition: "Excellent",
  },
  {
    id: 3,
    name: "Men's Casual Blazer",
    category: "Men's Clothing",
    price: 909740,
    originalPrice: 2339740,
    image:
      "https://images.unsplash.com/photo-1740710748146-a15d840d6f40?q=80&w=798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3,
    tag: "Sale",
    condition: "Good",
  },
  {
    id: 4,
    name: "Leather Ankle Boots",
    category: "Accessories",
    price: 1105000,
    originalPrice: 3120000,
    image:
      "https://plus.unsplash.com/premium_photo-1673367751742-c8bb4902be75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    tag: "Limited",
    condition: "Excellent",
  },
  {
    id: 5,
    name: "Kids' Dinosaur Hoodie",
    category: "Kids & Babies",
    price: 389740,
    originalPrice: 857740,
    image:
      "https://plus.unsplash.com/premium_photo-1726804936616-9fea71911942?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    tag: "Bestseller",
    condition: "Like New",
  },
  {
    id: 6,
    name: "Vintage Graphic Tee",
    category: "Men's Clothing",
    price: 337740,
    originalPrice: 675740,
    image:
      "https://images.unsplash.com/photo-1759941279446-dea2722bca33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmludGFnZSUyMGdyYXBoaWMlMjB0ZWV8ZW58MHx8MHx8fDA%3D",
    rating: 4.2,
    tag: "Sale",
    condition: "Good",
  },
  {
    id: 7,
    name: "Knit Cardigan Sweater",
    category: "Women's Clothing",
    price: 597740,
    originalPrice: 1430000,
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/lead-michelle-freepeoplesweater-cnnu-4.jpg?c=16x9&q=h_833,w_1480,c_fill",
    rating: 4.6,
    tag: "New Arrival",
    condition: "Excellent",
  },
  {
    id: 8,
    name: "Designer Handbag",
    category: "Accessories",
    price: 1559740,
    originalPrice: 5199740,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    tag: "Luxury",
    condition: "Like New",
  },
];

// Cart Data with VND prices
let cart = [
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 519740,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 6,
    name: "Vintage Graphic Tee",
    price: 337740,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quantity: 2,
  },
];

// DOM Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
const cartIcon = document.getElementById("cartIcon");
const cartModal = document.getElementById("cartModal");
const closeCart = document.querySelector(".close-cart");
const cartItemsContainer = document.querySelector(".cart-items");
const totalPriceElement = document.querySelector(".total-price");
const productsContainer = document.querySelector(".products");
const cartCount = document.querySelector(".cart-count");
const startSellingBtn = document.getElementById("startSellingBtn");
const modalOverlay = document.createElement("div");

// Initialize the modal overlay
modalOverlay.className = "modal-overlay";
document.body.appendChild(modalOverlay);

// Display Products
function displayProducts() {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // Calculate savings percentage
    const savings = Math.round(
      (1 - product.price / product.originalPrice) * 100
    );

    // Create rating stars
    let ratingStars = "";
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      ratingStars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
      ratingStars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < emptyStars; i++) {
      ratingStars += '<i class="far fa-star"></i>';
    }

    // Format price for VND
    const formatPrice = (price) => {
      return price.toLocaleString("vi-VN") + "₫";
    };

    productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${
              product.image
            }')">
                <span class="product-tag">${product.tag}</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${ratingStars} <span>(${product.rating})</span>
                </div>
                <div class="product-price">
                    <span class="original-price">${formatPrice(
                      product.originalPrice
                    )}</span>
                    ${formatPrice(product.price)}
                    <span class="savings">Save ${savings}%</span>
                </div>
                <p><strong>Condition:</strong> ${product.condition}</p>
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

    productsContainer.appendChild(productCard);
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

// Add to Cart Function
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (!product) return;

  // Check if product is already in cart
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  updateCart();
  showNotification(`${product.name} added to cart!`);
}

// Save for Later Function
function saveForLater(productId) {
  const product = products.find((p) => p.id === productId);

  if (!product) return;

  const button = document.querySelector(
    `.save-for-later[data-id="${productId}"]`
  );

  // Toggle the heart icon
  if (button.innerHTML.includes("far fa-heart")) {
    button.innerHTML = '<i class="fas fa-heart"></i>';
    button.style.color = "#e76f51";
    showNotification(`${product.name} saved for later!`);
  } else {
    button.innerHTML = '<i class="far fa-heart"></i>';
    button.style.color = "";
  }
}

// Update Cart Display
function updateCart() {
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items display
  cartItemsContainer.innerHTML = "";

  let totalPrice = 0;

  // Format price for VND
  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + "₫";
  };

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <div class="cart-item-img" style="background-image: url('${
              item.image
            }')"></div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)} × ${
      item.quantity
    }</div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <i class="fas fa-times"></i>
            </button>
        `;

    cartItemsContainer.appendChild(cartItem);
  });

  // Add event listeners to remove buttons
  document.querySelectorAll(".cart-item-remove").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });

  // Update total price
  totalPriceElement.textContent = formatPrice(totalPrice);

  // If cart is empty, show message
  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p style="text-align: center; color: var(--gray);">Your cart is empty</p>';
  }
}

// Remove from Cart Function
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
  showNotification("Item removed from cart");
}

// Show Notification
function showNotification(message) {
  // Create notification element
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

  // Add CSS for animations
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Toggle Mobile Menu
mobileMenuBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  modalOverlay.classList.toggle("active");

  // Change icon based on menu state
  if (mobileNav.classList.contains("active")) {
    this.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    this.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Toggle Cart Modal
cartIcon.addEventListener("click", function () {
  cartModal.classList.add("active");
  modalOverlay.classList.add("active");
});

closeCart.addEventListener("click", function () {
  cartModal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

// Close modals when clicking on overlay
modalOverlay.addEventListener("click", function () {
  cartModal.classList.remove("active");
  mobileNav.classList.remove("active");
  modalOverlay.classList.remove("active");

  // Reset mobile menu button icon
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
});

// Start Selling Button
startSellingBtn.addEventListener("click", function () {
  // Create a simple form modal
  const sellModal = document.createElement("div");
  sellModal.className = "sell-form-modal";
  sellModal.innerHTML = `
        <div class="sell-form-content">
            <div class="sell-form-header">
                <h3>Start Selling Your Items</h3>
                <span class="close-sell-form">&times;</span>
            </div>
            <div class="sell-form-body">
                <p>Fill out this form and we'll send you a free shipping kit to get started!</p>
                <form id="sellForm">
                    <div class="form-group">
                        <label for="sellerName">Full Name</label>
                        <input type="text" id="sellerName" required>
                    </div>
                    <div class="form-group">
                        <label for="sellerEmail">Email Address</label>
                        <input type="email" id="sellerEmail" required>
                    </div>
                    <div class="form-group">
                        <label for="itemType">What type of items do you want to sell?</label>
                        <select id="itemType" required>
                            <option value="">Select category</option>
                            <option value="womens">Women's Clothing</option>
                            <option value="mens">Men's Clothing</option>
                            <option value="kids">Kids & Babies</option>
                            <option value="accessories">Accessories</option>
                            <option value="mix">Mix of items</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="itemCount">Approximately how many items?</label>
                        <input type="number" id="itemCount" min="1" max="100" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit & Get Shipping Kit</button>
                </form>
            </div>
        </div>
    `;

  // Add CSS for the modal
  const sellModalStyle = document.createElement("style");
  sellModalStyle.textContent = `
        .sell-form-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1004;
        }
        
        .sell-form-content {
            background-color: white;
            width: 90%;
            max-width: 500px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
        }
        
        .sell-form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: var(--primary);
            color: white;
        }
        
        .sell-form-header h3 {
            margin: 0;
            color: white;
        }
        
        .close-sell-form {
            font-size: 28px;
            cursor: pointer;
        }
        
        .sell-form-body {
            padding: 20px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .form-group input, .form-group select {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--light-gray);
            border-radius: var(--border-radius);
            font-family: 'Poppins', sans-serif;
        }
    `;

  document.head.appendChild(sellModalStyle);
  document.body.appendChild(sellModal);

  // Close button functionality
  const closeBtn = sellModal.querySelector(".close-sell-form");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(sellModal);
    document.head.removeChild(sellModalStyle);
  });

  // Form submission
  const sellForm = document.getElementById("sellForm");
  sellForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const sellerName = document.getElementById("sellerName").value;
    const sellerEmail = document.getElementById("sellerEmail").value;

    showNotification(
      `Thanks ${sellerName}! We'll email your shipping kit to ${sellerEmail} within 24 hours.`
    );

    // Close the modal
    document.body.removeChild(sellModal);
    document.head.removeChild(sellModalStyle);
  });

  // Close modal when clicking outside
  sellModal.addEventListener("click", function (e) {
    if (e.target === sellModal) {
      document.body.removeChild(sellModal);
      document.head.removeChild(sellModalStyle);
    }
  });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (email) {
      showNotification(`Thank you for subscribing with ${email}!`);
      emailInput.value = "";
    }
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  displayProducts();
  updateCart();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        mobileNav.classList.remove("active");
        modalOverlay.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
