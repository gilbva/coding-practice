const p = require('./index');
const { createNumbers, logOutput: lo, initLogs: init } = require('./test-utils');

beforeEach(init);

describe("printMessage", () => {
    test('debe imprimir el mensaje \'Hello World\'', () => {
        p.printMessage();
        expect(lo.messages[0]).toBe('Hello World');
    });
});

describe("printSum2And3", () => {
    test('debe imprimir 5', () => {
        p.printSum2And3();
        expect(lo.messages[0]).toBe(5);
    });
});

describe("printProduct", () => {
    test('debe imprimir 30', () => {
        p.printProduct();
        expect(lo.messages[0]).toBe(30);
    });
});

describe("swap", () => {
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

describe("sum", () => {
    test(      '1 + 2 = 3', () => expect(p.sum(1, 2)).toBe(3));
    test(      '8 + 7 = 15', () => expect(p.sum(8, 7)).toBe(15));
    test(    '-10 + 5 = -5', () => expect(p.sum(-10, 5)).toBe(-5));
    test('1000 + -800 = 200', () => expect(p.sum(1000, -800)).toBe(200));
});

describe("minus", () => {
    test(      '1 - 2 = -1', () => expect(p.minus(1, 2)).toBe(-1) );
    test(      '8 - 7 = 1', () => expect(p.minus(8, 7)).toBe(1) );
    test(    '-10 - 5 = -15', () => expect(p.minus(-10, 5)).toBe(-15) );
    test('1000 - -800 = 1800', () => expect(p.minus(1000, -800)).toBe(1800) );
});

describe("mult", () => {
    test(      '1 * 2 = 2', () => expect(p.mult(1, 2)).toBe(2) );
    test(      '8 * 7 = 56', () => expect(p.mult(8, 7)).toBe(56) );
    test(    '-10 * 5 = -50', () => expect(p.mult(-10, 5)).toBe(-50) );
    test('1000 * -800 = -800000', () => expect(p.mult(1000, -800)).toBe(-800000) );
});

describe("divide", () => {
    test(    '2 / 2 = 1', () => expect(p.divide(2, 2)).toBe(1) );
    test(    '8 / 4 = 2', () => expect(p.divide(8, 4)).toBe(2) );
    test(  '-10 / 5 = -2', () => expect(p.divide(-10, 5)).toBe(-2) );
    test('800 / -10 = -80', () => expect(p.divide(800, -10)).toBe(-80) );
});

describe("square", () => {
    test('3 square = 9', () => expect(p.square(3)).toBe(9) );
    test('-10 square = 100', () => expect(p.square(-10)).toBe(100) );
});

describe("cube", () => {
    test('3 cube = 27', () => expect(p.cube(3)).toBe(27) );
    test('-10 cube = -1000', () => expect(p.cube(-10)).toBe(-1000) );
});

describe("reminder", () => {
    test('3 reminder 2 = 1', () => expect(p.reminder(3, 2)).toBe(1) );
    test('-10 reminder 7 = -3', () => expect(p.reminder(-10, 7)).toBe(-3) );
    test('18 reminder -8 = -2', () => expect(p.reminder(18, -8)).toBe(2) );
    test('-30 reminder -9 = -3', () => expect(p.reminder(-30, -9)).toBe(-3) );
    test('30 reminder 3 = 0', () => expect(p.reminder(30, 3)).toBe(0) );
});

describe("abs", () => {
    test('3 abs = 3', () => expect(p.abs(3)).toBe(3) );
    test('-10 abs = 10', () => expect(p.abs(-10)).toBe(10) );
});

describe("biggestTwo", () => {
    test('6 > 5 => 6', () => expect(p.biggestTwo(6, 5)).toBe(6) );
    test('-10 > 0 => 0', () => expect(p.biggestTwo(-10, 0)).toBe(0) );
    test('10 > -1 => 10', () => expect(p.biggestTwo(10, -1)).toBe(10) );
});

describe("biggestThree", () => {
    test('biggest(5, 6, 8) => 8', () => expect(p.biggestThree(5, 6, 8)).toBe(8) );
    test('biggest(5, 6, -8) => 6', () => expect(p.biggestThree(5, 6, -8)).toBe(6) );
    test('biggest(50, 6, -8) => 50', () => expect(p.biggestThree(50, 6, -8)).toBe(50) );
    test('biggest(0, 0, 0) => 0', () => expect(p.biggestThree(0, 0, 0)).toBe(0) );
});

describe("isEven", () => {
    test('isEven(5) => false', () => expect(p.isEven(5)).toBe(false) );
    test('isEven(4) => true', () => expect(p.isEven(4)).toBe(true) );
    test('isEven(0) => true', () => expect(p.isEven(0)).toBe(true) );
    test('isEven(-3) => false', () => expect(p.isEven(-3)).toBe(false) );
    test('isEven(-30) => true', () => expect(p.isEven(-30)).toBe(true) );
});

describe("calculateWithIf", () => {
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

describe("calculateWithSwitch", () => {
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

describe("printFrom1TO5", () => {
    test('printFrom1TO5', () => {
        p.printFrom1TO5();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 5)));
    });
});

describe("printFrom1TO1000", () => {
    test('printFrom1TO1000', () => {
        p.printFrom1TO1000();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 1000)));
    });
});

