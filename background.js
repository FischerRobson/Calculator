    let inicio = 0
    var operacao = 0
    var resultado = 0
    var v1 = 0
    var v2 = 0
    var oper = 0

    //concatenacao e escrita dos numeros
    function calcNum(num) {
        if(inicio == 0){
            document.calcform.visor.value = ''
            inicio = 1
        }else{
            document.calcform.visor.value = document.calcform.visor.value + num
        }
    }

    function calcLimpar(){
        document.calcform.visor.value = ''
        document.calcform.hist.value = ''
        inicio = 1

    }

    //atribui a operacao e grava vlr1
    function calcParse(operacao) {
        v1 = parseFloat(document.calcform.visor.value) 
        document.calcform.visor.value = ''
        if(operacao == 1){
            document.calcform.hist.value = v1 + " + "
        }
        else if(operacao == 2){
            document.calcform.hist.value = v1 + " - "
        }
        else if(operacao == 3){
            document.calcform.hist.value = v1 + " * "
        }
        else if(operacao == 4){
            document.calcform.hist.value = v1 + " / "
        }
        
        oper = operacao
    }

    function calcRes(){
        v2 = parseFloat(document.calcform.visor.value) 

        if(oper == 1){ 
            document.calcform.hist.value += v2 + " ="          
            resultado = v1 + v2
        }
        else if(oper == 2){
            document.calcform.hist.value += v2 + " ="
            resultado = v1 - v2
        }
        else if(oper == 3){
            document.calcform.hist.value += v2 + " ="
            resultado = v1 * v2
        }
        else if(oper == 4){
            document.calcform.hist.value += v2 + " ="
            resultado = v1 / v2
        }

        document.calcform.visor.value = resultado
    }




    

