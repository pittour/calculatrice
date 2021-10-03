/**
 * Créer ici le projet « Calculaprompt ».
 */

document.getElementById("bouton").addEventListener("click", calcul)

function calcul() {
    let verif = false;

        while (verif === false) { // boucle si l'utilisateur n'entre pas les bonnes infos
            let n1 = document.getElementById("n1").value;
            let res = document.getElementById("res").value;
            let n2 = document.getElementById("n2").value;


            if ((!isNaN(n1) && !isNaN(n2)) && (res == "/" || res == ":")) {
                document.getElementById("op").innerHTML = (`${n1 + res + n2}`);
                n1 = Number(n1);
                n2 = Number(n2);
                document.getElementById("resultat").innerHTML = `<strong style="color:red">${n1 / n2}</strong>`;
                verif = true // les bonnes infos ont été entrées : sortie de la boucle de verification
            }
            else if ((!isNaN(n1) && !isNaN(n2)) && (res == "*" || res == "x")) {
                document.getElementById("op").innerHTML = (`${n1 + res + n2}`);
                n1 = Number(n1);
                n2 = Number(n2);
                document.getElementById("resultat").innerHTML = `<strong style="color:red">${n1 * n2}</strong>`;
                verif = true
            }
            else if ((!isNaN(n1) && !isNaN(n2)) && (res == "-")) {
                document.getElementById("op").innerHTML = (`${n1 + res + n2}`);
                n1 = Number(n1);
                n2 = Number(n2);
                document.getElementById("resultat").innerHTML = `<strong style="color:red">${n1 - n2}</strong>`;
                verif = true
            }
            else if ((!isNaN(n1) && !isNaN(n2)) && (res == "+")) {
                document.getElementById("op").innerHTML = (`${n1 + res + n2}`);
                n1 = Number(n1);
                n2 = Number(n2);
                document.getElementById("resultat").innerHTML = `<strong style="color:red">${n1 + n2}</strong>`;
                verif = true
            }
            else {
                alert("Veillez à bien entrer un nombre, un opérateur + - * ou / puis un autre nombre !")
                verif = true;
            }
        }
}

/*let verif = false;
let reboot = true;

while (reboot === true) { // boucle pour reboot la calculatarice
    while (verif === false) { // boucle si l'utilisateur n'entre pas les bonnes infos
        let n1 = prompt("Insérez un nombre");
        let res = prompt("Insérez un opérateur");
        let n2 = prompt("Insérez un nombre");


        if ((!isNaN(n1) && !isNaN(n2)) && (res == "/" || res == ":")) {
            document.body.appendChild(document.createElement("p")).innerHTML = (`L'opération demandée est : ${n1 + res + n2}`);
            n1 = Number(n1);
            n2 = Number(n2);
            document.body.appendChild(document.createElement("p")).innerHTML = `Le résultat est <strong style="color:red">${n1 / n2}</strong>`;
            verif = true // les bonnes infos ont été entrées : sortie de la boucle de verification
            let redo = prompt("Souhaitez vous refaire un calcul ? Tapez 'oui' pour en refaire un.")
            redo = redo.toLowerCase();
            if (redo=="oui") {
                verif = false; // dans ce cas la calulatrice va reboot donc on réinitialise aussi la vérification de ce qu'entre l'utilisateur
            }
            else {
                reboot = false
            }
        }
        else if ((!isNaN(n1) && !isNaN(n2)) && (res == "*" || res == "x")) {
            document.body.appendChild(document.createElement("p")).innerHTML = (`L'opération demandée est : ${n1 + res + n2}`);
            n1 = Number(n1);
            n2 = Number(n2);
            document.body.appendChild(document.createElement("p")).innerHTML = `Le résultat est <strong style="color:red">${n1 * n2}</strong>`;
            verif = true
            let redo = prompt("Souhaitez vous refaire un calcul ? Tapez 'oui' pour en refaire un.")
            redo = redo.toLowerCase();
            if (redo=="oui") {
                verif = false;
            }
            else {
                reboot = false
            }
        }
        else if ((!isNaN(n1) && !isNaN(n2)) && (res == "-")) {
            document.body.appendChild(document.createElement("p")).innerHTML = (`L'opération demandée est : ${n1 + res + n2}`);
            n1 = Number(n1);
            n2 = Number(n2);
            document.body.appendChild(document.createElement("p")).innerHTML = `Le résultat est <strong style="color:red">${n1 - n2}</strong>`;
            verif = true
            let redo = prompt("Souhaitez vous refaire un calcul ? Tapez 'oui' pour en refaire un.")
            redo = redo.toLowerCase();
            if (redo=="oui") {
                verif = false;
            }
            else {
                reboot = false
            }
        }
        else if ((!isNaN(n1) && !isNaN(n2)) && (res == "+")) {
            document.body.appendChild(document.createElement("p")).innerHTML = (`L'opération demandée est : ${n1 + res + n2}`);
            n1 = Number(n1);
            n2 = Number(n2);
            document.body.appendChild(document.createElement("p")).innerHTML = `Le résultat est <strong style="color:red">${n1 + n2}</strong>`;
            verif = true
            let redo = prompt("Souhaitez vous refaire un calcul ? Tapez 'oui' pour en refaire un.")
            redo = redo.toLowerCase();
            if (redo=="oui") {
                verif = false;
            }
            else {
                reboot = false
            }
        }
        else {
            alert("Veillez à bien entrer un nombre, un opérateur + - * ou / puis un autre nombre !")
        }
    }
}
*/

