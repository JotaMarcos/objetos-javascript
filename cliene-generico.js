function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const joao = new Cliente("João Marcos", "1234567891", "joaomarcos@mail.com", 100);

console.log(joao);

















