import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter = (): JSX.Element => {
    const { t } = useTranslation()
    const counterValue = useSelector(getCounterValue)
    const dispatch = useDispatch()
    const increment = (): void => {
        dispatch(counterActions.increment())
    }
    const decrement = (): void => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h1 data-testid={'value-title'}>{counterValue}</h1>
            <Button data-testid={'increment-button'} onClick={increment}>
                {t('increment')}
            </Button>
            <Button data-testid={'decrement-button'} onClick={decrement}>
                {t('decrement')}
            </Button>
        </div>
    )
}
