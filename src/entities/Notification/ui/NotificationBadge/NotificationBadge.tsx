import { Box, IconButton } from "@mui/material";
import { useGetNotificationsQuery } from "../../api/notificationApi";
import { Close, Notifications } from "@mui/icons-material";
import { useState } from "react";
import { Notification } from "../..";

// not tested
export const NotificationBadge = () => {
	const { data: notifications } = useGetNotificationsQuery(undefined, { pollingInterval: 10000 });
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={{ position: "relative" }}>
			<IconButton onClick={() => setIsOpen(true)}>
				<Notifications />
			</IconButton>
			<Box
				sx={{
					display: isOpen ? "flex" : "none",
					maxHeight: "40vh",
					overflowY: "scroll",
					position: "absolute",
					left: "100%",
				}}
			>
				<IconButton sx={{ ml: "auto" }} onClick={() => setIsOpen(false)}>
					<Close />
				</IconButton>
				{notifications?.map((notification) => (
					<Notification notification={notification} />
				))}
			</Box>
		</div>
	);
};
