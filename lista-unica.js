const clientes = [
    {
    nome: "João Marcos",
    idade: 36,
    cpf: "123543652266",
    email: "joaomarcos@mail.com",
    fones: ['5591235498', '5521988743124'],
    dependentes: [
        {
            nome: "Ellen",
            parentesco: "Filha",
            dataDeNascimento: "06/12/2006"
        },
        {   
            nome: "Poliane",
            parentesco: "Esposa",
            dataDeNascimento: "24/04/1988"
        }],
    },
    
    {
    nome: "Ellen",
    idade: 15,
    cpf: "312543652266",
    email: "ellen@mail.com",
    fones: ['5595491238', '5588743121924'],
    dependentes: [
        {
            nome: "Luck",
            parentesco: "Filho",
            dataDeNascimento: "28/12/2020"},
        {   
            nome: "Charlotte",
            parentesco: "Filha",
            dataDeNascimento: "24/11/2020"
        }]
    },
    {
    nome: "Poliane",
    idade: 33,
    cpf: "123522643656",
    email: "poliane@mail.com",
    fones: ['5599123548', '5587432198124'],
    dependentes: [
        {
            nome: "Nina",
            parentesco: "Filha",
            dataDeNascimento: "06/12/2006"},
        {   
            nome: "Beethoven",
            parentesco: "Esposo",
            dataDeNascimento: "24/04/1985"
        }],
    }

] 



const listaDeDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

// console.log(listaDeDependentes);
console.table(listaDeDependentes);


console.log("==========================================================================");
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }
//    const guerreiro = { fichaGuerreiro, equipoGuerreiro }
//    console.log(guerreiro)

// const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
// console.log(guerreiro)
// console.log("==========================================================================");

const mago = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

const personagens = { ...mago, ...guerreiro, ...ranger }
// console.log(personagens)
console.table(personagens);
console.log("==========================================================================");














