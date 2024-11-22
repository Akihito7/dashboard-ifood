export function formatToMoney(value : any) : string{
  return Number(value).toLocaleString('pt-br', {
    currency : 'BRL',
    style : 'currency'
  })
}