import { Box, Typography } from '@mui/material/';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

type MeetingCardProps = {
    name: string,
    date: string,
    imageUrl: string,
    height: string,
    width: string,
}


export const MeetingCard: React.FC<MeetingCardProps> = ({ name, date, imageUrl, height, width }) => {
    return (
        <div>
            <Box sx={{
                width: width,
                height: height,
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
            }}><Box sx={{
                minWidth: '10%',
                padding: '10px 13px',
                height: '10%',
                borderRadius: '10px',
                alignSelf: 'end',
                backgroundColor: '#fff',
                marginBottom: '0.8rem',
                marginLeft: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                border: '0px',
            }}><CalendarTodayIcon sx={{
                marginRight: '3px',
                width: '10%'
            }}></CalendarTodayIcon><Typography color={'#4d5259'} fontWeight={100} fontSize={16}>{date}</Typography></Box></Box>
            <Typography fontSize={24} fontWeight={300} sx={{
                marginTop: '0.5rem',
                color: '#4d5259'
            }}>{name}</Typography>
        </div>
    )
}  