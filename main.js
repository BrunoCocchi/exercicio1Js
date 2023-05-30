let num1 = prompt('digite um número aqui.');
let num2 = prompt('digite outro número aqui.');
let soma = Number(num1) + Number(num2);
 console.log(typeof soma)

if (soma)  {
    alert('A soma dos dois números é: ' + soma)
}
else {
    alert('Você não colocou números, recarregue a página e tente novamente.')
}

