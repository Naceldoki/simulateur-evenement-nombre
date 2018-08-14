var resultat = document.getElementById("result");
var img = document.getElementById("img");

var pokemon = prompt("Choisis un nombre entre 1 et 5 : ");

switch (pokemon){

    case '1' :
    resultat.innerHTML = "Vous dormez et révez que vous avez trouvé le pokémon légendaire Mew. Arrivzrez-vous à le capturer ?";
    resultat.style.color = "pink";
    img.innerHTML = "<img src='images/mew.png' />"
    breack;
    
    case '2' :
    resultat.innerHTML = "Vous êtes perdu dans la fôret et Celebi viens vous guider.";
    resultat.style.color = "green";
    img.innerHTML = "<img src='images/celebi.png' />";
    breack;
    

    case '3' :
    resultat.innerHTML = "Vous observez le ciel la nuit et voyez Jirachi descendre vers vous.";
    resultat.style.color = "yellow";
    img.innerHTML = "<img src='images/jirachi.png' />"
    breack;

    case '4' :
    resultat.innerHTML = "Vous obtenez la victoire à votre jeu préféré. Victini apparaît pour la célébrer avec vous.";
    resultat.style.color = "blue";
    img.innerHTML = "<img src='images/victini.png' />"
    breack;

    case '5' :
    resultat.innerHTML = "Vous êtes au karaoké mais n'arrivez pas à chanter. Meloetta arrive et se met à chanter avec vous.";
    resultat.style.color = "purple";
    img.innerHTML = "<img src='images/meloetta chant.png' />"
    breack;

    default :
    resultat.innerHTML = "Je n'ai pas compris";
}