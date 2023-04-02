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
    lazy?: boolean
}

const ANIMATION_DELAY = 300
export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen = false, lazy = false, onClose = () => {} } = props

    const { theme } = useTheme()
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const mods: Record<string, boolean> = {
        [cls.isOpened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const handleClose = useCallback((): void => {
        setIsClosing(true)
        timerRef.current = setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, ANIMATION_DELAY)
    }, [onClose])

    const handleKeyDown = useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                handleClose()
            }
        },
        [handleClose]
    )

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }

        return () => {
            setIsMounted(false)
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, handleKeyDown])

    if (lazy && !isMounted) {
        return null
    }
    return (
        <Portal>
            <div className={cn(cls.Modal, className, theme, mods)}>
                <div className={cls.overlay} onClick={handleClose}>
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
