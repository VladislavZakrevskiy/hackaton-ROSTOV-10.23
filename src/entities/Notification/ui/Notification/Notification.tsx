import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Notification.module.scss';
import { memo } from 'react';

interface NotificationProps {
    className?: string;
}

export const Notification = memo((props: NotificationProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={cn(cls.Notification, {}, [className])}>
           
        </div>
    );
});