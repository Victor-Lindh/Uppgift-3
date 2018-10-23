function sphere(radie,area,volym){    // Eftersom det viktigaste för uträkningen är radiens längd,
                                      // måste radie-variabeln stå först bland parametrarna.
    volym = (4 * Math.PI * Math.pow(radie,3)) / 3;  
    area =  4 * Math.PI * Math.pow(radie,2);       
        // Denna gång ville jag ha två decimaler i resultatet, så jag använde toFixed-metoden.
     return ("Volymen är " + volym.toFixed(2) + ", och arean är " + area.toFixed(2))
}
console.log(sphere(4));