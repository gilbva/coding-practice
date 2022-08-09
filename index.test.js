const p = require('./index');
const { createNumbers, logOutput: lo, initLogs: init } = require('./test-utils');

beforeEach(init);

describe("1: printMessage", () => {
    test('debe imprimir el mensaje \'Hello World\'', () => {
        p.printMessage();
        expect(lo.messages[0]).toBe('Hello World');
    });
});

describe("2: printSum2And3", () => {
    test('debe imprimir 5', () => {
        p.printSum2And3();
        expect(lo.messages[0]).toBe(5);
    });
});

describe("3: printProduct", () => {
    test('debe imprimir 30', () => {
        p.printProduct();
        expect(lo.messages[0]).toBe(30);
    });
});

describe("4: swap", () => {
    test('[3, 4, 78, 4] debe intercambiar 3 y 4', () => {
        const array = [3, 4, 78, 4];
        p.swap(array, 0, 1);
        expect(array[0]).toBe(4);
        expect(array[1]).toBe(3);
    });

    test('[3, 4, 78, 4] debe intercambiar 3 y 78', () => {
        const array = [3, 4, 78, 4];
        p.swap(array, 0, 2);
        expect(array[0]).toBe(78);
        expect(array[2]).toBe(3);
    });

    test('[3, 4, 78, 4] debe intercambiar 78 y 4', () => {
        const array = [3, 4, 78, 4];
        p.swap(array, 2, 3);
        expect(array[2]).toBe(4);
        expect(array[3]).toBe(78);
    });
});

describe("5: sum", () => {
    test(      '1 + 2 = 3', () => expect(p.sum(1, 2)).toBe(3));
    test(      '8 + 7 = 15', () => expect(p.sum(8, 7)).toBe(15));
    test(    '-10 + 5 = -5', () => expect(p.sum(-10, 5)).toBe(-5));
    test('1000 + -800 = 200', () => expect(p.sum(1000, -800)).toBe(200));
});

describe("6: minus", () => {
    test(      '1 - 2 = -1', () => expect(p.minus(1, 2)).toBe(-1) );
    test(      '8 - 7 = 1', () => expect(p.minus(8, 7)).toBe(1) );
    test(    '-10 - 5 = -15', () => expect(p.minus(-10, 5)).toBe(-15) );
    test('1000 - -800 = 1800', () => expect(p.minus(1000, -800)).toBe(1800) );
});

describe("7: mult", () => {
    test(      '1 * 2 = 2', () => expect(p.mult(1, 2)).toBe(2) );
    test(      '8 * 7 = 56', () => expect(p.mult(8, 7)).toBe(56) );
    test(    '-10 * 5 = -50', () => expect(p.mult(-10, 5)).toBe(-50) );
    test('1000 * -800 = -800000', () => expect(p.mult(1000, -800)).toBe(-800000) );
});

describe("3: divide", () => {
    test(    '2 / 2 = 1', () => expect(p.divide(2, 2)).toBe(1) );
    test(    '8 / 4 = 2', () => expect(p.divide(8, 4)).toBe(2) );
    test(  '-10 / 5 = -2', () => expect(p.divide(-10, 5)).toBe(-2) );
    test('800 / -10 = -80', () => expect(p.divide(800, -10)).toBe(-80) );
});

describe("3: square", () => {
    test('3 square = 9', () => expect(p.square(3)).toBe(9) );
    test('-10 square = 100', () => expect(p.square(-10)).toBe(100) );
});

describe("3: cube", () => {
    test('3 cube = 27', () => expect(p.cube(3)).toBe(27) );
    test('-10 cube = -1000', () => expect(p.cube(-10)).toBe(-1000) );
});

describe("3: reminder", () => {
    test('3 reminder 2 = 1', () => expect(p.reminder(3, 2)).toBe(1) );
    test('-10 reminder 7 = -3', () => expect(p.reminder(-10, 7)).toBe(-3) );
    test('18 reminder -8 = -2', () => expect(p.reminder(18, -8)).toBe(2) );
    test('-30 reminder -9 = -3', () => expect(p.reminder(-30, -9)).toBe(-3) );
    test('30 reminder 3 = 0', () => expect(p.reminder(30, 3)).toBe(0) );
});

