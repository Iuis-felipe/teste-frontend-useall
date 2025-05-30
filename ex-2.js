const consumos = [100, 320, 340, 290, 310, 305, 250]; //sequencias possiveis: 320, 340 (2) e 310, 305 (2). 
const resultado = maiorSequenciaConsumo(consumos);

function maiorSequenciaConsumo(medicoesHorarias) {
  let maiorSequencia = 0;
  let sequenciaAtual = 0;
  const limiteConsumo = 300;
  for (let i = 0; i < medicoesHorarias.length; i++) {
    const consumo = medicoesHorarias[i];
    if (consumo > limiteConsumo) {
      sequenciaAtual++;
    } else {
      if (sequenciaAtual > maiorSequencia) {
        maiorSequencia = sequenciaAtual;
      }
      sequenciaAtual = 0;
    }
  }
  if (sequenciaAtual > maiorSequencia) {
    maiorSequencia = sequenciaAtual;
  }
  return maiorSequencia;
}

console.log(`Para a entrada [${consumos.join(", ")}], o comprimento da maior sequência é: ${resultado}`);

// Vale mencionar que a saída esperada no exercicio está como 3, mas a maior sequencia que tem é de 2
// D:
