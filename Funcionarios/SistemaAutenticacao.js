import { Funcionario } from "./Funcionario.js";

export class SistemaAutenticacao{
    static login(autenticavel,senha){

        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        
        }
       return false;
    }
    static ehAutenticavel(autenticavel){
        "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}