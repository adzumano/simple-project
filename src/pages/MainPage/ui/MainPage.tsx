import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

const MainPage = (): JSX.Element => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Button theme={ButtonTheme.OUTLINE} onClick={() => setOpen(true)}>
                {t('test')}
            </Button>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                {t(
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, consectetur ducimus\n' +
                        '                iure laborum modi natus placeat praesentium quae quidem reiciendis!'
                )}
            </Modal>
        </div>
    )
}

export default MainPage
