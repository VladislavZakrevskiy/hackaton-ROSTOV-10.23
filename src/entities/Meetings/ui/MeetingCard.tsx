import { Container, Typography } from "@mui/material";
import { MeetingImage, MeetingImageProps } from "./MeetingImage";
import { FC } from "react";

interface MeetingCardProps extends MeetingImageProps {
	title: string;
	place: string;
}

export const MeetingCard: FC<MeetingCardProps> = ({ title, place, ...meetingImageProps }) => {
	return (
		<Container>
			<MeetingImage {...meetingImageProps} />
			<Typography mt={1} fontSize={24}>
				{title}
			</Typography>
			<Typography fontSize={16} color={"GrayText"}>
				{place}
			</Typography>
		</Container>
	);
};
