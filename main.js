
/* Quando l’utente fa click sul bottone submit del form (ricordati event.preventDefault()),
il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.

/*L'utente commissiona il lavoro il cui prezzo orario varia in questo modo:
● per sviluppo backend il prezzo orario è di 20.50€/l’ora
● per sviluppo frontend il prezzo orario è di 15.30€/l’ora
● per analisi progettuale il prezzo orario è di 33.60€/l’ora */



/*Il prezzo finale è dato dal numero di ore per prezzo orario.
Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro: 10 ore. */


/*L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32,
JANJC63, PWKCN25, SJDPO96, POCIE24. */ 

/*Se il codice promozionale è valido, l'utente ha diritto ad uno sconto del 25% sul
prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice
non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2
decimali e il simbolo dell’euro). */ 

// salvare in una costante gli elementi del DOM che competono al risultato
const workElement = document.getElementById ('inputWork');
const promotionalCodesElement = document.getElementById('inputPromotionalCodes');

//salvare in una costante le ore di lavoro necessarie
const timePerProject = 10;

//salvare in una costante i prezzi orari
const backendDevelopPerHour = 20.50;
const frontendDevelopPerHour = 15.30;
const projectAnalysisPerHour = 33.60;

// salvare in un array i codici sconto che il cliente potrebbe utilizzare + costante sconto 25%
let promotionalCodes = ['YHDNU32','JANJC63','PWKCN25','SJDPO96','POCIE24'];
const promotion = 0.75 //sconto 25%

//salvare in una costante l'elemento form con id estimateRequest da utilizzare nella funzione
const estimateRequestElement = document.getElementById('estimateRequest');

//salvare in una costante l'elemento contenente il risultato in pagina
const resultElement = document.getElementById('finalPrice');


estimateRequestElement.addEventListener('submit', function(event) {
    event.preventDefault(); //blocca refresh continuo della pagina
    let selectedInputWork = parseInt(workElement.value);
    const discount = (promotionalCodesElement.value).toUpperCase();
    //VERIFICA
    console.log(selectedInputWork, discount);

    if(selectedInputWork === 1){
        selectedInputWork = (backendDevelopPerHour * timePerProject).toFixed(2);
    }
    else if(selectedInputWork === 2){
        selectedInputWork = (frontendDevelopPerHour * timePerProject).toFixed(2);
    }
    else if (selectedInputWork === 3) {
        selectedInputWork = (projectAnalysisPerHour * timePerProject).toFixed(2);
    }
    //VERIFICA 
    console.log(selectedInputWork);

    if(promotionalCodes.includes(discount)){
        selectedInputWork = (selectedInputWork * promotion).toFixed(2);
    }
    //VERIFICA 
    console.log(selectedInputWork);

    resultElement.innerHTML = `Final Price <br> € ${selectedInputWork}`;



}
)
