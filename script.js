const numeleTau = document.getElementById("numeleTau");
const numelePer2 = document.getElementById("numelePer2");
const btnSubmit = document.getElementById("btnSubmit");
const stabPersVin = document.getElementById("stabPersVin");
const btnRefresh = document.getElementById("refresh");

btnSubmit.addEventListener("click", checkName);
stabPersVin.addEventListener("click", adaugaText);
btnRefresh.addEventListener("click", onReset);


const numeCorecte = ["Cosmin", "Gabi", "Gabriela", "Calin", "cosmin", "calin", "gabi", "gabriela", "Chong", "George"];


function checkName(){
    if (numeCorecte.indexOf(numeleTau.value) !=-1){
        document.getElementById("nume1Incorect").innerHTML="Nume corect! Felicitari iti stii numele.";
    }else{
        document.getElementById("nume1Incorect").innerHTML="Nume incorect. Hmmm...";
    }
    
    if(numeCorecte.indexOf(numelePer2.value) !=-1){
        document.getElementById("nume2Incorect").innerHTML="Nume corect. Haleluia";
    }else{
        document.getElementById("nume2Incorect").innerHTML="Nume incorect. Mai incearca.";
    }
}

let x = Math.floor(Math.random()*numeCorecte.length);

function adaugaText(){
    let text = "In urma unor analize complicate, persoana vinovata este..."+ numeCorecte[x];
    document.getElementById("persVinovata").innerHTML=text;
    document.getElementById("refresh").disabled=false;
}

function onReset(){
    window.location.reload();
}

