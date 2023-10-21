import { initAuthData } from '@/entities/User'
import { cn } from '@/shared/lib/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { PageLoader } from '@/widgets/PageLoader'
import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { GoogleClientUrl } from '@/shared/consts/GoogleClientUrl'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import { MeetingCard } from '@/entities/Meetings/MeetingCard'
import { SpecialistCard } from '@/entities/SpecialistCard'
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
            <MeetingCard
                width="522px"
                height="309px"
                imageUrl="https://storage.yandexcloud.net/mmco-bucket/48a40790-1cdb-41aa-b29a-d929128b3a04-original-1u98.jpeg"
                name="Скибиди мусорка застряла..."
                date="25 мая 54:00-42:00"
            />
            <SpecialistCard
                name="Яна Цист"
                desc="Нравится не нравится терпи в попу семиклассница."
                imageUrl="https://www.vokrug.tv/pic/person/3/7/0/4/3704ae7f853b5688086bede8c285f54e.jpg"
                company="НИИ надо пожалуйста"
                width="322px"
                height="344px"
            />
        </div>
    )
}

export default App