describe("3: abs", () => {
    test('3 abs = 3', () => expect(p.abs(3)).toBe(3) );
    test('-10 abs = 10', () => expect(p.abs(-10)).toBe(10) );
});

describe("3: biggestTwo", () => {
    test('6 > 5 => 6', () => expect(p.biggestTwo(6, 5)).toBe(6) );
    test('-10 > 0 => 0', () => expect(p.biggestTwo(-10, 0)).toBe(0) );
    test('10 > -1 => 10', () => expect(p.biggestTwo(10, -1)).toBe(10) );
});

describe("3: biggestThree", () => {
    test('biggest(5, 6, 8) => 8', () => expect(p.biggestThree(5, 6, 8)).toBe(8) );
    test('biggest(5, 6, -8) => 6', () => expect(p.biggestThree(5, 6, -8)).toBe(6) );
    test('biggest(50, 6, -8) => 50', () => expect(p.biggestThree(50, 6, -8)).toBe(50) );
    test('biggest(0, 0, 0) => 0', () => expect(p.biggestThree(0, 0, 0)).toBe(0) );
});

describe("3: isEven", () => {
    test('isEven(5) => false', () => expect(p.isEven(5)).toBe(false) );
    test('isEven(4) => true', () => expect(p.isEven(4)).toBe(true) );
    test('isEven(0) => true', () => expect(p.isEven(0)).toBe(true) );
    test('isEven(-3) => false', () => expect(p.isEven(-3)).toBe(false) );
    test('isEven(-30) => true', () => expect(p.isEven(-30)).toBe(true) );
});

describe("3: calculateWithIf", () => {
    describe("5: calculateWithIf suma", () => {
        test(      '1 + 2 = 3', () => expect(p.calculateWithIf('suma', 1, 2)).toBe(3));
        test(      '8 + 7 = 15', () => expect(p.calculateWithIf('suma', 8, 7)).toBe(15));
        test(    '-10 + 5 = -5', () => expect(p.calculateWithIf('suma', -10, 5)).toBe(-5));
        test('1000 + -800 = 200', () => expect(p.calculateWithIf('suma', 1000, -800)).toBe(200));
    });
    
    describe("6: calculateWithIf resta", () => {
        test(      '1 - 2 = -1', () => expect(p.calculateWithIf('resta', 1, 2)).toBe(-1) );
        test(      '8 - 7 = 1', () => expect(p.calculateWithIf('resta', 8, 7)).toBe(1) );
        test(    '-10 - 5 = -15', () => expect(p.calculateWithIf('resta', -10, 5)).toBe(-15) );
        test('1000 - -800 = 1800', () => expect(p.calculateWithIf('resta', 1000, -800)).toBe(1800) );
    });
    
    describe("7: calculateWithIf producto", () => {
        test(      '1 * 2 = 2', () => expect(p.calculateWithIf('producto', 1, 2)).toBe(2) );
        test(      '8 * 7 = 56', () => expect(p.calculateWithIf('producto', 8, 7)).toBe(56) );
        test(    '-10 * 5 = -50', () => expect(p.calculateWithIf('producto', -10, 5)).toBe(-50) );
        test('1000 * -800 = -800000', () => expect(p.calculateWithIf('producto', 1000, -800)).toBe(-800000) );
    });
    
    describe("3: calculateWithIf divide", () => {
        test(    '2 / 2 = 1', () => expect(p.calculateWithIf('division', 2, 2)).toBe(1) );
        test(    '8 / 4 = 2', () => expect(p.calculateWithIf('division', 8, 4)).toBe(2) );
        test(  '-10 / 5 = -2', () => expect(p.calculateWithIf('division', -10, 5)).toBe(-2) );
        test('800 / -10 = -80', () => expect(p.calculateWithIf('division', 800, -10)).toBe(-80) );
    });
    
    describe("3: calculateWithIf resto", () => {
        test('3 resto 2 = 1', () => expect(p.calculateWithIf('resto', 3, 2)).toBe(1) );
        test('-10 resto 7 = -3', () => expect(p.calculateWithIf('resto', -10, 7)).toBe(-3) );
        test('18 resto -8 = -2', () => expect(p.calculateWithIf('resto', 18, -8)).toBe(2) );
        test('-30 resto -9 = -3', () => expect(p.calculateWithIf('resto', -30, -9)).toBe(-3) );
        test('30 resto 3 = 0', () => expect(p.calculateWithIf('resto', 30, 3)).toBe(0) );
    });
    
});

