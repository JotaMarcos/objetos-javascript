// /*
//     JSON é um formato criado para transferência de dados, sendo assim é necessário convertê-lo para um objeto JavaScript 
//     para que os dados possam ser utilizados em um programa. Para isso, existem dois métodos nativos:

//     JSON.parse(): converte JSON para um objeto JavaScript;
//     JSON.stringify(): converte um objeto JavaScript para o formato JSON.
// */

// // const jsonLivro = JSON.stringify({
// // const jsonLivro = JSON.stringify({
// //     id: 50,
// //     titulo: "Primeiros Passos com NodeJS",
// //     autor: "João Rubens",
// //     categoria: "programação",
// //     versoes: ["ebook", "impresso"]
// //    });
   
// // console.log(jsonLivro);

// // console.log();

// // const objLivro = JSON.parse(jsonLivro)
// // // console.log(objLivro)
// // console.table(objLivro);


// const paciente = {
//     nome: "James T.",
//     idade:30,
//     email: "jt@email.com",
//     identicacao: "Alpha01259859",
//     funcao:"comandante",
//     peso:80.1,
//     altura:1.80,
//     calcularIMC:function(){
//           return (this.peso/(Math.pow(this.altura,2)));
//     },
//     nomeCompleto:function(){
//       console.log(this.nome);
//     }
//    }

// console.log(paciente);
// console.log("===========================================================================");

// let dados = "";
// for (let info in paciente) {
//     if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
//         continue
//     } else {
//         dados += `
//         ${info} ==> ${paciente[info]}`}
//     };

// console.log(dados);
    
// console.log("===========================================================================");
    
//     for(let info in paciente){
//         console.log(info);
//     }



























