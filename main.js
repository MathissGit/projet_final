const hamburgerIcon = document.getElementById("hamburger-icon");

hamburgerIcon.addEventListener("click", function() {
  hamburgerIcon.classList.toggle("cross-icon");
  hamburgerIcon.classList.toggle("bubble-icon");
});
