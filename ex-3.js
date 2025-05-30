const listaClientes = [
  { nome: "Ana", consumo: 400 },
  { nome: "Bruno", consumo: 650 },
  { nome: "Carla", consumo: 200 },
];

function clientesPorConsumo(clientes) {
  clientes.forEach((cliente) => {
    if (cliente.consumo >= 600) {
      cliente.categoria = "Alto";
    } else if (cliente.consumo >= 300) {
      cliente.categoria = "Médio";
    } else {
      cliente.categoria = "Baixo";
    }
  });
  return clientes;
}

const clientesComCategoria = clientesPorConsumo(listaClientes);
console.log(clientesComCategoria);
