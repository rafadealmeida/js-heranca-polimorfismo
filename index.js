import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo",10000 ,12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente ("Ricardo",5000, 1237894567);
gerente.cadastrarSenha("456");

const cliente = new Cliente("Lais", 789123456789, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"456");

console.log(diretorEstaLogado,gerenteEstaLogado, clienteEstaLogado);