describe("printEventNumbers1To1000", () => {
    test('printEventNumbers1To1000', () => {
        p.printEventNumbers1To1000();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 1000).filter(x => x % 2 == 0)));
    });
});

describe("printEventNumbers0To900", () => {
    test('printEventNumbers0To900', () => {
        p.printEventNumbers0To900();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(0, 900).filter(x => x % 2 == 0)));
    });
});

describe("sumNumbers1To2000", () => {
    test('sumNumbers1To2000', () => {
        expect(p.sumNumbers1To2000()).toBe(createNumbers(1, 2000).reduce((p, c) => p + c, 0));
    });
});

describe("sumOddNumbers1To2000", () => {
    test('sumOddNumbers1To2000', () => {
        expect(p.sumOddNumbers1To2000()).toBe(createNumbers(1, 2000).filter(x => x % 2 == 1).reduce((p, c) => p + c, 0));
    });
});

describe("averageOdd1000To3000", () => {
    test('averageOdd1000To3000', () => {
        var oddsNumbs = createNumbers(1000, 3000).filter(x => x % 2 == 1);
        expect(p.averageOdd1000To3000()).toBe(oddsNumbs.reduce((p, c) => p + c, 0) / oddsNumbs.length);
    });
});

describe("printWithWhile", () => {
    test('printWithWhile', () => {
        p.printWithWhile();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 1000)));
    });
});

describe("printEvenWithWhile1To1000", () => {
    test('printEvenWithWhile1To1000', () => {
        p.printEvenWithWhile1To1000();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(1, 1000).filter(x => x % 2 == 0)));
    });
});

describe("printOddWithWhile0To999", () => {
    test('printOddWithWhile0To999', () => {
        p.printOddWithWhile0To999();
        expect(lo.messages).toEqual(expect.arrayContaining(createNumbers(0, 999).filter(x => x % 2 == 1)));
    });
});

describe("sumWithWhile1000To2000", () => {
    test('sumWithWhile1000To2000', () => {
        expect(p.sumWithWhile1000To2000()).toBe(createNumbers(1000, 2000).reduce((c, p) => p + c, 0));
    });
});

describe("sumOddsWithWhile1000To2000", () => {
    test('sumOddsWithWhile1000To2000', () => {
        expect(p.sumOddsWithWhile1000To2000()).toBe(createNumbers(1000, 2000).filter(x => x % 2 == 1).reduce((c, p) => p + c, 0));
    });
});

describe("averageWithWhile1000To3000", () => {
    test('averageWithWhile1000To3000', () => {
        var numbs = createNumbers(1000, 3000);
        expect(p.averageOdd1000To3000()).toBe(numbs.reduce((p, c) => p + c, 0) / numbs.length);
    });
});

describe("sumArray", () => {
    test('sum empty array', () => expect(p.sumArray([])).toBe(0));
    test('sum 1 element array', () => expect(p.sumArray([10])).toBe(10));
    test('sum many elements array', () => expect(p.sumArray([0, 10, 7, 79, 0, 1, 3])).toBe(100));
    test('sum array with negative numbers', () => expect(p.sumArray([2, 5, 3, -1, -2])).toBe(7));
    test('sum large array numbers', () => {
        var largeArray = createNumbers(1000, 2000);
        expect(p.sumArray(largeArray)).toBe(largeArray.reduce((c, p) => p + c, 0));
    });
});

describe("biggestInArray", () => {
    test('biggest array with 1 element', () => expect(p.biggestInArray([10])).toBe(10));
    test('biggest array with 2 element', () => expect(p.biggestInArray([-1, 1])).toBe(1));
    test('biggest array with zero', () => expect(p.biggestInArray([-1, 0, -9])).toBe(0));
    test('biggest array negative elements', () => expect(p.biggestInArray([-10, -80, -9, -8, -90])).toBe(-8));
    test('biggest array many elements', () => expect(p.biggestInArray([-10, 80, 91, -8, -90])).toBe(91));
    test('biggest array with duplicates', () => expect(p.biggestInArray([10, 10, 8, 10, 10])).toBe(10));
});

describe("smallestInArray", () => {
    test('smallest array with 1 element', () => expect(p.smallestInArray([10])).toBe(10));
    test('smallest array with 2 element', () => expect(p.smallestInArray([-1, 1])).toBe(-1));
    test('smallest array with zero', () => expect(p.smallestInArray([-1, 0, -9])).toBe(-9));
    test('smallest array negative elements', () => expect(p.smallestInArray([-10, -80, -9, -8, -90])).toBe(-90));
    test('smallest array many elements', () => expect(p.smallestInArray([-10, 80, 91, -8, -1])).toBe(-10));
    test('smallest array with duplicates', () => expect(p.smallestInArray([10, 10, 11, 10, 10])).toBe(10));
});

describe("duplicateArray", () => {
    test('duplicate array with 0 element', () => {
        var array = [];
        p.duplicateArray(array);
        expect(array).toEqual([])
    });

    test('duplicate array with 1 element', () => {
        var array = [10];
        p.duplicateArray(array);
        expect(array).toEqual([20])
    });

    test('duplicate array with many element', () => {
        var array = [10, -4, 5, 90, -9, 0, 0, -9];
        p.duplicateArray(array);
        expect(array).toEqual([20, -8, 10, 180, -18, 0, 0, -18])
    });
});

describe("squareArray", () => {
    test('square array with 0 element', () => {
        var array = [];
        p.squareArray(array);
        expect(array).toEqual([])
    });

    test('square array with 1 element', () => {
        var array = [10];
        p.squareArray(array);
        expect(array).toEqual([100])
    });

    test('square array with many element', () => {
        var array = [10, -4, 5, 90, -9, 0, 0, -9];
        p.squareArray(array);
        expect(array).toEqual([100, 16, 25, 8100, 81, 0, 0, 81])
    });
});

describe("parityArray", () => {
    test('parityArray with empty array', () => expect(p.parityArray([])).toEqual([]) );
    test('parityArray with 1 element array inpair', () => expect(p.parityArray([1])).toEqual([false]) );
    test('parityArray with 1 element array pair', () => expect(p.parityArray([2])).toEqual([true]) );
    test('parityArray with may elements array', () => expect(p.parityArray([1, 2, 5, 7, -19, -20, 22, -6])).toEqual([false, true, false, false, false, true, true, true]) );
});

describe("averageArray", () => {
    test('averageArray with 1 element', () => expect(p.averageArray([10])).toBe(10) );
    test('averageArray with 2 element', () => expect(p.averageArray([10, 2])).toBe(6) );
    test('averageArray with negative element', () => expect(p.averageArray([10, -2])).toBe(4) );
    test('averageArray with many element', () => expect(p.averageArray([10, -2, 20, -100, 80, 92, -10, -10])).toBe(10) );
});

