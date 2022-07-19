var PrixUnit;
var QuantiteCom;
var PrixInter;
var PrixFinal;
var PrixTotal;
var Remise;
var FraisPort;
var CalculPort;


PrixUnit = Number(prompt("Veuillez saisir le prix unitaire d'un produit"));
QuantiteCom = Number(prompt("Veuillez maintenant saisir la quantité"));

console.log(PrixUnit);
console.log(QuantiteCom);

PrixInter = PrixUnit * QuantiteCom;
console.log(PrixInter)


if (PrixInter > 200) {
    Remise = PrixInter /10; // 10%
    PrixFinal = PrixInter - Remise;
} else if (PrixInter >= 100 && PrixInter <= 200) {
    Remise = PrixInter /20; // 5%
    PrixFinal = PrixInter - Remise;
} else {
    Remise = 0
    PrixFinal = PrixInter;
};

console.log(PrixFinal);


if (PrixFinal > 500) {
    FraisPort = 0;
} else {
    CalculPort = (PrixFinal /100) * 2; // 2%
    FraisPort = PrixFinal - CalculPort;
    
        if (FraisPort < 6) {
            FraisPort = 6;
        } else {
            FraisPort = CalculPort;
        }
};

console.log(FraisPort);

PrixTotal = PrixFinal + FraisPort;

console.log(PrixTotal);

console.log(`PU du produit = ${PrixUnit}€ \nQTECOM = ${QuantiteCom} \nTOT = ${PrixInter}€ \nPAP = ${PrixTotal}€ avec REM de ${Remise}€ et PORT de ${FraisPort}€`)
alert(`PU du produit = ${PrixUnit}€ \nQTECOM = ${QuantiteCom} \nTOT = ${PrixInter}€ \nPAP = ${PrixTotal}€ avec REM de ${Remise}€ et PORT de ${FraisPort}€`)