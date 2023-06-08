// Récupérer l'élément de l'image du menu
const menuImage = document.querySelector('.menu-image');

// Récupérer tous les éléments <li> du menu
const menuItems = document.querySelectorAll('li');


// Ajouter un écouteur d'événement de clic à l'image du menu
menuImage.addEventListener('click', function() {
  // Parcourir tous les éléments <li> du menu
  menuItems.forEach(function(menuItem) {
    // Vérifier si l'élément est visible ou non
    const isMenuItemVisible = menuItem.style.display === 'block';

    // Afficher ou masquer l'élément en fonction de son état actuel
    menuItem.style.display = isMenuItemVisible ? 'none' : 'block';
  });
});

// Ajouter un écouteur d'événement de clic à chaque élément <li> du menu
menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
    // Masquer tous les éléments du menu
    menuItems.forEach(function(item) {
      item.style.display = 'none';
    });
  });
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}