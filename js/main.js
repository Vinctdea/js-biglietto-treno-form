// variabili
const nome = document.getElementById("nome");
const kmPercorsi = document.getElementById("km");
const eta = document.getElementById("eta");
const genera = document.getElementById("conf");
const annulla = document.getElementById("ann");
const attiva = document.querySelector(".calc_prezzo");
let prezzoKm = 0.21;
let nCarrozza = Math.floor(Math.random() * 10);
let nBiglietto = Math.floor(Math.random() * 1000);

// evento click preleva dati
// calcola il prezzo
genera.addEventListener("click",
    function(){
        attiva.classList.add("active")
        let valoreNome = nome.value;
        let valoreKm = parseInt(kmPercorsi.value) ;
        let valoreEta= eta.value;
        
        if (valoreEta === "minorenne"){
            prezzoKm = (0.21- ((0.21*20)/100));
            
        } else if (valoreEta === "over65" ){
            prezzoKm = (0.21- ((0.21*40)/100));
        }
        
        console.log("nome: " + valoreNome,"età: " + valoreEta, "km: " + valoreKm);
        let risultato = (prezzoKm * valoreKm).toFixed(2);
        console.log("prezzo biglietto: " + risultato);
        document.getElementById("titolo").innerHTML = valoreNome;
        document.getElementById("tariffa").innerHTML = valoreEta;
        document.getElementById("carrozza").innerHTML = nCarrozza ;
        document.getElementById("n_bigli").innerHTML = nBiglietto;
        document.getElementById("prezzo").innerHTML = risultato;

    }
)

// stampa risultato biglietto


// refresh al click annulla
annulla.addEventListener("click",
    function(){
        window.location.reload()
    }
)