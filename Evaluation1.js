// Exercice 1


var age;
var vingtAns = 0;
var quaranteAns = 0;
var entreDeux = 0;
var resultat;

while (age= Number(prompt("Entrez un âge, la saisie est arrêté à l'entrée d'un centenaire"))) {
if (age < 20) {
    vingtAns = vingtAns+1;
} else if (age >=20 && age <=40) {
    entreDeux = entreDeux+1;
} else {
    quaranteAns = quaranteAns+1;
    if (age == 100) {
        age = alert("Le script est terminé");
        break;
    }
}
}
resultat = alert(`Il y a ${vingtAns} personnes de moins de 20 ans, ${entreDeux} personnes entre 20 et 40 ans, et ${quaranteAns} personnes au dessus de 40 ans`);


