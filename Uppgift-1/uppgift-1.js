let Person = function (namn, epost, mobil, adress) { // Steg 1: skapa objektet Person med 4 egenskaper,
    this.namn = namn;                                // namn, epost, mobil och adress.
    this.epost = epost,
    this.mobil = mobil;
    this.adress = adress;
    this.print = function(){ // metoden print skapas, i return nedan bestäms vad som ska skrivas ut i meddelandet.                           Här borta får this-metoden ytterligare en notation, adress, vilket blir till ett nytt objekt längre ned.
    return("Personen heter " + this.namn + ", e-postadressen är " + this.epost + ", telefonnumret är " + this.mobil + ". " + "Adressen är " + this.adress.gatuadress + ", postnumret är " + this.adress.postnummer + ", ortnamnet är " +this.adress.ort + ".");
    };
}
let Adress = function (gatuadress, postnummer, ort){    // Adress blir här ett eget objekt, med 3 
        this.gatuadress = gatuadress;                   // egenskaper; gatuadress, postnummer och ort.
        this.postnummer = postnummer;
        this.ort = ort;
}  // nedan skapas två nya objekt med Person-konstruktionen som mall. Efter att de tre första egenskaperna i Person-objektet fått sina argument, får även objekten sina Adress-argument
    let person1 = new Person("Victor Lindh", "victorlindh@hotmail.com", "0737662592", new Adress("Helgdagsvägen 15", "12360","Farsta")); // skickade till sig via (new Adress).
    let person2 = new Person("Sherlock Holmes", "sherlock@detective.com", "'Written letters only.'", new Adress("221 Baker Street", "12345", "London"));

    console.log(person1.print());
    console.log(person2.print());