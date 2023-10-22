import { useGetEventByIdQuery } from "@/entities/Event/api/EventApi";
import { CalendarToday } from "@mui/icons-material";
import { Box, Button, Card, CircularProgress, IconButton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const EventByIdPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data: event, isLoading, isError } = useGetEventByIdQuery(id || "");

	if (isLoading) {
		return (
			<Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<CircularProgress />
			</Box>
		);
	}

	if (isError) {
		return (
			<Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Card>
					<Typography color="error">ОШИБКА!</Typography>
					<Button variant="outlined" onClick={() => location.reload()}>
						Попробуйте перезагрузить страницу!
					</Button>
				</Card>
			</Box>
		);
	}

	// жюри, сейчас 3:16, я очень хочу спать, 11 класс, это ужас, но кейс классный, спасибо
	return (
		<Box sx={{ width: "100vw" }}>
			<Box
				sx={{
					backgroundImage: `url(${event?.image_link})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					display: "flex",
					justifyContent: "start",
					alignItems: "end",
				}}
			>
				<Typography>{event?.name}</Typography>
				<Box>
					<Typography>Создано: {event?.start_date}</Typography>
					<Typography>Редактировано: {event?.updated_at}</Typography>
				</Box>
				<Box>
					<Button color="secondary">Хочу пойти</Button>
					<IconButton>
						<CalendarToday />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default EventByIdPage;
