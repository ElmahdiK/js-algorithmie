/*
--- --- ---
Exercice  1 :
Vous organisez un concours de dev où chaque participant a trois épreuves. Selon la moyenne des
scores, attribuez les niveaux suivants :
Moins de 50 : "Débutant"
Entre 50 et 70 : "Intermédiaire"
Plus de 70 : "Expert"
--- --- ---
Début 
Lire les 3 notes d'épreuves de chaque participant
Pour chaque participant, calculer sa moyenne
Si la moyenne est < à 50 afficher : "Débutant"
Si la moyenne est entre 50 et 70 afficher : "Intermédiaire"
Si la moyenne est > à 70 afficher : "Expert"
Fin
--- --- ---
*/
const NIVEAUX = ["Débutant", "Intermédiaire", "Expert"];
const getNiveau = (moyenne) => {
    if (moyenne < 50) return NIVEAUX[0];
    else if (moyenne >= 50 && moyenne <= 70) return NIVEAUX[1];
    else return NIVEAUX[2];
}

window.onload = _ => {
    console.log("page loaded");

    // résultats des épreuves
    const RESULTATS = [[10, 20, 45], [50, 65, 80], [90, 95, 100]];
    let moyenne = 0;
    let somme = 0;

    // pour chaque participant
    for (let participant in RESULTATS) {
        somme = 0;
        // on calcul la somme des résultats obtenus
        for (let note in RESULTATS[participant]) {
            somme += RESULTATS[participant][note];
        }
        // on calcul la moyenne
        moyenne = somme / RESULTATS[participant].length;
        console.log(`Le participant ${participant} a une moyenne de : ${moyenne} => ${getNiveau(moyenne)}`)
    }
}


