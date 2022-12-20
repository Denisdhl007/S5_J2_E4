// *** Exo 1 Switch ***
//     -  Stockez dans une variable, via un prompt, un jour de la semaine.

//     -  À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
//         - Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.

let jour = prompt("Entrez un jour de la semaine");

switch(jour){
    case "lundi":
        alert("c'est lundi, cours MolenGeek");
        break;
    case "mardi":
        alert("c'est mardi, cours MolenGeek + dormir");
        break;
    case "mercredi":
        alert("c'est mercredi, cours MolenGeek en distenciel");
        break;
    case "jeudi":
        alert("c'est jeudi, cours MolenGeek + dormir plus");
        break;
    case "vendredi":
        alert("c'est vdd, cours MolenGeek + projet");
        break;
    case "samedi":
        alert("c'est samedi, la cuite du weekend");
        break;
    case "dimanche":
        alert("c'est dimanche, geek");
        break;
    default:
        alert("un jour de la semaine stp");
        break;
}
 
//  *** Exo 2 Switch ***
//     - Déclarer une variable qui prendra comme valeur un type de météo

//     - À l'aide d'un switch, affichez une réaction appropriée au temps
//         -  Ex: Il pleut. Je prend un parapluie
let meteo = prompt("Type de temps");

switch(meteo){
    case "pluie":
        alert("Il pleut. Je prend un parapluie");
        break;
    case "vent":
        alert("Il y a du vent. Je me couvre bien");
        break;
    case "neige":
        alert("Il neige. Je met des gends");
        break;
    case "soleil":
        alert("Il y a du soleil. Je prends mes lunettes de soleil");
        break;
    default:
        alert("Quel temps il fait?");
        break;
}

// *** Exo 3 Switch ***
//     - Déclarez une variable dont la valeur sera donnée par l'utilisateur.

//     -  Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"
let nbr = prompt("Entrez un nombre pour voir si il est divisible par 2 ou pas");
nbr = nbr % 2

switch(nbr){
    case 0:
        alert("Nombre pair");
        break;
    default:
        alert("Nobre impair");
        break;
}

// *** Exo 4 Switch ***
//     -  Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;

//     -   Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

//         -  Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4

let nbr1 = prompt("Entrez un nombre");
let operateur = prompt("Entrez un operateur");
let nbr2 = prompt("Entrez un deuxieme nombre");
let result;

switch(operateur){
    case "+":
        result = parseInt(nbr1) + parseInt(nbr2);
        alert(`${nbr1} + ${nbr2} = ${result}`);
        break;
    case "-":
        result = parseInt(nbr1) - parseInt(nbr2);
        alert(`${nbr1} - ${nbr2} = ${result}`);
        break;
    case "*":
        result = parseInt(nbr1) * parseInt(nbr2);
        alert(`${nbr1} * ${nbr2} = ${result}`);
        break;
    case "/":
        result = parseInt(nbr1) / parseInt(nbr2);
        alert(`${nbr1} / ${nbr2} = ${result}`);
        break;
}

// BONUS

// Voici quelques exemples d'exercices sur les switchs en JavaScript :

// 1. Écrivez un programme qui demande à l'utilisateur de saisir un chiffre de 1 à 7 et affiche le jour de la semaine correspondant (par exemple, 1 pour lundi, 2 pour mardi, etc.). Utilisez un switch pour résoudre ce problème.
let nbrSem = prompt("Entrez un chiffre entre un et 7");

switch(nbrSem){
    case "1":
        alert("c'est lundi");
        break;
    case "2":
        alert("c'est mardi");
        break;
    case "3":
        alert("c'est mercredi");
        break;
    case "4":
        alert("c'est jeudi");
        break;
    case "5":
        alert("c'est vdd");
        break;
    case "6":
        alert("c'est samedi");
        break;
    case "7":
        alert("c'est dimanche");
        break;
    default:
        alert("un chiffre entre 1 et 7 stp");
        break;
}
// 2. Écrivez un programme qui demande à l'utilisateur de saisir un chiffre de 1 à 12 et affiche le mois de l'année correspondant (par exemple, 1 pour janvier, 2 pour février, etc.). Utilisez un switch pour résoudre ce problème.
let nbrMois = prompt("Entrez un chiffre entre un et 12");

switch(nbrMois){
    case "1":
        alert("c'est janvier");
        break;
    case "2":
        alert("c'est fevrier");
        break;
    case "3":
        alert("c'est mars");
        break;
    case "4":
        alert("c'est avril");
        break;
    case "5":
        alert("c'est mai");
        break;
    case "6":
        alert("c'est juin");
        break;
    case "7":
        alert("c'est juillet");
        break;
    case "8":
        alert("c'est aout");
        break;
    case "9":
        alert("c'est septembre");
        break;
    case "10":
        alert("c'est octobre");
        break;
    case "11":
        alert("c'est novembre");
        break;
    case "12":
        alert("c'est decembre");
        break;
    default:
        alert("un nbr entre un et 12 stp");
        break;

}