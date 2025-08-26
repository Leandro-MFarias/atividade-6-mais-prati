export function localePrice(price) {
  return price.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })
}