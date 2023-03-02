import { someFn } from './someFn'

describe('someFn', () => {
    test('test', () => {
        expect(someFn(2, 2)).toBe(4)
    })
})
