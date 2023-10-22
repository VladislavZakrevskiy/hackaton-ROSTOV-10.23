import { EventCard } from "@/entities/Event";
import { useGetEventsQuery } from "@/entities/Event/api/EventApi";
import { Box, Typography } from "@mui/material";

// not tested
const EventPage = () => {
	const { data: events } = useGetEventsQuery();

	return (
		<div>
			<Typography fontSize={32} fontWeight={600}>
				События
			</Typography>

			<Box display="grid" sx={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 2 }}>
				{events?.map((event) => (
					<EventCard
						date={event.created_at}
						height="auto"
						imageUrl={event.image_link}
						place={"Оджетто"}
						title={event.name}
						width="22%"
					/>
				))}
			</Box>
		</div>
	);
};

export default EventPage;
