const cliente = {
    nome: "João Marcos",
    idade: 36,
    cpf: "123543652266",
    email: "joaomarcos@mail.com",
    fones: ['5591235498', '5521988743124'],
    dependentes: [{
        nome: "Ellen",
        parentesco: "Filha",
        dataDeNascimento: "06/12/2006"
    }]
}

cliente.dependentes.push({
    nome: "Poliane",
    parentesco: "Esposa",
    dataDeNascimento: "24/04/1988"
});

console.log(cliente);

const parenteMaisNova = cliente.dependentes.filter( dependente => 
    dependente.dataDeNascimento === "06/12/2006");

console.log("A dependente mais nova é: " + parenteMaisNova[0].nome);