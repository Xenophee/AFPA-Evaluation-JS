var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Samuel", "Stéphane"];
var prenom;
var suppression;
var ajout;
var NouvTab;


do {
    prenom = prompt("Entrez un prénom");

    if (prenom == "Audrey") {
        NouvTab = tab.indexOf("Audrey");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
        }
    else if (prenom == "Aurélien") {
        NouvTab = tab.indexOf("Aurélien");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
    }
    else if (prenom == "Flavien") {
        NouvTab = tab.indexOf("Flavien");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
    }
    else if (prenom == "Jérémy") {
        NouvTab = tab.indexOf("Jérémy");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
    }
    else if (prenom == "Laurent") {
        NouvTab = tab.indexOf("Laurent");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
    }
    else if (prenom == "Melik") {
        NouvTab = tab.indexOf("Melik");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
    }
    else if (prenom == "Nouara") {
        NouvTab = tab.indexOf("Nouara");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
    }
    else if (prenom == "Samuel") {
        NouvTab = tab.indexOf("Samuel");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
    }
    else if (prenom == "Stéphane") {
        NouvTab = tab.indexOf("Stéphane");
        suppression = tab.splice(NouvTab,1);
        ajout = tab.push(" ");
    }
    else {
        if (prenom == null) {
            alert("Fin du script");
            break;
        }
        alert("Ce prénom ne figure pas dans le tableau");
    }

    console.log(tab);

} while (prenom != null);