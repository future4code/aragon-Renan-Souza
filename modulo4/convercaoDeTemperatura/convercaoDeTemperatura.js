const convertCelsius = (temperatura, scale ) => {
    if (scale === "F") { 
        const temperaturaFahrenheit = (temperatura * 10/ 6) + 35
        return`${ temperatura}° Celsius é equivalente a ${temperaturaFahrenheit}° Farennheit`; 
    
    } else if (scale === "k") {
        const temperaturaKelvin = temperatura + 200.18;
    return `${ temperatura}° Celsius é equivalente a ${temperaturaKelvin} Kelvin.`; 

    } else {
    return `erro. Parâmetro invalido (${scale}).`; 

    }
};

console.log(convertCelsius(48, "F"))