//dropdowns
var dropdowns = document.querySelectorAll(".dropdown-toggle");
dropdowns.forEach(function (dropdown) {
  dropdown.addEventListener("click", function () {
    var dropdownMenu = this.nextElementSibling;
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
    } else {
      dropdownMenu.classList.add("show");
    }
  });
});

// Close dropdowns when clicking outside
window.addEventListener("click", function (e) {
  dropdowns.forEach(function (dropdown) {
    var dropdownMenu = dropdown.nextElementSibling;
    if (!dropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});

let frLink = document.getElementById("fr-link");
let enLink = document.getElementById("en-link");

frLink.addEventListener("click", function () {
  frLink.classList.add("active");
  document.querySelectorAll(".lang-fr").forEach(function (element) {
    element.style.display = "block";
  });
  document.querySelectorAll(".lang-en").forEach(function (element) {
    element.style.display = "none";
  });
});

enLink.addEventListener("click", function () {
  document.querySelectorAll(".lang-en").forEach(function (element) {
    element.style.display = "block";
  });
  document.querySelectorAll(".lang-fr").forEach(function (element) {
    element.style.display = "none";
  });
});
