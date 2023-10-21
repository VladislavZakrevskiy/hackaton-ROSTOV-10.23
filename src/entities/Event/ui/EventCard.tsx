import { Container, Typography } from "@mui/material";
import { EventImage, EventImageProps } from "./EventImage";
import { FC } from "react";

interface MeetingCardProps extends EventImageProps {
	title: string;
	place: string;
}

export const EventCard: FC<MeetingCardProps> = ({ title, place, ...EventImageProps }) => {
	return (
		<Container>
			<EventImage {...EventImageProps} />
			<Typography mt={1} fontSize={24}>
				{title}
			</Typography>
			<Typography fontSize={16} color={"GrayText"}>
				{place}
			</Typography>
		</Container>
	);
};
