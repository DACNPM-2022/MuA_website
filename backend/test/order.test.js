import orderService from '../services/orderServices.js';

describe('OrderService', () => {
    test('order is empty', () => {
        expect(orderService.checkEmptyOrder(0)).toBe(true)
    });
})
