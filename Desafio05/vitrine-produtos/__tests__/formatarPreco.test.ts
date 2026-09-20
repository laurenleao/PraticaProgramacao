import { formatarPreco } from '../utils/formatarPreco';

describe('Função formatarPreco', () => {
  // Teste 1
  it('deve formatar o número corretamente com duas casas decimais e o cifrão', () => {
    expect(formatarPreco(109.95)).toBe('$ 109.95');
    expect(formatarPreco(10)).toBe('$ 10.00');
  });

  // Teste 2
  it('deve retornar "Preço inválido" para números negativos', () => {
    expect(formatarPreco(-15)).toBe('Preço inválido');
  });
});