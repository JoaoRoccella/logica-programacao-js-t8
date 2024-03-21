function converteTemperatura() {

    const temperaturaAtual = parseFloat(window.prompt('Digite a temperatura'));
    
    if (!isNaN(temperaturaAtual)) {
    
        const
            escalaAtual = window.prompt('Digite a escala atual: \nC -> Celsius, F -> Fahrenheit, K -> Kelvin').toUpperCase(),
            
            escalaConversao = window.prompt('Digite a escala para conversão: \nC -> Celsius, F -> Fahrenheit, K -> Kelvin').toUpperCase();
    
        if (escalaAtual === 'C') {
    
            if (escalaConversao === 'K') {
                window.alert(`${temperaturaAtual} em ${escalaAtual} -> ${temperaturaAtual + 273.15} em ${escalaConversao}`);
    
            } else if (escalaConversao === 'F') {
                window.alert(`${temperaturaAtual} em ${escalaAtual} -> ${(temperaturaAtual * 9 / 5) + 32} em ${escalaConversao}`);
    
            } else if (escalaConversao === 'C') {
                window.alert(`Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
    
            } else {
                window.alert(`Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
            }
    
        } else if (escalaAtual === 'F') {
    
            if (escalaConversao === 'K') {
                window.alert(`${temperaturaAtual} em ${escalaAtual} -> ${(temperaturaAtual + 459.67) * 5 / 9} em ${escalaConversao}`);
    
            } else if (escalaConversao === 'C') {
                window.alert(`${temperaturaAtual} em ${escalaAtual} -> ${(temperaturaAtual - 32) * 5 / 9} em ${escalaConversao}`);
    
            } else if (escalaConversao === 'F') {
                window.alert(`Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
    
            } else {
                window.alert(`Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
            }
    
        } else if (escalaAtual === 'K') {
    
            if (escalaConversao === 'C') {
                window.alert(`${temperaturaAtual} em ${escalaAtual} -> ${temperaturaAtual - 273.15} em ${escalaConversao}`);
    
            } else if (escalaConversao === 'F') {
                window.alert(`${temperaturaAtual} em ${escalaAtual} -> ${temperaturaAtual * 9 / 5 - 459.67} em ${escalaConversao}`);
    
            } else if (escalaConversao === 'K') {
                window.alert(`Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
    
            } else {
                window.alert(`Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
            }
    
        } else {
            window.alert(`Escala selecionada: ${escalaAtual}. A escala ATUAL não existe ou não está disponível neste programa.`);
        }
    
    } else {
        window.alert('O número digitado para conversão não é um número válido.');
    }

}


