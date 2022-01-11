const cliente = {
    nome: "João Marcos",
    idade: 36,
    cpf: "123543652266",
    email: "joaomarcos@mail.com"
}

// Array para acessar as chaves do objeto Cliente
const chaves = ["nome","idade", "cpf", "email"];
console.log("Nome do Cliente: " + cliente[chaves[0]]);
console.log("============================================");

// Percorrer todo o array chave para chamar as informações do objeto cliente
chaves.forEach(info => console.log(cliente[info]));

console.log("============================================");
console.log(cliente["nome"]);
console.log("============================================");
console.log(cliente["contas"]);



