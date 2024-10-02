### Algorithmie

Quelques excercices d'algorithmie en JavaScript.

### Exercice  1 :  
## 1.1 consigne
Vous organisez un concours de dev où chaque participant a trois épreuves. Selon la moyenne des scores, attribuez les niveaux suivants :  
Moins de 50 : "Débutant"  
Entre 50 et 70 : "Intermédiaire"  
Plus de 70 : "Expert"  

## 1.2 algorithme
Début  
Lire les 3 notes d'épreuves de chaque participant  
Pour chaque participant, calculer sa moyenne  
Si la moyenne est < à 50 afficher : "Débutant"  
Si la moyenne est entre 50 et 70 afficher : "Intermédiaire"  
Si la moyenne est > à 70 afficher : "Expert"  
Fin  

## 1.3 code 
```
const NIVEAUX = ["Débutant", "Intermédiaire", "Expert"];
const getNiveau = (moyenne) => {
    if (moyenne < 50) return NIVEAUX[0];
    else if (moyenne >= 50 && moyenne <= 70) return NIVEAUX[1];
    else return NIVEAUX[2];
}

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
```  

## 1.4 résultat  
Le participant 0 a une moyenne de : 25 => Débutant  
Le participant 1 a une moyenne de : 65 => Intermédiaire  
Le participant 2 a une moyenne de : 95 => Expert  


### Exercice  2 :  
## 2.1 consigne  
1. Demandez a l'utilisateur de saisir deux mots.
2. Convertissez les deux mots en majuscules.
3. Comparez les deux mots (en ignorant les espaces supplementaires) et indiquez s'ils sont identiques.  
Indications :
- Supprimez les espaces supplementaires des deux mots.
- Convertissez-les ensuite en majuscules avant de faire la comparaison.
- Affichez un message indiquant s'ils sont identiques ou non.  

## 2.2 algorithme
Début  
Lire en entrée le mot n°1  
Lire en entrée le mot n°2  
Convertir le mot n°1 en majuscule  
Convertir le mot n°2 en majuscule  
Comparer les deux mots  
S'ils sont identique afficher : "Les deux mots [mot n°1, mot n°2] sont identiques"  
Sinon afficher : "Les deux mots [mot n°1, mot n°2] ne sont pas identiques"  
Fin  

## 2.3 code 
```
/*
--- --- ---
Exercice :
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
```

## 2.4 résultat  
Les deux mots [BONJOUR, BONJOUR] sont identiques  