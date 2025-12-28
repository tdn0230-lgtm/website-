// Auth JavaScript

// Toggle password visibility
function togglePasswordVisibility(inputId, buttonId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(buttonId);

  if (passwordInput && toggleButton) {
    toggleButton.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      // Toggle eye icon
      const icon = this.querySelector("i");
      if (type === "text") {
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  }
}

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

// Show error message
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add("show");
  }
}

// Hide error message
function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.classList.remove("show");
  }
}

// Handle login form submission
function handleLoginForm() {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      let isValid = true;

      // Reset errors
      hideError("emailError");
      hideError("passwordError");

      // Validate email
      if (!email || !validateEmail(email)) {
        showError("emailError", "Vui lòng nhập email hợp lệ");
        document.getElementById("email").classList.add("error");
        isValid = false;
      } else {
        document.getElementById("email").classList.remove("error");
      }

      // Validate password
      if (!password) {
        showError("passwordError", "Vui lòng nhập mật khẩu");
        document.getElementById("password").classList.add("error");
        isValid = false;
      } else {
        document.getElementById("password").classList.remove("error");
      }

      if (isValid) {
        // In a real app, you would send this data to a server
        // For demo purposes, simulate successful login
        const remember = document.getElementById("remember").checked;

        // Show success notification
        showNotification("Đăng nhập thành công!");

        // Store login state in localStorage for demo
        localStorage.setItem("userLoggedIn", "true");
        if (remember) {
          localStorage.setItem("userEmail", email);
        }

        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      }
    });
  }
}

// Handle register form submission
function handleRegisterForm() {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const terms = document.getElementById("terms").checked;
      let isValid = true;

      // Reset errors
      hideError("nameError");
      hideError("registerEmailError");
      hideError("registerPasswordError");
      hideError("confirmPasswordError");
      hideError("termsError");

      // Validate full name
      if (!fullName || fullName.trim().length < 2) {
        showError("nameError", "Vui lòng nhập họ và tên hợp lệ");
        document.getElementById("fullName").classList.add("error");
        isValid = false;
      } else {
        document.getElementById("fullName").classList.remove("error");
      }

      // Validate email
      if (!email || !validateEmail(email)) {
        showError("registerEmailError", "Vui lòng nhập email hợp lệ");
        document.getElementById("registerEmail").classList.add("error");
        isValid = false;
      } else {
        document.getElementById("registerEmail").classList.remove("error");
      }

      // Validate password
      if (!password || !validatePassword(password)) {
        showError("registerPasswordError", "Mật khẩu phải có ít nhất 8 ký tự");
        document.getElementById("registerPassword").classList.add("error");
        isValid = false;
      } else {
        document.getElementById("registerPassword").classList.remove("error");
      }

      // Validate confirm password
      if (!confirmPassword || password !== confirmPassword) {
        showError("confirmPasswordError", "Mật khẩu không khớp");
        document.getElementById("confirmPassword").classList.add("error");
        isValid = false;
      } else {
        document.getElementById("confirmPassword").classList.remove("error");
      }

      // Validate terms
      if (!terms) {
        showError("termsError", "Vui lòng chấp nhận điều khoản");
        isValid = false;
      }

      if (isValid) {
        // In a real app, you would send this data to a server
        // For demo purposes, simulate successful registration

        // Get newsletter preference
        const newsletter = document.getElementById("newsletter").checked;

        // Create user object
        const user = {
          fullName: fullName,
          email: email,
          phone: document.getElementById("phone").value || "",
          newsletter: newsletter,
          createdAt: new Date().toISOString(),
        };

        // Store user data in localStorage for demo
        localStorage.setItem("userData", JSON.stringify(user));
        localStorage.setItem("userLoggedIn", "true");

        // Show success notification
        showNotification("Đăng ký thành công! Chào mừng đến với GREENLOOP");

        // Redirect to home page after 2 seconds
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      }
    });
  }
}

// Handle social login buttons
function handleSocialButtons() {
  const facebookBtn = document.querySelector(".social-btn.facebook");
  const googleBtn = document.querySelector(".social-btn.google");

  if (facebookBtn) {
    facebookBtn.addEventListener("click", function () {
      showNotification("Đăng nhập với Facebook (chức năng demo)");
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener("click", function () {
      showNotification("Đăng nhập với Google (chức năng demo)");
    });
  }
}

// Show notification (reuse from main js)
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

  // Add CSS for animations if not already present
  if (!document.querySelector("style[data-auth-animations]")) {
    const style = document.createElement("style");
    style.setAttribute("data-auth-animations", "true");
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

// Initialize auth pages
document.addEventListener("DOMContentLoaded", function () {
  // Initialize password toggles
  togglePasswordVisibility("password", "togglePassword");
  togglePasswordVisibility("registerPassword", "toggleRegisterPassword");
  togglePasswordVisibility("confirmPassword", "toggleConfirmPassword");

  // Initialize form handlers
  handleLoginForm();
  handleRegisterForm();

  // Initialize social buttons
  handleSocialButtons();

  // Pre-fill email if remembered
  if (localStorage.getItem("userEmail") && document.getElementById("email")) {
    document.getElementById("email").value = localStorage.getItem("userEmail");
  }

  // Add real-time validation for register form
  const registerPassword = document.getElementById("registerPassword");
  const confirmPassword = document.getElementById("confirmPassword");

  if (registerPassword && confirmPassword) {
    confirmPassword.addEventListener("input", function () {
      if (registerPassword.value !== this.value && this.value.length > 0) {
        showError("confirmPasswordError", "Mật khẩu không khớp");
        this.classList.add("error");
      } else {
        hideError("confirmPasswordError");
        this.classList.remove("error");
      }
    });
  }

  // Add real-time validation for email fields
  const emailInputs = document.querySelectorAll('input[type="email"]');
  emailInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value && !validateEmail(this.value)) {
        const errorId =
          this.id === "email" ? "emailError" : "registerEmailError";
        showError(errorId, "Vui lòng nhập email hợp lệ");
        this.classList.add("error");
      }
    });

    input.addEventListener("input", function () {
      const errorId = this.id === "email" ? "emailError" : "registerEmailError";
      hideError(errorId);
      this.classList.remove("error");
    });
  });
});
