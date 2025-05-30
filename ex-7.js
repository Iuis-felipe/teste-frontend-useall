function contarDiasDeDiferenca(dataInicioStr, dataFimStr) {
  const dataInicio = new Date(dataInicioStr);
  const dataFim = new Date(dataFimStr);

  if (dataFim.getTime() <= dataInicio.getTime()) {
    return 0;
  }
  let diasDeDiferenca = 0;
  let dataCorrente = new Date(dataInicio.getTime());

  while (dataCorrente.getTime() < dataFim.getTime()) {
    dataCorrente.setUTCDate(dataCorrente.getUTCDate() + 1);
    diasDeDiferenca++;
  }
  return diasDeDiferenca;
}

function calcularMulta(valorFatura, dataVencimentoStr, dataPagamentoStr) {
  const multaFixaPercentual = 0.02; // 2%
  const multaDiariaPercentual = 0.00033; // 0.033%
  const diasAtraso = contarDiasDeDiferenca(dataVencimentoStr, dataPagamentoStr);

  let valorFinal = valorFatura;
  if (diasAtraso > 0) {
    const multaFixa = valorFatura * multaFixaPercentual;
    const multaPorDias = valorFatura * multaDiariaPercentual * diasAtraso;
    valorFinal += multaFixa + multaPorDias;
  }
  return Math.round(valorFinal * 100) / 100;
}

const valor = calcularMulta(100, "2025-05-20", "2025-05-27");
console.log(`Venc: 2025-05-20, Pag: 2025-05-27. Valor final: R$ ${valor}`);
