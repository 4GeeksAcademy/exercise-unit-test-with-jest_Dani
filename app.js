function sum (n1,n2){
    return n1+n2
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen (USD){
    return (USD / oneEuroIs.value ["USD"]) * oneEuroIs.value["JPY"]
}

function fromYenToPound (yen){
return (Yen / oneEuroIs.value ["JPY"]) * oneEuroIs.value["GBP"]
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound };