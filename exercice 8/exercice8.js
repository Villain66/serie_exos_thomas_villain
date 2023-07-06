var mot = prompt("Entrez un mot :");

mot = mot.toLowerCase();

var motInverse = "";

for (var i = mot.length - 1; i >= 0; i--) {
  motInverse += mot[i];
}

if (mot === motInverse) {
  console.log("Le mot " + mot + " est un palindrome.");
} else {
  console.log("Le mot " + mot + " n'est pas un palindrome.");
}