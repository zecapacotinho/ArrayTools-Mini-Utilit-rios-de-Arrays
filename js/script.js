const inputArray = document.querySelector('#array')
const inputResult = document.querySelector('#num')
const selectFunction = document.querySelector('#funcao')

inputArray.addEventListener('keypress', () => {
    const contagem = inputArray.value.length
    if(contagem){
        inputArray.value += ','
    }
})

function message(text){
    Toastify({
        text: text,
        style: {
            background: 'red'
        }
    }).showToast()
}

function executar(){
    if(!inputArray.value.trim()){
        message('Por favor insira um valor')
    }
    else{
        const valuesArray = inputArray.value.split(',').map(Number)
        switch(selectFunction.value){
            case 'media':
                let contador = 0
                for(let i = 0; i < valuesArray.length; i++){
                    contador += valuesArray[i]
                }
                const resultado = contador / valuesArray.length
                inputResult.value = resultado
                inputArray.value = ''
            break

            case 'multiplos':
                let multiplos = []
                for(let valores of valuesArray){
                    if(valores % 3 === 0 || valores % 5 === 0){
                        multiplos.push(valores)
                    }
                }
                inputResult.value = multiplos
                inputArray.value = ''
            break

            case 'inverter':
                let valores = []
                for(let i = valuesArray.length - 1; i >= 0; i--){
                    valores.push(valuesArray[i])
                }
                inputResult.value = valores
                inputArray.value = ''
            break

            case 'duplicados':
                let novoArray = []
                for(let valores of valuesArray){
                    if(!novoArray.includes(valores)){
                        novoArray.push(valores)
                    }
                }
                inputResult.value = novoArray
                inputArray.value = ''
            break

            case 'segundoMaior':
                let maiorValor = -Infinity
                let segundoMaiorValor = -Infinity
                
                for(let valores of valuesArray){
                    if(valores > segundoMaiorValor){
                        segundoMaiorValor = maiorValor
                        maiorValor = valores
                    }
                    else if(valores > segundoMaiorValor && valores < maiorValor){
                        segundoMaiorValor = valores
                    }
                }
                inputResult.value = segundoMaiorValor
                inputArray.value = ''
            break
        }
    }
}