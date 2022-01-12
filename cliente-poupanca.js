// function Cliente(nome, cpf, email, saldo){
//     this.nome = nome
//     this.cpf = cpf
//     this.email = email
//     this.saldo = saldo

//     this.depositar = function(valor){
//         this.saldo += valor;
//     }
// }

// function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca){
//     Cliente.call(this, nome, cpf, email, saldo)
//     this.saldoPoupanca = saldoPoupanca;
// }

// const poliane = new ClientePoupanca("Poliane", "1234567891012", "poliane@mail.com", 100, 200);
// console.log(poliane);

// ClientePoupanca.prototype.depositarPoupanca = function(valor){
//     this.saldoPoupanca += valor;
// }

// poliane.depositarPoupanca(50);

// console.log("Saldo Atualizado R$ " + poliane.saldoPoupanca);

// console.log();

// const catalogo = {
//     "editora": "Casa do Código",
//     "catalogo": [
//     {
//       "id": 50,
//       "titulo": "Primeiros Passos com NodeJS",
//       "autor": "João Rubens",
//       "categoria": "programação",
//       "versoes": ["ebook", "impresso"]
//     }
//    ]}

//    console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"));

// Objeto
function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
     this.depositar = function(valor){
      this.saldo += valor
    }
   }
   const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100);

   // Construtor
   function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
   }
   const ju = new ClientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200);


   // Manipulando o comportamento do protótipo do objeto
   ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
   }

   // Testar algumas propriedades e validar a ideia de cadeia de protótipos
   console.log(andre.hasOwnProperty("saldoPoup"))
   console.log(ju.hasOwnProperty("saldoPoup"))
   console.log(andre instanceof Cliente)
   console.log(typeof andre)
   console.log(typeof ju)
   console.log(ju instanceof ClientePoupanca)
   console.log(Function.prototype.isPrototypeOf(Cliente))
   console.log(Cliente.constructor === Function)




