describe("printEvenArray", () => {
    test('printEvenArray empty', () => {
        var array = [];
        p.printEvenArray(array);
        expect(lo.messages).toEqual([])
    });

    test('printEvenArray 1 element', () => {
        var array = [10];
        p.printEvenArray(array);
        expect(lo.messages).toEqual([10])
    });

    test('printEvenArray 1 element inpair', () => {
        var array = [11];
        p.printEvenArray(array);
        expect(lo.messages).toEqual([])
    });

    test('printEvenArray with many elements', () => {
        var array = [10, -4, 5, 90, -9, 0, 0, -9];
        p.printEvenArray(array);
        expect(lo.messages).toEqual([10, -4, 90, 0, 0])
    });
});

describe("printOddArray", () => {
    test('printOddArray empty', () => {
        var array = [];
        p.printOddArray(array);
        expect(lo.messages).toEqual([])
    });

    test('printOddArray 1 element', () => {
        var array = [10];
        p.printOddArray(array);
        expect(lo.messages).toEqual([])
    });

    test('printOddArray 1 element inpair', () => {
        var array = [11];
        p.printOddArray(array);
        expect(lo.messages).toEqual([11])
    });

    test('printOddArray with many elements', () => {
        var array = [10, -4, 5, 90, -9, 0, 0, -9];
        p.printOddArray(array);
        expect(lo.messages).toEqual([5, -9, -9])
    });
});

describe("countEvenArray", () => {
    test('countEvenArray with 0 element', () => expect(p.countEvenArray([])).toBe(0) );
    test('countEvenArray with 1 element', () => expect(p.countEvenArray([11])).toBe(0) );
    test('countEvenArray with 1 element', () => expect(p.countEvenArray([10])).toBe(1) );
    test('countEvenArray with 2 element', () => expect(p.countEvenArray([10, 2])).toBe(2) );
    test('countEvenArray with 2 element', () => expect(p.countEvenArray([10, 13])).toBe(1) );
    test('countEvenArray with 2 element', () => expect(p.countEvenArray([15, 13])).toBe(0) );
    test('countEvenArray with negative element', () => expect(p.countEvenArray([10, -2, 11, -13, 24, -24])).toBe(4) );
    test('countEvenArray with many element', () => expect(p.countEvenArray([10, -2, -3, 20, -101, 80, 92, -10, -10, 11, -11])).toBe(7) );
});


describe("countOddArray", () => {
    test('countOddArray with 0 element', () => expect(p.countOddArray([])).toBe(0) );
    test('countOddArray with 1 element', () => expect(p.countOddArray([11])).toBe(1) );
    test('countOddArray with 1 element', () => expect(p.countOddArray([10])).toBe(0) );
    test('countOddArray with 2 element', () => expect(p.countOddArray([10, 2])).toBe(0) );
    test('countOddArray with 2 element', () => expect(p.countOddArray([10, 13])).toBe(1) );
    test('countOddArray with 2 element', () => expect(p.countOddArray([15, 13])).toBe(2) );
    test('countOddArray with negative element', () => expect(p.countOddArray([10, -2, 11, -13, 24, -24])).toBe(2) );
    test('countOddArray with many element', () => expect(p.countOddArray([10, -2, -3, 20, -101, 80, 92, -10, -10, 11, -11])).toBe(4) );
});

describe("averageEvenArray", () => {
    test('averageEvenArray with 1 element', () => expect(p.averageEvenArray([10])).toBe(10) );
    test('averageEvenArray with 2 element', () => expect(p.averageEvenArray([10, 13])).toBe(10) );
    test('averageEvenArray with 2 element', () => expect(p.averageEvenArray([16, 12])).toBe(14) );
    test('averageEvenArray with negative element', () => expect(p.averageEvenArray([10, -2, 11, -13, 24, -24])).toBe(2) );
    test('averageEvenArray with many element', () => expect(p.averageEvenArray([10, -2, -3, 20, -101, 10, 10, 80, 90, 2, -10, -10, 11, -11])).toBe(20) );
});

