import {
    Card,
    ImageListItem,
    Stack,
    Typography,
} from '@mui/material'
import { FC } from 'react'

interface Speaker {
    fullName: string
    company: string
    post: string
    avatarSrc: string
}

interface SpeakerTextCardProps {
    speaker: Speaker
}

export const SpeakerTextCard: FC<SpeakerTextCardProps> = ({
    speaker,
}) => {
    const { company, fullName, post, avatarSrc } = speaker

    return (
        <Card
            sx={{
                borderRadius: '2rem',
                background: '#ddd',
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                p: 2
            }}
        >
            <Stack>
                <Stack>
                    <Typography fontSize={24}>
                        {fullName}
                    </Typography>
                    <Typography
                        fontSize={16}
                        color="GrayText"
                    >
                        {company}
                    </Typography>
                </Stack>
                <ImageListItem
                    sx={{ height: '100%', width: 'auto' }}
                >
                    <img
                        width={'100%'}
                        src={avatarSrc}
                        alt={fullName}
                    />
                </ImageListItem>
            </Stack>
            <Typography>{post}</Typography>
        </Card>
    )
}
