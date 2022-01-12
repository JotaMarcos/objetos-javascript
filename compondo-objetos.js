const cliente = {
    nome: "João Marcos",
    idade: 36,
    cpf: "123543652266",
    email: "joaomarcos@mail.com"
};
cliente.dependentes = {
    nome: "Ellen",
    parentesco: "Filha",
    dataDeNascimento: "06/12/2006"
};

console.log(cliente);

cliente.dependentes.nome = "Ellen Cardoso Duarte";

console.log(cliente);







