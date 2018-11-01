function randomDice(){                          // Funktionen randomDice, innehåller en tom array (talArr1), en for-loop
    let talArr1 = [];                           // som inkrementerar upp till 1000 gånger. I for-loopen finns en 
    for (let i = 0; i < 1000; i++) {            // Math.random-metod (som avger en siffra mellan 1 och 6).
        talArr1.push(Math.ceil(Math.random() * 6));     // Metoden pushas sedan in i den tomma arrayen talArr1.          
    }
    return talArr1;
}
function print(){
                                                            
    let talArr2 = [0,0,0,0,0,0];                                    // En ny array med 6 element (alla med värdet 0) skapas.
    for (let i = 0; i < randomDice().length; i++) {                 // For-loopen ska jämföra i-variabeln med längden av
        switch (randomDice()[i]) {                                  //  randomDice()-funktionen och inkrementera i med 1 så
                                                                    //   länge som i fortsätter att inkrementera - dvs
            case 1:                                                 //   1000 gånger.
            talArr2[0]++;   break;                             
                                                        
            case 2:
            talArr2[1]++;   break;
            
            case 3:
            talArr2[2]++;   break;                       // Switch-satsen ska ta randomDice()-funktionen och matcha värdet
                                                        // i index-variabeln och inkrementera motsvarande index-nummer
            case 4:                                    // i tal2Arr-arrayen med 1 för varje gång siffran i fråga slumpas fram.
            talArr2[3]++;   break;
            
            case 5:
            talArr2[4]++;   break;
            
            case 6:
            talArr2[5]++;   break;
        }
    }
    let tabell = "";                                    
    tabell += "Av 1000 kastade tärningar blir fördelningen följande:\n";
    tabell += "\n";
    tabell += "Antal ettor: " +  talArr2[0] + "\n";                 // Tabellens struktur. Först anges vilken siffra på
    tabell += "Antal tvåor: " +  talArr2[1] + "\n";                 // tärningen som ska redovisas, 1-6 har en alla egna rader.
    tabell += "Antal treor: " +  talArr2[2] + "\n";                 // Motsvarande indexvärde i talArr2-arrayen skrivs ut.
    tabell += "Antal fyror: " +  talArr2[3] + "\n";
    tabell += "Antal femmor: "+  talArr2[4] + "\n";
    tabell += "Antal sexor: " +  talArr2[5] + "\n";
    console.log(tabell);
}
print();