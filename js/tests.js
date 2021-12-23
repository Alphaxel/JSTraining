/**
 *  Exercice 0
 *  Récupérer des données daans <p>, 
 *  Modifier, ajouter World,
 *  Réafficher
 *  créer un élément h3 avec un identifiant id ="monId" et le contenu suivant, "le JS c'est formidable" sur un fond vert
 */
// Mettre le code ici et commenter avant de passer à un autre exercice.

const helloP=document.getElementById("ident");
let helloText=helloP.textContent+" World";
helloP.textContent=helloText;
let title=document.createElement("h3")
title.textContent="le JS c'est formidable";
title.setAttribute("id","monId")
title.style.backgroundColor="green"
document.getElementById("container").appendChild(title);

/**
 *  Exercice 1
 *  Trier les données
 *  récupérées dans les champs input id="tab1" et id="tab2"
 *  pour afficher dans id="result" les valeurs strictement identiques
 */
// Mettre le code ici et commenter avant de passer à un autre exercice.
const firstInput=document.getElementById("tab1").value.split(",");
const secondInput=document.getElementById("tab2").value.replace(" ","").replace(" ","").split(",")
let results=[];
let resultArea=document.getElementById("result")
for (let i=0; i<firstInput.length; i++) {
  let firstInputCheck=firstInput[i];
  for (let i=0; i<secondInput.length; i++){
    let secondInputCheck=secondInput[i]
    if (firstInputCheck==secondInputCheck){
      results.push(" "+secondInputCheck +" ")
    }
  }
}
resultArea.innerHTML=results;

console.log(resultArea)
/**
 *  Exercice 2
 *  Créer une fonction qui renvoie le carré du nombre entré
 *  dans le champ id="number" en cliquant sur le bouton id="processSquare"
 *  et l'afficher dans id="result"
 */
// Mettre le code ici et commenter avant de passer à un autre exercice.
const button=document.getElementById("processSquare");
button.addEventListener('click',function(){
  let inputValue=document.getElementById("number").value.replace(",",".");
  if (!(isNaN(inputValue))){
    let inputSquare=inputValue*inputValue;
    resultArea.innerHTML=results +"<br>La valeur rentrée dans l'exercice 2 élevée au carré est égale à " +inputSquare;
  }else{
    resultArea.innerHTML=results +"<br>La valeur rentrée dans l'exercice 2 n'est pas un nombre"
  }
});


/**
 *  Exercice 3
 *  Afficher l'objet ci-dessous dans la div id="result"
 *  sous cette forme <div>clé : valeur</div>
 *  convertir la date de naissance en date format français (jour mois année et heure)
 *  ajouter une ligne pour indiqué l'âge calculé
 *  attention la date de naissance est un timestamp
 */
// Mettre le code ici et commenter avant de passer à un autre exercice.
let obj = {
    surname: 'Charles',
    name: 'Dupont',
    birth: 1207110465663
};


/**
 *  Exercice 4
 *  Soumission et validation d'un formulaire en javacsript
 *  Récupérer l'élément formulaire id="identForm" par document.forms
 *  Bloquer son envoi HTML (évènement submit)
 *  Récupérer les données et les vérifier (regex)
 *  Afficher toutes les erreurs de validation pour chaque champ du formulaire 
 *  ou que la validation s'est bien passée pour tous dans la div id="result"
 */


/**
 *  Exercice 5
 *  Afficher le tableau ci-dessous dans la div id="result"
 *  sous forme de cartes comprennant toutes les valeurs y compris l'image qui est dans le répertoire img.
 *  Utilisation de grid ou  flexbox par exemple.
 *  Attention les couleurs sont à afficher dans une liste de sélection.
 *  le prix est à indiquer en euros, il est actuellement en centimes.
 */
const teddies = [
  {
    "colors": ["Tan", "Chocolate", "Black", "White"],
    "_id": "5be9c8541c9d440000665243",
    "name": "Norbert",
    "price": 2900,
    "imageUrl": "teddy_1.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "colors": [
      "Pale brown",
      "Dark brown",
      "White"
    ],
    "_id": "5beaa8bf1c9d440000a57d94",
    "name": "Arnold",
    "price": 3900,
    "imageUrl": "teddy_2.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "colors": [
      "Brown"
    ],
    "_id": "5beaaa8f1c9d440000a57d95",
    "name": "Lenny and Carl",
    "price": 5900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "teddy_3.jpg"
  }
];



/**
 *  Exercice 6 basé sur l'exercice 5
 *
 *  Reprendre l'exercice 5, décommenter le scripts
 *  Ajouter à celui-ci pour chaque carte un champ input type="number" pour indiquer la quantité de produit désirée,
 *  Le changement de quantité (par les flèches ou directement) doit modifier le prix du produit (prix unitaire * quantité).
 *  Si la quantité est <= 0 le prix du produit est égal à son prix unitaire.
 *  Ajouter une liste de sélection pour les couleurs.
 *  et Ajouter un bouton "Ajouter au panier".
 */


/**
 *  Exercice 7 basé sur les exercices 5 et 6
 *
 *  ajouter un évènement clic sur chaque bouton "Ajouter au panier" (un par carte !!),
 *  ce clic devra créer ou modifier le panier
 *  qui sera conservé dans le local storage du navigateur.
 *  Le panier (local storage) contiendra
 *  l'_id du produit,
 *  la couleur choisie,
 *  la quantité demandée,
 *  son prix unitaire,
 *  le total du produit.
 *  Un produit peut être ajouté au panier avec plusieurs couleurs différentes.
 *  Une alerte indiquera que tout s'est bien passé ou pas.
 *  En console, afficher le contenu du panier (local storage) à chaque action (clic sur Ajouter au panier).
 *  
 *  Si la quantité est de 0 et que le produit existe au panier, alors le produit est supprimé du panier
 *  par contre si le produit n'est pas dans le panier, il faut renvoyer une erreur (alerte).
 *  Si la quantité est négative, il faut retirer cette quantité de produit du panier
 *  et si le total est négatif, il faut supprimer le produit du panier.
 */

 
 
