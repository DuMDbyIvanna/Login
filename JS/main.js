document.getElementById("openPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
  });
  
  document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    console.log("Correo electrónico:", email);
    console.log("Contraseña:", password);
    document.getElementById("popup").style.display = "none";
  });
  
  document.getElementById("showRegisterForm").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginFormContainer").style.display = "none";
    document.getElementById("registerFormContainer").style.display = "block";
    document.getElementById("popup").style.display = "flex"; // Agregamos esto para mostrar el popup
  });
  
  document.getElementById("showLoginForm").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("registerFormContainer").style.display = "none";
    document.getElementById("loginFormContainer").style.display = "block";
    document.getElementById("popup").style.display = "flex"; // Y esto también
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullname = this.fullname.value;
    const email = this.email.value;
    const password = this.password.value;
    console.log("Nombre completo:", fullname);
    console.log("Correo electrónico:", email);
    console.log("Contraseña:", password);
    document.getElementById("popup").style.display = "none";
  });
  