const listaDeClientes = [
  { nome: "João", faturasPendentes: 2, valorTotalPendente: 300 },
  { nome: "Maria", faturasPendentes: 0, valorTotalPendente: 0 },
  { nome: "Pedro", faturasPendentes: 1, valorTotalPendente: 150 },
];

function filtrarClientesInadimplentes(clientes) {
  return clientes.filter((cliente) => cliente.faturasPendentes >= 1);
}

const clientesInadimplentes = filtrarClientesInadimplentes(listaDeClientes);
console.log(clientesInadimplentes);
