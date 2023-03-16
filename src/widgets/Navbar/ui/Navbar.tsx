import cn from 'classnames'
import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [])
    return (
        <nav className={cn(cls.Navbar, className)}>
            <div className={cls.Navbar__links}>
                <Button
                    className={cls.Navbar__link}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpen}
                >
                    {t('войти')}
                </Button>
            </div>
            <Modal isOpen={isOpen} onClose={onOpen}>
                DSKAMDLAMDMASLDMALMDLSKAMDALKMDLSKAMDALKDMASLDMLAD
                DSKAMDLAMDMASLDMALMDLSKAMDALKMDLSKAMDALKDMASLDMLAD
                DSKAMDLAMDMASLDMALMDLSKAMDALKMDLSKAMDALKDMASLDMLAD
                DSKAMDLAMDMASLDMALMDLSKAMDALKMDLSKAMDALKDMASLDMLAD
            </Modal>
        </nav>
    )
}
