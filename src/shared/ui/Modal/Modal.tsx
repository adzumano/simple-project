import { useTheme } from 'app/provider/ThemeProvider'
import cn from 'classnames'
import { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300
export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen = false, onClose = () => {} } = props
    const { theme } = useTheme()
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const mods: Record<string, boolean> = {
        [cls.isOpened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const closeHandler = useCallback((): void => {
        setIsClosing(true)
        timerRef.current = setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, ANIMATION_DELAY)
    }, [onClose])

    const onKeyDown = useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler]
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])
    return (
        <Portal>
            <div className={cn(cls.Modal, className, theme, mods)}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
