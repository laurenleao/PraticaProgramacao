// Função que será testada pelo Jest
export function formatarPreco(preco: number): string {
  if (preco < 0) return "Preço inválido";
  return `$ ${preco.toFixed(2)}`;
}