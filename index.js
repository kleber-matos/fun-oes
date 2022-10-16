//valor do produto

function verificaPagamentos(precoEtiqueta, formaDePagamento) {
    //10% off
 if (formaDePagamento == 1) {
     console.log('Debito selecionado com 10% off')
     console.log(precoEtiqueta - (precoEtiqueta * 0.1).toFixed(0))
 } // 15% off
 else if (formaDePagamento == 2) {
     console.log('Dinheiro ou Pix selecionado com 15% off')
     console.log(precoEtiqueta - (precoEtiqueta * 0.15).toFixed(2))
 } // Preço normal
 else if (formaDePagamento == 3) {
     console.log('Em até duas vezes preço normal')
     console.log(precoEtiqueta)
 }  //Acrescimo de 10%
 else if (formaDePagamento == 4){
     console.log('Acima de 2x com juros de 10%')
     console.log(precoEtiqueta + (precoEtiqueta * 0.1))
 } 
 }
 
 verificaPagamentos(100, 1)