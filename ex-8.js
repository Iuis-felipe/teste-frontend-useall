const faturasPendentes = [
  { clienteId: 1, valor: 120 },
  { clienteId: 2, valor: 150 },
  { clienteId: 1, valor: 130 },
  { clienteId: 3, valor: 200 },
];

function agruparFaturasPorCliente(faturas) {
  const somasPorCliente = {};

  faturas.forEach((fatura) => {
    const clienteId = fatura.clienteId;
    const valor = fatura.valor;
    somasPorCliente[clienteId] = (somasPorCliente[clienteId] || 0) + valor;
  });

  const resultadoAgrupado = Object.keys(somasPorCliente).map((clienteIdStr) => {
    return {
      clienteId: Number(clienteIdStr),
      totalPendente: somasPorCliente[clienteIdStr],
    };
  });
  return resultadoAgrupado;
}

const faturasAgrupadas = agruparFaturasPorCliente(faturasPendentes);
console.log(faturasAgrupadas);
