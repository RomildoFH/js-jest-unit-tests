/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  const divisor = array.length;
  if(divisor < 1) {
    return (undefined);
  }
  let dividendo = 0;
  let kindIndex = 'number'
  for (let index in array) {
    if (typeof (array[index]) === 'number') {
      dividendo += array[index];
    } else {
      kindIndex = 'not number'
    }
  }
  if(kindIndex === 'number') {
    return (Math.round(dividendo / divisor));
  } else {
    return (undefined);
  }
};

console.log(average([-11, -5, 2]));

module.exports = average;
