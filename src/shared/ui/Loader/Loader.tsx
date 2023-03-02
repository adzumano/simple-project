import { type FC } from 'react'

import './Loader.scss'

interface LoaderProps {
    className?: string
}
export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
