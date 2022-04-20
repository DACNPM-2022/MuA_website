import userService from '../services/userServices.js';

describe('UserService', () => {
    test('check user password', () => {
        expect(userService.checkPassword(
            'superadmin',
            '$2a$08$90W4BgeNeqdaEOyXY2aANeyYQJaJjPNbx1L6LMA87tWfuB4GeQvXm')).toBe(true)
    })
})
