/*
--- --- ---
Exercice 4 :
Vous organisez un concours où vous devez calculer le score moyen des participants. 
Créez une fonction qui prend un tableau de scores et renvoie le score le plus élevé ainsi que le score moyen.
--- --- ---
Début
Lire le tableau des scores
Pour chaque score 
si le score est > à max : affecter le score à max
cumuler les scores à somme
calculer la moyenne en divisant la somme par le nombre de scores
afficher le score max et la moyenne
Fin
--- --- ---
*/

const calculScores = (scores) => {
    let max = scores[0];
    let somme = 0;
    let moyenne = 0;

    for (let i = 0; i <= scores.length - 1; i++) {
        // max
        if (max < scores[i]) max = scores[i];
        // somme
        somme += scores[i];
    }
    moyenne = somme / scores.length;

    return {
        scoreMax: max,
        scoreMoyen: moyenne
    }
}

console.log(calculScores([0, 10, 20, 30, 40, 50]));