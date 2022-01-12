// const cliente = {
//     nome: "João Marcos",
//     idade: 36,
//     cpf: "123543652266",
//     email: "joaomarcos@mail.com",
//     fones: ['5591235498', '5521988743124'],
//     dependentes: [
//         {
//             nome: "Ellen",
//             parentesco: "Filha",
//             dataDeNascimento: "06/12/2006"},
//         {   
//             nome: "Poliane",
//             parentesco: "Esposa",
//             dataDeNascimento: "24/04/1988"
//         }
//     ],
//     saldo: 100,
//     depositar: function(valor){
//         console.log(`===>>> O valor depositado é R$ ${valor}`);
//         this.saldo += valor;
//     }
// }

// console.log("===>>> Saldo Atual R$ " + cliente.saldo);
// cliente.depositar(30);
// console.log("===>>> Saldo Atualizado R$ " + cliente.saldo);

// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20"
//    };


// const objPersonagem2 = objPersonagem;
// objPersonagem2.nome = "Gandalf, o Cinzento";

// console.log(objPersonagem.nome); //Gandalf, o Cinzento
// console.log(objPersonagem2.nome); //Gandalf, o Cinzento


// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20"
//    }
   
//    const objPersonagem2 = Object.create(objPersonagem)
//    objPersonagem2.nome = "Gandalf, o Cinzento"
   
//    console.log(objPersonagem.nome) //Gandalf
//    console.log(objPersonagem2.nome) //Gandalf, o Cinzento


// Um objeto pode conter um array de objetos, o que nos permite
// invocar desde funções comuns até arrays como filter().
// const cliente = {
//     nome: "José",
//     idade:33,
//     email: "jose@email.com",
//     telefones: ["+550033338888", "+550033334444"]
//    }
//     cliente.animalEstimacao = [{
//     nome: "Kripto",
//     raça: "Cão",
//     vacinado: true
//    }]
//     cliente.animalEstimacao.push({
//     nome: "Lex",
//     raça: "Gato",
//     vacinado: false
//    })

// console.log(cliente);



const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com"
   }

console.log(colecionador.nome);
console.log(colecionador["nome"]);

adicionarTipo:function(propriedade,tipo){
    this[propriedade].push(tipo);
  }

  for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i);
  }







1


