// Revisão

function exe(){
    let vet = []
    let pares = 0, impares = 0, cont = 0
    let med, num
    for(let i=0;i<6;i++){
        num = Number(prompt("Digite um número:"))
        vet.push(num)
        if(vet[i] % 2 === 0){
            pares++
            cont += vet[i]
        }
        else{
            impares++
        }
    }
    if(pares > 0){
        med = cont / pares
    }
    console.log(impares)
    console.log(pares)
    console.log(med)
    console.log(vet)
}
