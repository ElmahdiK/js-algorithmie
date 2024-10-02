/*
--- --- ---
Exercice 2 :
1. Demandez a l'utilisateur de saisir deux mots.
2. Convertissez les deux mots en majuscules.
3. Comparez les deux mots (en ignorant les espaces supplementaires) et indiquez s'ils sont identiques.
Indications :
- Supprimez les espaces supplementaires des deux mots.
- Convertissez-les ensuite en majuscules avant de faire la comparaison.
- Affichez un message indiquant s'ils sont identiques ou non.
--- --- ---
Début
Lire en entrée le mot n°1
Lire en entrée le mot n°2
Convertir le mot n°1 en majuscule
Convertir le mot n°2 en majuscule
Comparer les deux mots
S'ils sont identique afficher : "Les deux mots [mot n°1, mot n°2] sont identiques"
Sinon afficher : "Les deux mots [mot n°1, mot n°2] ne sont pas identiques"
Fin
--- --- ---
*/

let mot_1 = prompt("Saisir le mot n°1");
let mot_2 = prompt("Saisir le mot n°2");

// trim() pour supprimer les espaces supplémentaires d'un mot
// toUpperCase() pour mettre le mot en majuscule
let mot_1_majuscule = mot_1.trim().toUpperCase();
let mot_2_majuscule = mot_2.trim().toUpperCase();

// comparaison des 2 mots
let resultat = `Les deux mots [${mot_1_majuscule}, ${mot_2_majuscule}] `;

// ---
// 1ère façon
if (mot_1_majuscule === mot_2_majuscule) {
    console.log(resultat + `sont identiques.`);
} else {
    console.log(resultat + `ne sont pas identiques.`);
}
// Pour info : on peut aussi utiliser l'opérateur (ternaire) conditionnel
console.log(resultat + ((mot_1_majuscule === mot_2_majuscule) ? `sont` : `ne sont pas`) + ` identiques.`);

// ---
// 2ème façon : comparaison caractère par caractère
let arr_mot_1 = mot_1_majuscule.split('');
let arr_mot_2 = mot_2_majuscule.split('');

let nb_char_1 = arr_mot_1.length;
let nb_char_2 = arr_mot_2.length;

if (nb_char_1 != nb_char_2) {
    console.log(resultat + `ne sont pas identiques.`);
} else {
    for (let char in arr_mot_1) {
        if (arr_mot_1[char] != arr_mot_2[char]) {
            console.log(resultat + `ne sont pas identiques.`);
            break;
        } else {
            if (parseInt(char) === nb_char_1 - 1) {
                console.log(resultat + `sont identiques.`);
            }
        }
    }
}