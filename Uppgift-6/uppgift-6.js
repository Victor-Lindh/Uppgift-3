function factorial() {
   nummer = prompt("Ange ett heltal: " ,"1-1000");  // Skapar en prompt som låter användaren skriva in ett heltal, 
    let factor = 1;                                 // lagrar talet i variabeln nummer. Variabeln factor initieras som en
                                                    // Number-typ och får grundvärdet 1.
    for (i = 1; i <= nummer; i++ ) {                // For-loopen initierar variabeln i, som får värdet 1. Så länge som i är
      factor = factor * i;                          // mindre än värdet som nummer har fått, inkrementeras i med ett.
    }                                               // factor-variabeln får ett nytt värde: det ursprungliga värdet av
      return factor;                                // factor (1) multiplicerat med vilket, värde som än finns i variabeln i.
  }
  document.write("<h3>Fakulteten är:" + factorial() + "</h3>");