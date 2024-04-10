function escolherano() {
    var max = new Date().getFullYear();
    var min = max - 99;
    var select = document.getElementById('ano');

    for (var i = min; i <= max; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.prepend(opt);
    }
}
window.onload = escolherano;

function adicionar() {
    var tipo = document.getElementById("tipo").value;
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var ano = document.getElementById("ano").value;
    var preco = document.getElementById("preco").value;


    var tabela = document.getElementById("formulario");
    var novalinha = tabela.insertRow();

    var celtipo = novalinha.insertCell(0);
    var celmarca = novalinha.insertCell(1);
    var celmodelo = novalinha.insertCell(2);
    var celano = novalinha.insertCell(3);
    var celpreco = novalinha.insertCell(4);
    var celacoes = novalinha.insertCell(5);

    celtipo.textContent = tipo;
    celmarca.textContent = marca;
    celmodelo.textContent = modelo;
    celano.textContent = ano;
    celpreco.textContent = preco;
    

    var imgeditar = document.createElement('img');
    imgeditar.src = 'img/botao-editar.png';
    imgeditar.addEventListener('click', editar);
    celacoes.appendChild(imgeditar);
}

function editar () {
   alert('editar');
}




