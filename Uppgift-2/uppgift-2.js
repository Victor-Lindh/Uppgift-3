function triangel(sida1, sida2){  // De två sidorna i rektangeln får här sina variabler, sida1 och sida2.
    return Math.sqrt(Math.pow(sida1, 2) + Math.pow(sida2, 2)); // hypotenusan blir resultatet av de två sidorna upphöjt till 2.
  }
  console.log(triangel(8, 6));