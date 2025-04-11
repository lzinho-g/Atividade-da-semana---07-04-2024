// (1) Mensagem de Olá Mundo
document.getElementById('saida-ola').innerHTML = '✨ <strong>Olá Mundo!</strong> ✨';

// (2) Soma de 2 inteiros
function calcularSoma() {
    const num1 = parseInt(document.getElementById('numero1').value) || 0;
    const num2 = parseInt(document.getElementById('numero2').value) || 0;
    const soma = num1 + num2;
    
    const resultadoElement = document.getElementById('resultado-soma');
    resultadoElement.textContent = soma;
    
    // Efeito visual
    resultadoElement.parentNode.style.animation = "pulse 0.5s";
    setTimeout(() => {
        resultadoElement.parentNode.style.animation = "";
    }, 500);
}

// Chamar a função inicialmente para mostrar o resultado padrão
calcularSoma();

// (3) Alterar propriedade por id
function alterarPorId() {
    const elemento = document.getElementById('elemento-por-id');
    elemento.style.color = '#e74c3c';
    elemento.style.fontWeight = 'bold';
    elemento.style.backgroundColor = '#fdedec';
    elemento.style.borderLeft = '4px solid #e74c3c';
    elemento.innerHTML = '✅ Elemento alterado por <strong>ID</strong> com sucesso!';
}

// (4) Alterar propriedade por name
function alterarPorName() {
    const elementos = document.getElementsByName('elemento-por-name');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = '#e8f8f5';
        elementos[i].style.color = '#1abc9c';
        elementos[i].style.borderLeft = '4px solid #1abc9c';
        elementos[i].innerHTML = '✅ Elemento alterado por <strong>NAME</strong> com sucesso!';
    }
}

// (5) Alterar propriedade por class (MODIFICADO)
function alterarPorClass() {
    const elementos = document.getElementsByClassName('mudar-cor');
    
    // Elemento 1 - Estilo roxo
    elementos[0].style.color = '#9b59b6';
    elementos[0].style.backgroundColor = '#f5eef8';
    elementos[0].style.borderLeft = '4px solid #9b59b6';
    elementos[0].innerHTML = '✅ Elemento 1 alterado por <strong>CLASS</strong> (roxo)!';
    
    // Elemento 2 - Estilo laranja
    elementos[1].style.color = '#e67e22';
    elementos[1].style.backgroundColor = '#fef5e7';
    elementos[1].style.borderLeft = '4px solid #e67e22';
    elementos[1].innerHTML = '✅ Elemento 2 alterado por <strong>CLASS</strong> (laranja)!';
}