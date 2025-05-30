function calcularFatura(consumoTotal) {
  const taxaTarifa1 = 0.5;
  const taxaTarifa2 = 0.75;
  const taxaTarifa3 = 1.0;

  const limiteFaixa1 = 100;
  const limiteFaixa2 = 500;

  let valorTotal = 0;
  if (consumoTotal <= 0) {
    return 0;
  }
  if (consumoTotal <= limiteFaixa1) {
    valorTotal = consumoTotal * taxaTarifa1;
  } else if (consumoTotal <= limiteFaixa2) {
    valorTotal = limiteFaixa1 * taxaTarifa1 + (consumoTotal - limiteFaixa1) * taxaTarifa2;
  } else {
    valorTotal =
      limiteFaixa1 * taxaTarifa1 +
      (limiteFaixa2 - limiteFaixa1) * taxaTarifa2 +
      (consumoTotal - limiteFaixa2) * taxaTarifa3;
  }
  return valorTotal;
}

console.log(`R$ ${calcularFatura(600)}`);
// Vale mencionar que no enuncioado o Reultado conta com R$ 100 * 0,50 = 100, sendo que na real é 50.
// por isso o valor final é R$ 450 na resolução.