let cirkel = function(){

    let user = prompt("Ange cirkelns radie");//Prompt låter användaren skriva in cirkelns radie.
    let radie = user;                       // radie-variabeln lagrar resultatet från prompt.
    let diameter = radie * 2;               //  }
    let omkrets = diameter * Math.PI;       //  } Dessa tre variabler lagrar beräkningarna av uträkningen
    let area = Math.pow(radie,2) * Math.PI; //  }
    
// Dialogruta med resultatet. Använde mig av Math.round-metoden för att skriva ut närmaste heltal.
alert("Omkretsen är: " + Math.round(omkrets) + "\nArean är: " + Math.round(area));
}
cirkel();