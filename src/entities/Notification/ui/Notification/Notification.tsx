import { Box, Button, Card, Typography } from "@mui/material";
import { memo } from "react";
import { Notification as NotificationData } from "../../model/types/Notification";
import { useNavigate } from "react-router-dom";
import { getRouteEventById } from "@/shared/consts/router";

interface NotificationProps {
	notification: NotificationData;
}

export const Notification = memo((props: NotificationProps) => {
	const nav = useNavigate();
	const {
		notification: {
			created_at,
			event: { name },
			event_id,
			text,
		},
	} = props;

	return (
		<Card>
			<Box>
				<Typography>{created_at}</Typography>
				<Typography>Уведомление о мероприятии '{name}'</Typography>
				<Typography>{text}</Typography>
			</Box>
			<Button onClick={() => nav(getRouteEventById(event_id))} variant="contained">
				Перейти
			</Button>
		</Card>
	);
});
