// const cliente = {
//     nome: "João Marcos",
//     idade: 36,
//     cpf: "123543652266",
//     email: "joaomarcos@mail.com"
// }

// console.log(cliente);

// console.log("=====================================");
// cliente.fone = "9242525252";

// console.log(cliente);

// console.log("====================================");
// cliente.fone = "875254554";

// console.log(cliente);

// acessar, alterar e adicionar valores em um objeto

// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20",
//     aliado: {
//       nome: "Saruman",
//       classe: "mago"
//     },
//     status: "desaparecido"
//    }

//    delete objPersonagem.aliado

//    delete objPersonagem.aliado
//    delete objPersonagem["status"]
   
//    console.log(objPersonagem.aliado) //undefined
//    console.log(objPersonagem.status) //undefined

// const delProp = delete objPersonagem.aliado
// const delPropInexistente = delete objPersonagem["endereco"]

// console.log(delProp) //true
// console.log(delPropInexistente) //true

console.log("==================================================");
const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

console.log(pessoa)

console.log("==================================================");

pessoa.cpf = "15346626522-65";
pessoa.seguroSocial = "854321985-9";
console.log(pessoa);

console.log("==================================================");
console.log("CPF nº.: " + pessoa.cpf.substring(0, 4));






