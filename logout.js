// ========== LOGOUT BUTTON MANAGEMENT ==========

// Kiểm tra trạng thái đăng nhập
function isUserLoggedIn() {
  return localStorage.getItem("userLoggedIn") === "true";
}

// Lấy tên người dùng
function getUserFirstName() {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  if (userData.fullName && userData.fullName.trim() !== "") {
    return userData.fullName.split(" ")[0];
  } else if (userData.email) {
    const nameFromEmail = userData.email.split("@")[0];
    return nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
  }
  return "Khách";
}

// Cập nhật nút đăng xuất trên navbar
function updateLogoutButtons() {
  const logoutNavBtn = document.getElementById("logoutNavBtn");
  const logoutMobileBtn = document.getElementById("logoutMobileBtn");
  const isLoggedIn = isUserLoggedIn();

  if (logoutNavBtn) {
    if (isLoggedIn) {
      const userName = getUserFirstName();
      logoutNavBtn.textContent = `Đăng xuất (${userName})`;
      logoutNavBtn.classList.remove("hidden");
    } else {
      logoutNavBtn.classList.add("hidden");
    }
  }

  if (logoutMobileBtn) {
    if (isLoggedIn) {
      const userName = getUserFirstName();
      logoutMobileBtn.textContent = `Đăng xuất (${userName})`;
      logoutMobileBtn.classList.remove("hidden");
    } else {
      logoutMobileBtn.classList.add("hidden");
    }
  }
}

// Hàm đăng xuất
function logout() {
  if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
    // Lấy thông tin user trước khi xóa
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const userEmail = userData.email;

    // Xóa thông tin đăng nhập
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userData");

    // Xóa giỏ hàng của user
    if (userEmail) {
      const cartKey = `cart_${userEmail}`;
      localStorage.removeItem(cartKey);
    }

    // Hiển thị thông báo
    showNotification("Đăng xuất thành công!");

    // Cập nhật UI ngay lập tức
    updateLogoutButtons();
    updateUserIcon();
    updateCartIcon();

    // Chuyển hướng về trang chủ sau 1 giây
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }
}

// Cập nhật icon user (ẩn/hiện dropdown)
function updateUserIcon() {
  const userIcon = document.querySelector(".user-icon");
  if (!userIcon) return;

  const isLoggedIn = isUserLoggedIn();

  if (isLoggedIn) {
    const userName = getUserFirstName();
    userIcon.innerHTML = `
            <div class="user-dropdown">
                <button class="dropbtn" id="userDropdownBtn">
                    <i class="fas fa-user-circle"></i>
                    <span class="user-name">${userName}</span>
                </button>
            </div>
        `;
  } else {
    userIcon.innerHTML = `
            <a href="login.html" class="user-login-link">
                <i class="fas fa-user"></i>
                <span class="login-text">Đăng nhập</span>
            </a>
        `;
  }
}

// Cập nhật icon giỏ hàng
function updateCartIcon() {
  const cartIcon = document.querySelector(".cart-icon");
  const cartCount = document.querySelector(".cart-count");

  if (!cartIcon || !cartCount) return;

  const isLoggedIn = isUserLoggedIn();

  if (isLoggedIn) {
    cartIcon.style.opacity = "1";
    cartIcon.style.pointerEvents = "auto";
    cartIcon.title = "";

    // Cập nhật số lượng giỏ hàng
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData.email) {
      const cartKey = `cart_${userData.email}`;
      const savedCart = localStorage.getItem(cartKey);

      if (savedCart) {
        try {
          const cartItems = JSON.parse(savedCart);
          const totalItems = cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          );

          if (totalItems > 0) {
            cartCount.textContent = totalItems;
            cartCount.style.display = "flex";
            return;
          }
        } catch (e) {
          console.error("Lỗi khi đọc giỏ hàng:", e);
        }
      }
    }

    cartCount.textContent = "0";
    cartCount.style.display = "none";
  } else {
    cartIcon.style.opacity = "0.5";
    cartIcon.style.pointerEvents = "none";
    cartIcon.title = "Vui lòng đăng nhập để xem giỏ hàng";
    cartCount.textContent = "0";
    cartCount.style.display = "none";
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

// Thêm event listeners cho nút đăng xuất
function setupLogoutButtons() {
  const logoutNavBtn = document.getElementById("logoutNavBtn");
  const logoutMobileBtn = document.getElementById("logoutMobileBtn");

  if (logoutNavBtn) {
    logoutNavBtn.addEventListener("click", logout);
  }

  if (logoutMobileBtn) {
    logoutMobileBtn.addEventListener("click", logout);
  }

  // Cũng thêm vào dropdown user nếu có
  const dropdownLogoutBtn = document.querySelector(
    ".user-dropdown-menu .logout-btn"
  );
  if (dropdownLogoutBtn) {
    dropdownLogoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      logout();
    });
  }
}

// Khởi tạo khi trang tải xong
document.addEventListener("DOMContentLoaded", function () {
  updateLogoutButtons();
  updateUserIcon();
  updateCartIcon();
  setupLogoutButtons();

  // Kiểm tra lại sau 0.5s để đảm bảo
  setTimeout(() => {
    updateLogoutButtons();
    updateUserIcon();
    updateCartIcon();
  }, 500);
});

// Cập nhật UI khi có thay đổi trạng thái đăng nhập
window.addEventListener("storage", function (e) {
  if (e.key === "userLoggedIn") {
    setTimeout(() => {
      updateLogoutButtons();
      updateUserIcon();
      updateCartIcon();
    }, 100);
  }
});
