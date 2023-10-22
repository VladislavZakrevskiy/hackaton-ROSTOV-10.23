import { EventCard } from "@/entities/Event";
import { useGetEventsQuery } from "@/entities/Event/api/EventApi";
import { useGetSpecialistsQuery } from "@/entities/Specialist/api/specialistApi";
import { SpecialistCard } from "@/entities/Specialist/ui/SpecialistCard";
import { getRouteEvent } from "@/shared/consts/router";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
	const nav = useNavigate();
	const { data: events } = useGetEventsQuery();
	const { data: specialists } = useGetSpecialistsQuery();

	return (
		<div>
			<Box
				sx={{
					width: "100%",
					height: "auto",
					minHeight: "100vh",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundImage:
						"url(https://ucare.timepad.ru/f70e04a5-3f86-4f2f-9099-8d4f7aa0d9be/poster_event_2265458.jpg)",
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-end",
				}}
			>
				<Button
					variant="contained"
					sx={{ p: "0.7rem 2.2rem", fontSize: 24, fontWeight: 600, mb: 4 }}
					onClick={() => nav(getRouteEvent())}
				>
					Перейти к Афише
				</Button>
			</Box>

			{events?.length && (
				<Box display="flex" flexDirection={"column"} gap={3}>
					<Typography fontSize={32} fontWeight={600}>
						События
					</Typography>

					<Box display="flex" sx={{ overflowX: "scroll", gap: 2, alignItems: "center" }}>
						{events?.slice(0, 3).map((event) => (
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
				</Box>
			)}

			{events?.length && (
				<Box display="flex" flexDirection={"column"} gap={3} mt={5}>
					<Typography fontSize={32} fontWeight={600}>
						Наши специалисты
					</Typography>

					{specialists?.slice(0, 3).map((specialist) => (
						<SpecialistCard
							company={specialist.social_link}
							height="auto"
							imageUrl={specialist.social_link}
							name={specialist.first_name + " " + specialist.last_name}
							width="22%"
						/>
					))}
				</Box>
			)}
		</div>
	);
};

export default MainPage;
