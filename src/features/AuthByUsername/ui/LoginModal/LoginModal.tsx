import cn from 'classnames'
import { type FC, Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal/Modal'

import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}
export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal className={cn(className)} isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    )
}
