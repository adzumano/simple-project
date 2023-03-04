import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean
}
class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo)
    }

    render(): ReactNode {
        const { children } = this.props
        const { hasError } = this.state
        if (hasError) {
            return (
                <Suspense fallback={''}>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary
