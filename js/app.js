class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }


    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false;
            }
        }
        return true;
    }
}


class Bd{
    constructor(){
        let id = localStorage.getItem('id');

        if(id === null){
            localStorage.setItem('id', 0);
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1;
    }
    gravar(d){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d));
        localStorage.setItem('id', id);
    }
}

let bd = new Bd();



function cadastrarDespesa(){
    let ano = document.getElementById("ano");
    let mes = document.getElementById("mes");
    let dia = document.getElementById("dia");
    let tipo = document.getElementById("tipo");
    let descricao = document.getElementById("descricao");
    let valor = document.getElementById("valor")

    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);

    if(despesa.validarDados()){
        bd.gravar(despesa);
        $('#modalRegistarDespesa').modal('show');

        let div_texto = document.getElementById("div-texto");
        let label_h5 = document.getElementById("exampleModalLabel");
        let div_msg = document.getElementById("div-msg");
        let btn = document.getElementById("btn");

        let msg = "Registro inserido com sucesso";
        let msg_div = "Despesa registrada com sucesso!";
        let msg_btn = "Voltar";

        div_texto.classList.add("text-success");
        div_texto.classList.remove("text-danger");
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-success");

        btn.textContent = msg_btn;
        label_h5.textContent = msg;
        div_msg.textContent = msg_div;

    }else{
        $('#modalRegistarDespesa').modal('show');

        let div_texto = document.getElementById("div-texto");
        let label_h5 = document.getElementById("exampleModalLabel");
        let div_msg = document.getElementById("div-msg");
        let btn = document.getElementById("btn");

        let msg = "Erro na gravação";
        let msg_div = "Preencha todos os campos obrigatórios!";
        let msg_btn = "Voltar e corrigir";
        


        div_texto.classList.add("text-danger");
        btn.classList.add("btn-danger");

        btn.textContent = msg_btn;
        label_h5.textContent = msg;
        div_msg.textContent = msg_div;
    }
    
}
