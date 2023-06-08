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

//fetch("../link/kombucha.json")//
//.then(data => data.json())//
//.then(data => {//
 // console.log(data);//
//})//

 // Import the functions you need from the SDKs you need
 //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
 
 //import { getFirestore , doc, getDoc, where } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 //const firebaseConfig = {
//  // apiKey: "AIzaSyAm1sokCESHXHVkBUvSDnBQ2O0m1N3qRzo",
 //  authDomain: "kombucha-4df74.firebaseapp.com",
 //  projectId: "kombucha-4df74",
 //  storageBucket: "kombucha-4df74.appspot.com",
  // messagingSenderId: "631140585454",
  // appId: "1:631140585454:web:51edaeed097896faa448ff",
  // measurementId: "G-1JKPLLYT1C"
 //};

 // Initialize Firebase
 //const app = initializeApp(firebaseConfig);
 //const fs = getFirestore(app);
 //const db = doc(fs, "kamboucha", "PTmQpqxfnOGtlOxfCCuo");
 //const docSnap = await getDoc(db)
 //console.log(docSnap.data());