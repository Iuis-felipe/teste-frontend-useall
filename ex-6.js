function gerarCodigoFatura(numeroCliente, numeroFatura) {
  const hoje = new Date();

  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  const dataAtualFormatada = `${ano}${mes}${dia}`;
  return `${numeroCliente}-${numeroFatura}-${dataAtualFormatada}`;
}
const codigo = gerarCodigoFatura(12345, 67890);
console.log(codigo);
