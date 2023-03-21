import { type DeepPartial } from '@reduxjs/toolkit'
import { type RenderResult, render } from '@testing-library/react'
import { type IStateSchema, StoreProvider } from 'app/provider/StoreProvider'
import React, { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<IStateSchema>
}
export const componentRender = (
    component: ReactNode,
    options: ComponentRenderOptions = {}
): RenderResult => {
    const { route = '/', initialState } = options
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
