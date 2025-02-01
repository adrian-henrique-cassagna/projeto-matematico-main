operacaoFracao;

function soma(){
    let v1 = parseFloat(document.getElementById('valor1').value);
    let v2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado').innerHTML = `${v1 + v2}`;

    if(isNaN(v1) || isNaN(v2)){
        document.getElementById('resultado').style.display = 'none';
    }
    
    else{
        document.getElementById('resultado').style.opacity = '1';
        document.getElementById('resultado').style.marginBottom = '225px';
        document.getElementById('resultado').style.marginLeft = '900px';
        document.getElementById('resultado').style.transition = 'margin-bottom 1.5s, opacity 1.5s';
    }
}
function subtrair(){
    let v1 = parseFloat(document.getElementById('valor1').value);
    let v2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado').innerHTML = `${v1 - v2}`;

    if(isNaN(v1) || isNaN(v2)){
        document.getElementById('resultado').style.opacity = '0';
        document.getElementById('resultado').style.marginBottom = '0';
    }
    else{
        document.getElementById('resultado').style.opacity = '1';
        document.getElementById('resultado').style.marginBottom = '225px';
        document.getElementById('resultado').style.marginLeft = '900px';
        document.getElementById('resultado').style.transition = 'margin-bottom 1.5s, opacity 1.5s';
    }
}

function multiplicar(){
    let v1 = parseFloat(document.getElementById('valor1').value);
    let v2 = parseFloat(document.getElementById('valor2').value);   

    document.getElementById('resultado').innerHTML = `${v1 * v2}`;

    if(isNaN(v1) || isNaN(v2)){
        document.getElementById('resultado').style.opacity = '0';
        document.getElementById('resultado').style.marginBottom = '0';
    }
    else{
        document.getElementById('resultado').style.opacity = '1';
        document.getElementById('resultado').style.marginBottom = '225px';
        document.getElementById('resultado').style.transition = 'margin-bottom 1.5s, opacity 1.5s';
    }
}
function dividir(){
    let v1 = parseFloat(document.getElementById('valor1').value);
    let v2 = parseFloat(document.getElementById('valor2').value);   

    document.getElementById('resultado').innerHTML = `${v1 / v2}`;

    if(isNaN(v1) || isNaN(v2) || v1 === 0 || v2 === 0){
        document.getElementById('resultado').style.opacity = '0';
        document.getElementById('resultado').style.marginBottom = '0';
        document.getElementById('resultado').innerHTML = ''
    }
    else{
        document.getElementById('resultado').style.opacity = '1';
        document.getElementById('resultado').style.marginBottom = '225px';
        document.getElementById('resultado').style.marginLeft = '900px';
        document.getElementById('resultado').style.transition = 'margin-bottom 1.5s, opacity 1.5s';
    }
}

