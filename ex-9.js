const pagamentosDoDia = [50.0, 120.5, 30.0, 80.25];
const resultadoArrecadacao = processarPixDoDia(pagamentosDoDia);

function processarPixDoDia(pagamentosPix) {
  const totalArrecadado = pagamentosPix.reduce((somaAcumulada, valorPagamento) => {
    return somaAcumulada + valorPagamento;
  }, 0);

  const quantidadeTransacoes = pagamentosPix.length;

  return {
    totalArrecadado: totalArrecadado,
    quantidadeTransacoes: quantidadeTransacoes,
  };
}

console.log("Resultado:")
console.log(`Total arrecadado: R$ ${resultadoArrecadacao.totalArrecadado.toFixed(2)}`);
console.log(`Transações: ${resultadoArrecadacao.quantidadeTransacoes}`);
