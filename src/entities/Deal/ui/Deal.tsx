import { Box, Chip, Typography, Stack, AvatarGroup, Avatar } from "@mui/material";
import { Deal as DealData } from "../model/types/Deal";
import { FC } from "react";
import { Cast, Place } from "@mui/icons-material";

interface DealProps {
	deal: DealData;
}

// TODO добавить icons
export const Deal: FC<DealProps> = ({ deal }) => {
	const { date, format, holl, members, mode, place, title, description } = deal;

	return (
		<Box display={"grid"} sx={{ gridTemplateColumns: "10% 1fr", p: 2 }}>
			<Typography fontSize={24} fontWeight={700}>
				{date}
			</Typography>
			<Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={2}>
				<Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 5, p: 0 }}>
					<Stack flexDirection={"row"}>
						<Chip sx={{ fontSize: 16 }} label={holl} color="default" />
						{mode && <Chip sx={{ fontSize: 16, fontWeight: 700 }} label={mode.toUpperCase()} color="error" />}
					</Stack>
					<Typography fontSize={28} fontWeight={500}>
						{title}
					</Typography>
				</Box>
				<Typography fontSize={20}>{description}</Typography>
				<Box sx={{ display: "flex", gap: 2 }}>
					<Stack>
						<Typography
							color="GrayText"
							sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}
						>
							<Cast />
							{format}
						</Typography>
					</Stack>
					<Stack>
						<Typography
							color="GrayText"
							sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}
						>
							<Place /> {place}
						</Typography>
					</Stack>
				</Box>
				<AvatarGroup total={members.length} max={8}>
					{members.map((member) => (
						<Avatar src={member.avatarSrc} alt={member.username} />
					))}
				</AvatarGroup>
			</Box>
		</Box>
	);
};
