function jogo (numemeroGerado, resposta){
console.log(numemeroGerado)
    if (numemeroGerado == resposta) {
        
        return {
            acertou: true
        }

    } 
    if (resposta < numemeroGerado){
        return {
        mensagemErro: "Digite um número maior!"
        }

    }else{
        return {
            mensagemErro: "Digite um número menor!"
            }
    }
    
}

module.exports= jogo