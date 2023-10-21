import { Paper, Typography } from "@mui/material/";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export type MeetingImageProps = {
	date: string;
	imageUrl: string;
	height: string;
	width: string;
};

export const MeetingImage: React.FC<MeetingImageProps> = ({ date, imageUrl, height, width }) => {
	return (
		<div>
			<Paper
				sx={{
					width: width,
					height: height,
					backgroundImage: `url(${imageUrl})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					borderRadius: "12px",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Paper
					sx={{
						minWidth: "10%",
						padding: "10px 13px",
						height: "10%",
						borderRadius: "10px",
						alignSelf: "end",
						backgroundColor: "#fff",
						marginBottom: "0.8rem",
						marginLeft: "0.6rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						border: "none",
						gap: 1,
					}}
				>
					<CalendarTodayIcon
						sx={{
							mb: 0.25,
							width: "10%",
						}}
					/>
					<Typography color={"#4d5259"} fontWeight={100} fontSize={16}>
						{date}
					</Typography>
				</Paper>
			</Paper>
		</div>
	);
};
