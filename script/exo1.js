/*

Exercice  1 :
Vous organisez un concours de dev où chaque participant a trois épreuves. Selon la moyenne des
scores, attribuez les niveaux suivants :
Moins de 50 : "Débutant"
Entre 50 et 70 : "Intermédiaire"
Plus de 70 : "Expert"


Début 

Lire les 3 notes d'épreuves de chaque participant
Pour participant, calculer sa moyenne
Si la moyenne est < à 50 afficher : "Débutant"
Si la moyenne est entre 50 et 70 afficher : "Débutant"
Si la moyenne est > à 70 afficher : "Expert"
Fin
*/

window.onload = _ => {
    console.log("page loaded");

    let participants = [[40,10,25],[85,90,100],[45,60,70]];
    let moyenne = 0;

    for (let participant in participants) {
        // calcul de la moyenne
        moyenne = ((participants[participant][0] + participants[participant][1] + participants[participant][2])/3)
        console.log(`Le participant ${participant} a une moyenne de : ${moyenne} => ${niveau(moyenne)}`)
    }
}

const niveau = (moyenne) => {
    if (moyenne < 50) return "Débutant";
    else if (moyenne >= 50 && moyenne <= 70) return "Intermédiaire";
    else return "Expert";
}

