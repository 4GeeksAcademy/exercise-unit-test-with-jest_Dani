test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar, fromDollarToYen, fromDollarToYen, fromYenToPound, fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
  
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("One dollar should be 146,26 yens" , () => {
    const { fromEuroToDollar} = require('./app.js');

    const yen = fromDollarToYen (10)

    const expected = (10/1.07) * 156.5;
    expect(fromDollarToYen(10).toBe(1462.62))

})

test ("One yen should be 0.006 pounds" , () => {
    const { fromEuroToDollar} = require('./app.js');

    const yen = fromYenToPound (5000)

    const expected = (5000/156.5) * 0.87;

    expect(fromYenToPound(5000).toBe(4350))

})