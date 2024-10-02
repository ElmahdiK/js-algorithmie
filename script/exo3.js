/*
--- --- ---
Exercice 3:
Vous êtes développeur et vous devez créer un système de vérification des mots de passe. Le mot
de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, et un chiffre. Écrivez
un programme qui vérifie si un mot de passe donné respecte ces conditions.
--- --- ---
Début
Lire le mdp
Si le mdp contient moins de 8 caractères alors afficher false
Sinon pour chaque caractère
si c'est un nombre alors mettre "isContainNumber" à true
si c'est une majuscule alors mettre "isContainUpperCase" à true
si c'est une minuscule alors mettre "isContainLowerCase" à true
Si ces 3 conditions supplémentaires sont réunies alors afficher true
Sinon false
Fin
--- --- ---
*/

const isValidPassword = (password) => {
    let isLessThan8 = (password.length < 8);
    let isContainNumber = false;
    let isContainUpperCase = false;
    let isContainLowerCase = false;

    password.split('').forEach(char => {
        if (char >= "0" && char <= "9") {
            isContainNumber = true;
        } else {
            if (char === char.toUpperCase()) isContainUpperCase = true;
            if (char === char.toLowerCase()) isContainLowerCase = true;
        }
    });

    let isValid = (!isLessThan8 && isContainUpperCase && isContainLowerCase && isContainNumber);
    console.log("password", { password, length: password.length, isValid: isValid })

    // affichage des messages d'erreur
    if (isLessThan8) console.log("*** Le mot passe doit contenir au moins 8 caractères ***");
    if (!isContainNumber) console.log("*** Le mot passe doit contenir au moins 1 chiffre ***");
    if (!isContainUpperCase) console.log("*** Le mot passe doit contenir au moins 1 majuscule ***");
    if (!isContainLowerCase) console.log("*** Le mot passe doit contenir au moins 1 minuscule ***");

    return isValid;
}

isValidPassword("a1234B567");
console.log("\n")
isValidPassword("1234567");
console.log("\n")
isValidPassword("pass12");
console.log("\n")
isValidPassword("dragon8ballZ");