describe("3: calculateWithSwitch", () => {
    describe("5: calculateWithSwitch suma", () => {
        test(      '1 + 2 = 3', () => expect(p.calculateWithSwitch('suma', 1, 2)).toBe(3));
        test(      '8 + 7 = 15', () => expect(p.calculateWithSwitch('suma', 8, 7)).toBe(15));
        test(    '-10 + 5 = -5', () => expect(p.calculateWithSwitch('suma', -10, 5)).toBe(-5));
        test('1000 + -800 = 200', () => expect(p.calculateWithSwitch('suma', 1000, -800)).toBe(200));
    });
    
    describe("6: calculateWithSwitch resta", () => {
        test(      '1 - 2 = -1', () => expect(p.calculateWithSwitch('resta', 1, 2)).toBe(-1) );
        test(      '8 - 7 = 1', () => expect(p.calculateWithSwitch('resta', 8, 7)).toBe(1) );
        test(    '-10 - 5 = -15', () => expect(p.calculateWithSwitch('resta', -10, 5)).toBe(-15) );
        test('1000 - -800 = 1800', () => expect(p.calculateWithSwitch('resta', 1000, -800)).toBe(1800) );
    });
    
    describe("7: calculateWithSwitch producto", () => {
        test(      '1 * 2 = 2', () => expect(p.calculateWithSwitch('producto', 1, 2)).toBe(2) );
        test(      '8 * 7 = 56', () => expect(p.calculateWithSwitch('producto', 8, 7)).toBe(56) );
        test(    '-10 * 5 = -50', () => expect(p.calculateWithSwitch('producto', -10, 5)).toBe(-50) );
        test('1000 * -800 = -800000', () => expect(p.calculateWithSwitch('producto', 1000, -800)).toBe(-800000) );
    });
    
    describe("3: calculateWithSwitch divide", () => {
        test(    '2 / 2 = 1', () => expect(p.calculateWithSwitch('division', 2, 2)).toBe(1) );
        test(    '8 / 4 = 2', () => expect(p.calculateWithSwitch('division', 8, 4)).toBe(2) );
        test(  '-10 / 5 = -2', () => expect(p.calculateWithSwitch('division', -10, 5)).toBe(-2) );
        test('800 / -10 = -80', () => expect(p.calculateWithSwitch('division', 800, -10)).toBe(-80) );
    });
    
    describe("3: calculateWithSwitch resto", () => {
        test('3 resto 2 = 1', () => expect(p.calculateWithSwitch('resto', 3, 2)).toBe(1) );
        test('-10 resto 7 = -3', () => expect(p.calculateWithSwitch('resto', -10, 7)).toBe(-3) );
        test('18 resto -8 = -2', () => expect(p.calculateWithSwitch('resto', 18, -8)).toBe(2) );
        test('-30 resto -9 = -3', () => expect(p.calculateWithSwitch('resto', -30, -9)).toBe(-3) );
        test('30 resto 3 = 0', () => expect(p.calculateWithSwitch('resto', 30, 3)).toBe(0) );
    });
    
});

describe("3: printFrom1TO5", () => {
    test('printFrom1TO5', () => {
        p.printFrom1TO5();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 5)));
    });
});

describe("3: printFrom1TO1000", () => {
    test('printFrom1TO1000', () => {
        p.printFrom1TO1000();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 1000)));
    });
});

describe("3: printEventNumbers1To1000", () => {
    test('printEventNumbers1To1000', () => {
        p.printEventNumbers1To1000();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 1000).filter(x => x % 2 == 0)));
    });
});

describe("3: printEventNumbers0To900", () => {
    test('printEventNumbers0To900', () => {
        p.printEventNumbers0To900();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(0, 900).filter(x => x % 2 == 0)));
    });
});

describe("3: sumNumbers1To2000", () => {
    test('sumNumbers1To2000', () => {
        expect(p.sumNumbers1To2000()).toBe(createNumbers(1, 2000).reduce((p, c) => p + c, 0));
    });
});

