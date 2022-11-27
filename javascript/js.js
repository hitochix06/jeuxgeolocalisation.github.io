// Récupérer l'élement
let tableLatitude = document.querySelector("#latitude");
let tableLongitude = document.querySelector("#longitude");
let messageSauvegarde = document.querySelector(".message");
let messageReinitia = document.querySelector(".message1");

// Récupérer l'élement les 4 bouton
let buttonSuisje = document.querySelector("#button1");
let buttonSauvegarder = document.querySelector("#button3");
let buttonEtaisje = document.querySelector("#button2");
let buttonReinitia = document.querySelector("#button4");

// Récupérer l'élement les element formulaire
let prenom = document.querySelector("#prenomForm");
let ville = document.querySelector("#villeForm");
let btnValidForm = document.querySelector("#buttonForm");

// code pour affiche 
let affiche = document.querySelector("#prenom");
let affiche2 = document.querySelector("#ville")
let affiche3 = document.querySelector(".table");


// On créer une variable à vide
let tableau;

let map = L.map('map').setView([43.6817526, 7.2244625], 13); // cree point depart 

// afficher la map 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// Mise en écoute de notre bouton1 qui au click va déclencher une action
buttonSuisje.addEventListener("click", function () {
 navigator.geolocation.getCurrentPosition(function (position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  //afficher icon localisation
  map.flyTo([latitude, longitude], 15);
  L.marker([latitude, longitude]).addTo(map);


  let paragraphe = document.createElement("p");
  let paragraphe1 = document.createElement("p");
  paragraphe.innerText = position.coords.latitude;
  paragraphe1.innerText = position.coords.longitude;
  tableLatitude.appendChild(paragraphe);
  tableLongitude.appendChild(paragraphe1);

  // Création de l'évenement de sauvegarde dans le localStorage 
  button3.addEventListener("click", function () {
   localStorage.setItem("latitude", latitude);
   localStorage.setItem("longitude", longitude);

   alert("Données enregitrées dans le local storage !");

   // code pour vide cache
   tableLatitude.innerHTML = "";
   tableLongitude.innerHTML = "";
   affiche.innerHTML = "";
   affiche2.innerHTML = "";

  });
 });

});




// // code pour recupere form 
// btnValidForm.addEventListener("click", function (e) {
//  e.preventDefault()
//  //prénom
//  let paragraphe5 = document.createElement("p");
//  paragraphe5.innerText = inputPrenom.value;// metre toujour .value quand veux recupere text
//  affiche.appendChild(paragraphe5);

//  //ville
//  let paragraphe6 = document.createElement("p");
//  paragraphe6.innerText = inputVille.value;// metre toujour .value quand veux recupere text
//  affiche2.appendChild(paragraphe6);
//  // vide cache
//  inputPrenom.value = "";
//  inputVille.value = "";
// })



// Récupérer nos données depuis le localStorage
buttonEtaisje.addEventListener("click", function () {
 let LSLatitude = localStorage.getItem("latitude");
 let LSLongitude = localStorage.getItem("longitude");

 if (LSLatitude && LSLongitude) {

  let paragraphe = document.createElement("p");
  let paragraphe1 = document.createElement("p");
  paragraphe.innerText = LSLatitude;
  paragraphe1.innerText = LSLongitude;
  tableLatitude.appendChild(paragraphe);
  tableLongitude.appendChild(paragraphe1);

 } else {
  alert("Veuillez enregistrer votre position avant de la récupérer");
 }

});

// Réinitialiser notre LocalStorage

buttonReinitia.addEventListener("click", function () {
 localStorage.removeItem("latitude");
 localStorage.removeItem("longitude");


 alert("Position réinitialisée");

 tableLatitude.innerHTML = "";
 tableLongitude.innerHTML = "";

 affiche.innerHTML = "";
 affiche2.innerHTML = "";
});

