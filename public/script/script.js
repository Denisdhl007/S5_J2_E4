
let jour = prompt(`Quel jour?`);
console.log(jour);
switch (jour){
  case 'lundi':
    alert('cours  à MolenGeek et tu as sport en soirée.');
    break;
  case 'mardi':
    alert('cours  à MolenGeek et lol en soirée.');
    break;
  default:
    alert(`Sorry, ${jour} n'est pas un jour reconnu`);
}

let meteo = prompt(`Quel meteo? Soleil? Pluie? Neige?`);
console.log(meteo);
switch (meteo){
  case 'Soleil':
    alert(`prend un short`);
    break;
  case 'Pluie':
    alert(`prend un parapluie`);
    break;
  case 'Neige':
    alert(`prend un pull`);
    break;
  default:
    alert(`Sorry, ${meteo} n'est pas une meteo reconnue`);
}


let nbr1 = prompt(`un chiffre`)
console.log(nbr1);
let operateur = prompt(`Quel opérateur`)
console.log(operateur);
let nbr2 = prompt(`un chiffre`)
console.log(nbr2);

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