describe("3: sumOddNumbers1To2000", () => {
    test('sumOddNumbers1To2000', () => {
        expect(p.sumOddNumbers1To2000()).toBe(createNumbers(1, 2000).filter(x => x % 2 == 1).reduce((p, c) => p + c, 0));
    });
});

describe("3: averageOdd1000To3000", () => {
    test('averageOdd1000To3000', () => {
        var oddsNumbs = createNumbers(1000, 3000).filter(x => x % 2 == 1);
        expect(p.averageOdd1000To3000()).toBe(oddsNumbs.reduce((p, c) => p + c, 0) / oddsNumbs.length);
    });
});

describe("3: printWithWhile", () => {
    test('printWithWhile', () => {
        p.printWithWhile();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 1000)));
    });
});

describe("3: printEvenWithWhile1To1000", () => {
    test('printEvenWithWhile1To1000', () => {
        p.printEvenWithWhile1To1000();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 1000).filter(x => x % 2 == 0)));
    });
});

describe("3: printOddWithWhile0To999", () => {
    test('printOddWithWhile0To999', () => {
        p.printOddWithWhile0To999();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(0, 999).filter(x => x % 2 == 1)));
    });
});

describe("3: sumWithWhile1000To2000", () => {
    test('sumWithWhile1000To2000', () => {
        expect(p.sumWithWhile1000To2000()).toBe(createNumbers(1000, 2000).reduce((c, p) => p + c, 0));
    });
});

describe("3: sumOddsWithWhile1000To2000", () => {
    test('sumOddsWithWhile1000To2000', () => {
        expect(p.sumOddsWithWhile1000To2000()).toBe(createNumbers(1000, 2000).filter(x => x % 2 == 1).reduce((c, p) => p + c, 0));
    });
});

describe("3: averageWithWhile1000To3000", () => {
    test('averageWithWhile1000To3000', () => {
        var numbs = createNumbers(1000, 3000);
        expect(p.averageOdd1000To3000()).toBe(numbs.reduce((p, c) => p + c, 0) / numbs.length);
    });
});

/*
describe("3: sumArray", () => {
    test('', () => {
        p.sumArray();
    });
});

describe("3: biggestInArray", () => {
    test('', () => {
        p.biggestInArray();
    });
});

describe("3: smallestInArray", () => {
    test('', () => {
        p.smallestInArray();
    });
});

describe("3: duplicateArray", () => {
    test('', () => {
        p.duplicateArray();
    });
});

describe("3: squareArray", () => {
    test('', () => {
        p.squareArray();
    });
});

describe("3: parityArray", () => {
    test('', () => {
        p.parityArray();
    });
});

describe("3: averageArray", () => {
    test('', () => {
        p.averageArray();
    });
});

describe("3: printEvenArray", () => {
    test('', () => {
        p.printEvenArray();
    });
});

describe("3: printOddArray", () => {
    test('', () => {
        p.printOddArray();
    });
});

describe("3: countEvenArray", () => {
    test('', () => {
        p.countEvenArray();
    });
});

describe("3: countOddArray", () => {
    test('', () => {
        p.countOddArray();
    });
});

describe("3: averageEvenArray", () => {
    test('', () => {
        p.averageEvenArray();
    });
});

describe("3: averageOddArray", () => {
    test('', () => {
        p.averageOddArray();
    });
});

describe("3: printNames", () => {
    test('', () => {
        p.printNames();
    });
});

describe("3: printPrices", () => {
    test('', () => {
        p.printPrices();
    });
});


describe("3: increasePrice", () => {
    test('', () => {
        p.increasePrice();
    });
});

describe("3: getNames", () => {
    test('', () => {
        p.getNames();
    });
});

describe("3: getPrices", () => {
    test('', () => {
        p.getPrices();
    });
});

describe("3: mostExpensiveProduct", () => {
    test('', () => {
        p.mostExpensiveProduct();
    });
});

describe("3: cheapestProduct", () => {
    test('', () => {
        p.cheapestProduct();
    });
});

describe("3: getProductByName", () => {
    test('', () => {
        p.getProductByName();
    });
});
*/