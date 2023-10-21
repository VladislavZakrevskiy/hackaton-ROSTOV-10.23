import { initAuthData } from '@/entities/User'
import { cn } from '@/shared/lib/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { PageLoader } from '@/widgets/PageLoader'
import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'

function App() {
    const dispatch = useAppDispatch()
    const _inited = useAppSelector(
        (state) => state.user._inited
    )

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if (!_inited) {
        return <PageLoader />
    }

    return (
        <div className={cn('app', {}, [])}>
            <Suspense fallback={<PageLoader />}>
                {_inited && <AppRouter />}
            </Suspense>
        </div>
    )
}

export default App
