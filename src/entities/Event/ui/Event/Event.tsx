import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Event.module.scss';
import { memo } from 'react';

interface EventProps {
    className?: string;
}

export const Event = memo((props: EventProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={cn(cls.Event, {}, [className])}>
           
        </div>
    );
});