import { Box, Typography } from "@mui/material";

export type SpecialistCardProps = {
	name: string;
	company: string;
	imageUrl: string;
	width: string;
	height: string;
};

export const SpecialistCard: React.FC<SpecialistCardProps> = ({ width, height, imageUrl, company, name }) => {
	return (
		<div>
			<Box
				sx={{
					width: width,
					height: height,
					backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 31.19%, rgba(0, 0, 0, 0.1) 44.06%, rgba(0, 0, 0, 0.22) 55.54%, rgba(0, 0, 0, 0.51) 75.52%, #000000 100%), url(${imageUrl})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					borderRadius: "20px",
					border: "0px",
					display: "flex",
					alignItems: "end",
					justifyContent: "flex-start",
					color: "#fff",
					overflow: "hidden",
				}}
			>
				<Box sx={{ gap: 1, flexDirection: "column", dislay: "flex", p: 1 }}>
					<Typography fontSize={24} fontWeight={700}>
						{name}
					</Typography>
					<Typography fontSize={18}>{company}</Typography>
				</Box>
			</Box>
		</div>
	);
};
