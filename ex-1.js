const leiturasEnergia = [0, 120, 150, 0, 90, 0, 130];

const leiturasSemZero = leiturasEnergia.filter((leitura) => leitura > 0);

const somaNumeros = leiturasSemZero.reduce((acumulador, leitura) => acumulador + leitura, 0);

const media = somaNumeros / leiturasSemZero.length;

const ajusteCasasDec = media.toFixed(2);

console.log(ajusteCasasDec);