describe("averageOddArray", () => {
    test('averageEvenArray with 1 element', () => expect(p.averageOddArray([11])).toBe(11) );
    test('averageEvenArray with 2 element', () => expect(p.averageOddArray([10, 13])).toBe(13) );
    test('averageEvenArray with 2 element', () => expect(p.averageOddArray([15, 13])).toBe(14) );
    test('averageEvenArray with negative element', () => expect(p.averageOddArray([10, -2, 13, -11, 24, -24])).toBe(1) );
    test('averageEvenArray with many element', () => expect(p.averageOddArray([10, -2, -3, 20, -101, 10, 10, 80, 90, 2, -10, -10, 11, -11])).toBe(-26) );
});

describe("printNames", () => {
    test('print names for products', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 3 },
            { name: "Manzanas", price: 1 },
        ];
        p.printNames(products);
        expect(lo.messages).toEqual(['Harina', "Arroz", "Papas", "Manzanas"])
    });
});

describe("printPrices", () => {
    test('print prices for products', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 3 },
            { name: "Manzanas", price: 1 },
        ];
        p.printPrices(products);
        expect(lo.messages).toEqual([10, 4, 3, 1])
    });
});


describe("increasePrice", () => {
    test('increasePrice prices by zero', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 3 },
            { name: "Manzanas", price: 1 },
        ];
        p.increasePrice(products, 0);
        expect(products.map(x => x.price)).toEqual([10, 4, 3, 1])
    });

    test('increasePrice prices positive', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 3 },
            { name: "Manzanas", price: 1 },
        ];
        p.increasePrice(products, 10);
        expect(products.map(x => x.price)).toEqual([20, 14, 13, 11])
    });

    test('increasePrice prices by negative', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 3 },
            { name: "Manzanas", price: 4 },
        ];
        p.increasePrice(products, -1);
        expect(products.map(x => x.price)).toEqual([9, 3, 2, 3])
    });
});

describe("getNames", () => {
    test('getNames', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 3 },
            { name: "Manzanas", price: 4 },
        ];
        expect(p.getNames(products)).toEqual(['Harina', "Arroz", "Papas", "Manzanas"])
    });
});

describe("getPrices", () => {
    test('getPrices', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 3 },
            { name: "Manzanas", price: 4 },
        ];
        expect(p.getPrices(products)).toEqual([10, 4, 3, 4])
    });
});

describe("mostExpensiveProduct", () => {
    test('mostExpensiveProduct first', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 3 },
            { name: "Manzanas", price: 4 },
        ];
        expect(p.mostExpensiveProduct(products)).toEqual({ name: "Harina", price: 10 })
    });

    test('mostExpensiveProduct third', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 4 },
            { name: "Papas", price: 30 },
            { name: "Manzanas", price: 4 },
        ];
        expect(p.mostExpensiveProduct(products)).toEqual({ name: "Papas", price: 30 })
    });
});

describe("cheapestProduct", () => {
    test('cheapestProduct second', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 3 },
            { name: "Papas", price: 30 },
            { name: "Manzanas", price: 4 },
        ];
        expect(p.cheapestProduct(products)).toEqual({ name: "Arroz", price: 3 })
    });
});

describe("getProductByName", () => {
    test('getProductByName first', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 3 },
            { name: "Papas", price: 30 },
            { name: "Manzanas", price: 4 },
        ];
        expect(p.getProductByName(products, 'Harina')).toEqual({ name: "Harina", price: 10 })
    });

    test('getProductByName second', () => {
        var products = [
            { name: "Harina", price: 10 }, 
            { name: "Arroz", price: 3 },
            { name: "Papas", price: 30 },
            { name: "Manzanas", price: 4 },
        ];
        expect(p.getProductByName(products, 'Arroz')).toEqual({ name: "Arroz", price: 3 })
    });
});
