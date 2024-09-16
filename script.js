//Escreva um programa em JS que funcione como um conversor de medidas. O programa deverá pedir por um valor em metrôs e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

//milímetro (mm)
//centrímetro (cm)
//decímetro (dm)
//decâmetro (barragem)
//hectômetro (hm)
//milhas (km)
//O programa deve então converter a medida de acordo com a opção escolhida e escolher o resultado.

//O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis (dica do prof: use o break e o padrão para isso).
let meter = prompt(`Digite um valor em metros (Ex: 2.5)`)
let option = prompt("Agora, selecione uma opção abaixo para converter, entre: milímetro (mm), centrímetro (cm), decímetro (dm), decâmetro (dam), hectômetro (hm)")
switch (option) {
  case (`1`):
     alert(`seu valor em milímetros é: ${meter*1000} `)
    break
  case (`2`):
    alert(`seu valor em centímetros é: ${meter*100} `)
break
  case ('3'):
alert(`seu valor em decímetros é: ${meter*10} `)
break
  case (`4`):
alert(`seu valor em decâmetros é: ${meter/10} `)
break
  case (`5`):
alert(`seu valor em hectômetros é: ${meter/100} `)
break
  case (`6`):
alert(`seu valor em quilômetros é: ${meter/1000} `)
break 
  default:
    alert(`Opção inválida!`)
}
