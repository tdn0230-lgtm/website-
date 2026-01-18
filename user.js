// ========== USER MANAGEMENT ==========

// Kiểm tra trạng thái đăng nhập
function checkLogin() {
  return localStorage.getItem("userLoggedIn") === "true";
}

// Lấy thông tin người dùng
function getUserInfo() {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  return {
    name: userData.fullName || "Người dùng",
    email: userData.email || "",
    firstName: userData.fullName ? userData.fullName.split(" ")[0] : "Khách",
  };
}

// Cập nhật giao diện người dùng
function updateUserUI() {
  const userIcon = document.getElementById("userIcon");
  if (!userIcon) return;

  const isLoggedIn = checkLogin();

  if (isLoggedIn) {
    const userInfo = getUserInfo();

    userIcon.innerHTML = `
      <div class="user-dropdown">
        <button class="user-dropdown-toggle" id="userDropdownToggle">
          <i class="fas fa-user-circle"></i>
          <span class="user-name">${userInfo.firstName}</span>
          <i class="fas fa-chevron-down dropdown-arrow"></i>
        </button>
        <div class="user-dropdown-menu" id="userDropdownMenu">
          <div class="dropdown-item">
            <i class="fas fa-user"></i>
            <span>Xin chào, ${userInfo.firstName}!</span>
          </div>
          <div class="dropdown-divider"></div>
          <a href="profile.html" class="dropdown-item">
            <i class="fas fa-user"></i>
            Tài khoản của tôi
          </a>
          <a href="orders.html" class="dropdown-item">
            <i class="fas fa-shopping-bag"></i>
            Đơn hàng
          </a>
          <a href="wishlist.html" class="dropdown-item">
            <i class="fas fa-heart"></i>
            Yêu thích
          </a>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item logout-btn" id="logoutBtn">
            <i class="fas fa-sign-out-alt"></i>
            Đăng xuất
          </button>
        </div>
      </div>
    `;

    // Thêm event listeners
    setupUserDropdown();
  } else {
    // Chưa đăng nhập
    userIcon.innerHTML = `
      <a href="login.html" class="user-login-link">
        <i class="fas fa-user"></i>
        <span class="login-text">Đăng nhập</span>
      </a>
    `;
  }
}

// Thiết lập dropdown user
function setupUserDropdown() {
  const dropdownToggle = document.getElementById("userDropdownToggle");
  const dropdownMenu = document.getElementById("userDropdownMenu");
  const logoutBtn = document.getElementById("logoutBtn");

  if (dropdownToggle && dropdownMenu) {
    // Toggle dropdown khi click
    dropdownToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle("show");
    });

    // Đóng dropdown khi click ra ngoài
    document.addEventListener("click", function (e) {
      if (
        !dropdownToggle.contains(e.target) &&
        !dropdownMenu.contains(e.target)
      ) {
        dropdownMenu.classList.remove("show");
      }
    });

    // Ngăn đóng dropdown khi click bên trong
    dropdownMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Xử lý đăng xuất
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
        logoutUser();
      }
    });
  }
}

// Đăng xuất người dùng
function logoutUser() {
  // Xóa thông tin đăng nhập
  localStorage.removeItem("userLoggedIn");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userData");

  // Xóa giỏ hàng của user
  const userInfo = getUserInfo();
  if (userInfo.email) {
    const cartKey = `cart_${userInfo.email}`;
    localStorage.removeItem(cartKey);
  }

  // Thông báo
  showNotification("Đăng xuất thành công!");

  // Cập nhật giao diện ngay lập tức
  updateUserUI();
  updateCartDisplay();

  // Chuyển hướng về trang chủ sau 1 giây
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

// Cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
  const cartIcon = document.getElementById("cartIcon");
  const cartCount = document.querySelector(".cart-count");

  if (!cartIcon || !cartCount) return;

  const isLoggedIn = checkLogin();

  if (isLoggedIn) {
    // Load cart items
    const userInfo = getUserInfo();
    const cartKey = `cart_${userInfo.email}`;
    const savedCart = localStorage.getItem(cartKey);
    let cartItems = [];

    if (savedCart) {
      try {
        cartItems = JSON.parse(savedCart);
      } catch (e) {
        cartItems = [];
      }
    }

    // Tính tổng số lượng
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Cập nhật số lượng
    if (totalItems > 0) {
      cartCount.textContent = totalItems;
      cartCount.style.display = "flex";
    } else {
      cartCount.textContent = "0";
      cartCount.style.display = "none";
    }

    // Bật chức năng giỏ hàng
    cartIcon.style.opacity = "1";
    cartIcon.style.pointerEvents = "auto";
    cartIcon.title = "";
  } else {
    // Chưa đăng nhập
    cartCount.textContent = "0";
    cartCount.style.display = "none";
    cartIcon.style.opacity = "0.5";
    cartIcon.style.pointerEvents = "none";
    cartIcon.title = "Vui lòng đăng nhập để xem giỏ hàng";
  }
}

// Hiển thị thông báo
function showNotification(message) {
  // Remove existing notifications
  document.querySelectorAll(".notification").forEach((notification) => {
    notification.remove();
  });

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

  // Add CSS for animations if not exists
  if (!document.querySelector("style[data-notification]")) {
    const style = document.createElement("style");
    style.setAttribute("data-notification", "true");
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
  }

  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Khởi tạo user management
document.addEventListener("DOMContentLoaded", function () {
  updateUserUI();
  updateCartDisplay();

  // Thêm vào sự kiện click cho cart icon
  const cartIcon = document.getElementById("cartIcon");
  if (cartIcon) {
    cartIcon.addEventListener("click", function (e) {
      if (!checkLogin()) {
        e.preventDefault();
        showNotification("Vui lòng đăng nhập để xem giỏ hàng!");
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1500);
      } else {
        // Mở modal giỏ hàng
        const cartModal = document.getElementById("cartModal");
        if (cartModal) {
          cartModal.classList.add("active");
          document.querySelector(".modal-overlay").classList.add("active");
        }
      }
    });
  }
});
