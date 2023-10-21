import { cn } from '@/shared/lib/classNames'
import { FC } from 'react'
import classes from './PageLoader.module.scss'

interface Props {
    className?: string
}

export const PageLoader: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(classes.PageLoader, {}, [
                className,
            ])}
        >
            Loading
        </div>
    )
}
