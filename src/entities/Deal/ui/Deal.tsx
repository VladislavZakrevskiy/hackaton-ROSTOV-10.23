import {
    Box,
    Chip,
    Container,
    Typography,
    Stack,
    AvatarGroup,
    Avatar,
} from '@mui/material'
import { Deal as DealData } from '../model/types/Deal'
import { FC } from 'react'

interface DealProps {
    deal: DealData
}

// TODO добавить icons
export const Deal: FC<DealProps> = ({ deal }) => {
    const {
        date,
        format,
        holl,
        members,
        mode,
        place,
        title,
        description,
    } = deal

    return (
        <Box
            display={'grid'}
            sx={{ gridTemplateColumns: '10% 1fr' }}
        >
            <Typography>{date}</Typography>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={2}
            >
                <Container>
                    <Chip label={holl} color="info" />
                    {mode && (
                        <Chip
                            label={mode.toUpperCase()}
                            color="error"
                        />
                    )}
                    <Typography>{title}</Typography>
                </Container>
                <Typography>{description}</Typography>
                <Container>
                    <Stack>
                        <Typography>{format}</Typography>
                    </Stack>
                    <Stack>
                        <Typography>{place}</Typography>
                    </Stack>
                </Container>
                <AvatarGroup total={members.length} max={8}>
                    {members.map((member) => (
                        <Avatar
                            src={member.avatarSrc}
                            alt={member.username}
                        />
                    ))}
                </AvatarGroup>
            </Box>
        </Box>
    )
}
