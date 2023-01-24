let numeleTau = document.getElementById("numeleTau").value;
let numelePer2 = document.getElementById("numelePer2").value;
let btnSubmit = document.getElementById("btnSubmit");
let stabPersVin = document.getElementById("stabPersVin");

btnSubmit.addEventListener("click", checkName);
stabPersVin.addEventListener("click", adaugaText);

let numeCorecte = ["Cosmin", "Gabi", "Gabriela", "Calin", "cosmin", "calin", "gabi", "gabriela", "Chong", "George"]




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

let x = Math.floor(Math.random()*numeCorecte.length);


function adaugaText(){
    let text = "In urma unor analize complicate, persoana vinovata este..."+ numeCorecte[x];
    document.getElementById("persVinovata").innerHTML=text;
}
