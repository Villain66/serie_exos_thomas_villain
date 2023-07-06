var tableauMots = ["Renault", "Peugeot", "Toyota", "Maserrati", "Kia"];
var motLePlusLong = "";
for (var i = 0; i < tableauMots.length; i++) {
    if (tableauMots[i].length > motLePlusLong.length) {
        motLePlusLong = tableauMots[i];
    }
}
console.log("Le mot le plus long est : " + motLePlusLong);