function Client(name,balance){
    this.name = name;
    this.balance = balance
}

const memo = new Client( 'Guillermo', 7500 );
console.log(memo)

function formatClient(client) {
    const { name, balance } = client;
    return `El cliente ${name} tiene un saldo de ${balance}`
}

console.log(formatClient(memo))

function Empresa(name, balance, category) {
    this.name = name;
    this.balance = balance;
    this.category = category;
}

function formatEmpresa(company) {
    const { name, balance, category } = company;
    return `El cliente ${name} tiene un saldo de ${balance} y pertenece a ${category}`
}
const codeando = new Empresa('Kodemia',5000000,'bootcamp');

console.log(formatEmpresa(codeando))