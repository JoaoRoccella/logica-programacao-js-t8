function calculaIMC() {

    const
        peso = window.prompt('Digite seu peso:'),
        altura = window.prompt('Digite sua altura:'),
        imc = peso / altura ** 2;
        
    if (imc < 18.5) {
        window.alert(`IMC: ${imc.toFixed(1)} --> Abaixo do peso`);
    
    } else if (imc < 25) {
        window.alert(`IMC: ${imc.toFixed(1)} --> Peso normal`);
    
    } else if (imc < 30) {
        window.alert(`IMC: ${imc.toFixed(1)} --> Sobrepeso`);
    
    } else if (imc < 35) {
        window.alert(`IMC: ${imc.toFixed(1)} --> Obesidade grau I`);
    
    } else if (imc < 40) {
        window.alert(`IMC: ${imc.toFixed(1)} --> Obesidade grau II`);
    
    } else {
        window.alert(`IMC: ${imc.toFixed(1)} --> Obesidade grau III`);
    }

}
