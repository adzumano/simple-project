import { userEvent } from '@storybook/testing-library'
import { screen, waitFor } from '@testing-library/react'
import { Counter } from 'entities/Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter', () => {
    test('with only first param', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
    test('increment', async () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
        await waitFor(() => {
            userEvent.click(screen.getByTestId('increment-button'))
            expect(screen.getByTestId('value-title')).toHaveTextContent('11')
        })
    })
    test('decrement', async () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
        await waitFor(() => {
            userEvent.click(screen.getByTestId('decrement-button'))
            expect(screen.getByTestId('value-title')).toHaveTextContent('9')
        })
    })
})
