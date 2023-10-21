import { Box, Paper, Typography } from '@mui/material'
import logo from './assets/oggetto-logo_mono-flat-hor-rus.svg'
import vkIcon from './assets/vk-1.svg'
import tgIcon from './assets/icons8-telegram.svg'
export const Footer = () => {
    return (
        <div>
            <Paper sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '3.5rem',
                backgroundColor: '#FFDD00',
                borderRadius: '50px',
                border: '0px',
                minWidth: '80%',
                maxWidth: '80%',
                maxHeight: '10%',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '80%'
                }}>
                    <img src={logo} style={{ maxWidth: '30%', maxHeight: '30%' }}></img>
                    <Typography fontFamily={"Roboto"} fontSize={"1.2em"} fontWeight={100} maxWidth={'30%'} lineHeight={'1em'}>Well-being мероприятия</Typography>
                </Box>
            </Paper>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '80%',
            }}>
                <img src={logo} style={{ maxWidth: '15%' }}></img>
                <Box gap={1} sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }} >
                    <Typography fontFamily={"Roboto"} fontSize={"0.7em"} fontWeight={100} maxWidth={'100%'} lineHeight={'1em'}>Техническая поддежка: support@loveeach.ru</Typography>
                    <img src={vkIcon} style={{ height: '10px', width: '10px' }}></img>
                    <img src={tgIcon} style={{ height: '10px', width: '10px' }}></img>
                </Box>

            </Box>
            <Box gap={1} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '80%'
            }} >
                <Typography fontFamily={"Roboto"} fontSize={"0.6em"} fontWeight={100} maxWidth={'100%'} lineHeight={'1em'}>@2003-2023 Оджетто</Typography>
                <Typography fontFamily={"Roboto"} fontSize={"0.6em"} fontWeight={100} maxWidth={'100%'} lineHeight={'1em'}>Пользовательское соглашение</Typography>
                <Typography fontFamily={"Roboto"} fontSize={"0.6em"} fontWeight={100} maxWidth={'100%'} lineHeight={'1em'}>Политика конфиденциальности</Typography>
            </Box>
        </div>
    )
}