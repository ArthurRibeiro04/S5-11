// Calculate Salary (Nao entendi se o máximo R$1.200,00 era da comissao ou das vendas)

function calculateSalary(fix, sell){
    let salary = 0
        if(sell <= 1200){
            salary = fix + sell * 0.03
        }
        else if (sell > 1200){
            salary = fix + 1200 * 0.03 + (sell - 1200) * 0.05
        }
    return salary
    }
    
    // Cash Machine
    
    function cashMachine(saque, fixo, vendas){
    let salarioTotal = calculateSalary(fixo, vendas)
    let notas200 = 0
    let notas100 = 0
    let notas50 = 0
    let notas20 = 0
    let notas10 = 0
    let notas5 = 0
    let notas2 = 0
    let resto = salarioTotal - saque
    while(saque >= 0){
        if(saque - 200 > 0){
            notas200 = notas200 + 1
            saque = saque - 200
        }
        else if(saque - 100 > 0){
            notas100 = notas100 + 1
            saque = saque - 100  
        }
        else if(saque - 50 > 0){
            notas50 = notas50 + 1
            saque = saque - 50
        }
        else if(saque - 20 > 0){
            notas20 = notas20 + 1
            saque = saque - 20
        }
        else if(saque - 10 > 0){
            notas10 = notas10 + 1
            saque = saque - 10
        }
        else if(saque - 5 > 0){
            notas5 = notas5 + 1
            saque = saque - 5
        }
        else if(saque - 2 > 0){
            notas2 = notas2 + 1
            saque = saque - 2
        }
    }
    return `Notas sacadas: ${notas200} nota(s) de 200, ${notas100} nota(s) de 100, ${notas50} nota(s) de 50, ${notas20} nota(s) de 20, ${notas10} nota(s) de 10, ${notas5} nota(s) de 5, ${notas2} nota(s) de 2, Saldo Total: ${resto} `
    }
    
    
    
    // Calculate Stock
    
    function calculateStock(atual, max, min){
    let media = (max + min)/2
        if(atual > media){
            return 'Não efetuar compra'
        }
        else{
            return 'Efetuar compra'
        }
    }
    
    
    // Calculate Age
    
    function calculateAge(nascimento, anoAtual){
        let diffAnos = anoAtual - nascimento
        let diffMeses = (anoAtual - nascimento) * 12
        let diffDias = (anoAtual - nascimento) * 365
        let diffSemanas = `Aproximadamente ${Math.round((anoAtual - nascimento) * 52.143)}`
        return 
    }
    
    // Get Diagonal
    
    function getDiagonal(matriz){
        let array = []
        for(y = 0; y < matriz.length; y++){
                array.push(matriz[y][y])
            }
            return array
        }
    