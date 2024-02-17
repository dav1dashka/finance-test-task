import getColor from './getColor';

describe('getColor component', () => {
    test('returns correct color when previousItem is undefined', () => {
        const item = { price: 10 };
        const previousItem = undefined;
        const result = getColor(item, previousItem);
        expect(result).toBe('#155769');
    });

    test('returns red color when item price is less than previousItem price', () => {
        const item = { price: 10 };
        const previousItem = { price: 20 };
        const result = getColor(item, previousItem);
        expect(result).toBe('red');
    });

    test('returns green color when item price is greater than previousItem price', () => {
        const item = { price: 20 };
        const previousItem = { price: 10 };
        const result = getColor(item, previousItem);
        expect(result).toBe('green');
    });

    test('returns #155769 color when item price is equal to previousItem price', () => {
        const item = { price: 10 };
        const previousItem = { price: 10 };
        const result = getColor(item, previousItem);
        expect(result).toBe('#155769');
    });
})
