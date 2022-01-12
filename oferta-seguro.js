const cliente = {
    nome: "João Marcos",
    idade: 36,
    cpf: "123543652266",
    email: "joaomarcos@mail.com",
    fones: ['5591235498', '5521988743124'],
    dependentes: [
        {
            nome: "Ellen",
            parentesco: "Filha",
            dataDeNascimento: "06/12/2006"},
        {   
            nome: "Poliane",
            parentesco: "Esposa",
            dataDeNascimento: "24/04/1988"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        console.log(`===>>> O valor depositado é R$ ${valor}`);
        this.saldo += valor;
    }
}


function oferecerSeguro(obj){
    const propostaClientes = Object.keys(obj);
    if(propostaClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);









