let i =0
while (i<10) {
    document.getElementById("bjr").appendChild(document.createElement("p")).innerHTML = "Bonjour";
    ++i;
}

document.querySelector("#bjr :nth-child(5)").style.color = "red";
