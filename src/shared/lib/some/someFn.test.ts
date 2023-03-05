import { someFn } from 'shared/lib/some/someFn'

describe('someFn', () => {
    test('test', () => {
        expect(someFn(2, 2)).toBe(4)
    })
})
