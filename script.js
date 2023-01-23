let numeleTau = document.getElementById("numeleTau").value;
let numelePer2 = document.getElementById("numelePer2").value;
let btnSubmit = document.getElementById("btnSubmit");

let numeCorecte = ["Cosmin", "Gabi", "Gabriela", "Calin", "cosmin", "calin", "gabi", "gabriela", "Chong", "George"]

btnSubmit.addEventListener("click", adaugaText);

function checkName(){
    if (numeCorecte.includes(numeleTau)){
        document.getElementById("nume1Incorect").innerHTML="Nume corect! Felicitari iti stii numele.";
    }else{
        document.getElementById("nume1Incorect").innerHTML="Nume incorect. Hmmm...";
    }
    
    if(numeCorecte.includes(numelePer2)){
        document.getElementById("nume2Incorect").innerHTML="Nume corect. Haleluia";
    }else{
        document.getElementById("nume2Incorect").innerHTML="Nume incorect. Mai incearca.";
    }
}

function adaugaText(){
    checkName();
    let text = "Gabi";
    document.getElementById("persVinovata").innerHTML=text;
}
