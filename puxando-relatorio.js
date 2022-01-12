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

// let relatorio = "";

// for(let info in cliente){
//     if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
//         continue;
//     } else {

//         relatorio += `
//         ${info} ==> ${cliente[info]}, `;
//     }
// }
// console.log(relatorio);



let relatorioFuncionario = "";

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    } else {

        relatorioFuncionario += `
        ${info} ==> ${cliente[info]}, `;
    }
}
console.log(relatorioFuncionario);