function porcentagem(){
    let v1 = parseFloat(document.getElementById('valor1').value);
    let v2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado').innerHTML = `${v2 / 100 * v1}`;

    if(isNaN(v1) || isNaN(v2)){
        document.getElementById('resultado').style.opacity = '0';
        document.getElementById('resultado').style.marginBottom = '0';
    }
    else{
        document.getElementById('resultado').style.opacity = '1';
        document.getElementById('resultado').style.marginBottom = '225px';
        document.getElementById('resultado').style.marginLeft = '900px';
        document.getElementById('resultado').style.transition = 'margin-bottom 1.5s, opacity 1.5s';
    }
}
function fracao(){
    let n1 = parseFloat(document.getElementById('valor1').value);
    let n2 = parseFloat(document.getElementById('valor2').value);
    let n3 = parseFloat(document.getElementById('valor3').value);
    let n4 = parseFloat(document.getElementById('valor4').value);

    operacaoFracao = parseInt(prompt('digite a operação que deseja fazer sendo 1 para soma, 2 para subtração'))

    if(operacaoFracao === 1){

        document.getElementById('form-fracao').style.opacity = '1';
        document.getElementById('form-fracao').style.marginLeft = '500px';
        document.getElementById('form-fracao').style.transition = 'opacity 1s, margin-left 1.5s';

        document.getElementById('form-soma').style.marginLeft = '325px';
        document.getElementById('form-soma').style.transition = 'margin-left 1.75s';

        document.getElementById('resultado-fracao').style.opacity = '0'
        document.getElementById('resultado-fracao').style.transition = 'opacity 1s'

        document.getElementById('resultado').style.marginBottom = '725px';
        document.getElementById('resultado').style.marginLeft = '900px';
        document.getElementById('resultado').style.opacity = '1';
        document.getElementById('resultado').style.fontSize = '75px';
        document.getElementById('resultado').innerHTML = '+';
        document.getElementById('resultado').style.transition = 'margin-bottom 1.5s, opacity 1s, font-size 1s';

        document.getElementById('calcular').style.opacity = '1';
        document.getElementById('calcular').style.transition = 'opacity 0.5s';
    }

    if(operacaoFracao === 2){

        document.getElementById('form-fracao').style.opacity = '1';
        document.getElementById('form-fracao').style.marginLeft = '500px';
        document.getElementById('form-fracao').style.transition = 'opacity 1s, margin-left 1s';

        document.getElementById('form-soma').style.marginLeft = '325px';
        document.getElementById('form-soma').style.transition = 'margin-left 1.2s';

        document.getElementById('resultado-fracao').style.opacity = '0'
        document.getElementById('resultado-fracao').style.transition = 'opacity 1s'

        document.getElementById('resultado').style.marginBottom = '725px';
        document.getElementById('resultado').style.marginLeft = '900px';
        document.getElementById('resultado').style.opacity = '1';
        document.getElementById('resultado').style.fontSize= '75px';
        document.getElementById('resultado').innerHTML = '-';
        document.getElementById('resultado').style.transition = 'margin-bottom 1s, opacity 1s, font-size 1s';

        document.getElementById('calcular').style.opacity = '1';
        document.getElementById('calcular').style.transition = 'opacity 0.5s';
    }
        
}
function calcular(){
    let n1 = parseFloat(document.getElementById('valor1').value);
    let n2 = parseFloat(document.getElementById('valor2').value);
    let n3 = parseFloat(document.getElementById('valor3').value);
    let n4 = parseFloat(document.getElementById('valor4').value);

    document.getElementById('resultado-fracao').style.marginLeft = '450px';
    document.getElementById('resultado-fracao').style.opacity = '1';
    document.getElementById('resultado-fracao').style.transition = 'margin-left 1.25s, opacity 1s';

    document.getElementById('form-fracao').style.marginLeft = '225px';

    document.getElementById('form-soma').style.marginLeft = '50px';

    document.getElementById('calcular').style.opacity = '0';

    document.getElementById('resultado').style.marginLeft = '625px';
    document.getElementById('resultado').style.transition = 'margin-left 1s';

    if(isNaN(n1) || isNaN(n2) ||  isNaN(n3) || isNaN(n4) || n1 === 0 || n2 === 0 || n3 === 0 || n4 === 0){
        
        document.getElementById('resultado-fracao').style.opacity = '1';
    }

    else{
        if(operacaoFracao === 1){
            document.getElementById('resultado-fracao').style.display = 'block';
            document.getElementById('resultado-02').value = `${n4 *n2}`;
            document.getElementById('resultado-01').value = `${(n1 * n4) + (n3 *n2)}`;
        }

        else{
            document.getElementById('resultado-fracao').style.display = 'block';
            document.getElementById('resultado-02').value = `${n4 *n2}`;
            document.getElementById('resultado-01').value = `${(n1 * n4) - (n3 * n2)}`;
        }
    }
}
function limpar(){
    document.getElementById('valor1').value = '0'
    document.getElementById('valor2').value = '0'
    document.getElementById('valor3').value = '0'
    document.getElementById('valor4').value = '0'

    document.getElementById('resultado-01').value = '0'
    document.getElementById('resultado-02').value = '0'

    document.getElementById('form-fracao').style.opacity = '0';
    document.getElementById('form-fracao').style.marginLeft = '0';

    document.getElementById('resultado').style.opacity = '0';
    document.getElementById('resultado').style.marginBottom = '1px';
    document.getElementById('resultado').style.transition = 'opacity 0.5s, margin-bottom 0.75s';

    document.getElementById('resultado-fracao').style.marginLeft = '';

    document.getElementById('form-soma').style.marginLeft = '0';

    document.getElementById('calcular').style.opacity = '0';

    document.getElementById('resultado-fracao').style.opacity = '0';
}