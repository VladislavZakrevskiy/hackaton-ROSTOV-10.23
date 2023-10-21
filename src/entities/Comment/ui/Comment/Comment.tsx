import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Comment.module.scss';
import { memo } from 'react';

interface CommentProps {
    className?: string;
}

export const Comment = memo((props: CommentProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={cn(cls.Comment, {}, [className])}>
           
        </div>
    );
});