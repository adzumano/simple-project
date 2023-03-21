import cn from 'classnames'
import { type FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

import { LoginForm } from '../LoginForm/LoginForm'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}
export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal className={cn(cls.LoginModal, className)} isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    )
}
