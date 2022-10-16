//valor do produto

function aplicaDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicaJuros (valor, juros) {
    return (valor + (valor * (juros / 100)))
}


const precoEtiqueta = 100;
const formaDePagamento = 4;


//10% off
if (formaDePagamento == 1) {
    console.log('Debito selecionado com 10% off')
    console.log(aplicaDesconto(precoEtiqueta, 10).toFixed(2));
} // 15% off
else if (formaDePagamento == 2) {
    console.log('Dinheiro ou Pix selecionado com 15% off')
    console.log(aplicaDesconto(precoEtiqueta, 15).toFixed(2))
} // Preço normal
else if (formaDePagamento == 3) {
    console.log('Em até duas vezes preço normal')
    console.log(precoEtiqueta)
}  //Acrescimo de 10%
else if (formaDePagamento == 4) {
    console.log('Acima de 2x com juros de 10%')
    console.log(aplicaJuros(precoEtiqueta, 10).toFixed(2))
}


