const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof(productDetails)).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
  });    
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect((productDetails('Alcool gel', 'Máscara')).length).toBe(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof((productDetails('Alcool gel', 'Máscara'))[0])).toBe('object');
    expect(typeof((productDetails('Alcool gel', 'Máscara'))[1])).toBe('object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect((productDetails('Alcool gel', 'Máscara'))[0]).not.toEqual((productDetails('Alcool gel', 'Máscara'))[1]);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    expect((productDetails('Alcool gel', 'Máscara'))[0].details.productId).toMatch('123');
    expect((productDetails('Alcool gel', 'Máscara'))[1].details.productId).toMatch('123');
  });  
});
