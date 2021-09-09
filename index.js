import {Cliente}             from "./Cliente.js";
import {Gerente}             from "./Funcionarios/Gerente.js";
import {Diretor}             from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo, 10000, 11122233344");
const gerente = new Gerente("Rodrigo,  5000, 44455566677");
const cliente = new Cliente("Lais,     4000, 88877799966");
diretor.cadastrarSenha("123456789")
gerente.cadastrarSenha("123")
//cliente.cadastrarSenha("2224")

const diretorLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const clienteLogado = SistemaAutenticacao.login(cliente, "2224");

console.log(gerenteLogado);
console.log(diretorLogado);
console.log(clienteLogado);

