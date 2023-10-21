import { Box, Paper, Typography } from "@mui/material";
import logo from "./assets/oggetto-logo_mono-flat-hor-rus.svg";

export const Footer = () => {
	return (
		<div>
			<Paper
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "5rem",
					backgroundColor: "#FFDD00",
					borderRadius: "50px",
					border: "0px",
					minWidth: "80%",
					minHeight: "40%",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						minWidth: "50%",
						minHeight: "80%",
					}}
				>
					<img src={logo}></img>
					<Typography fontSize={"1.2rem"} fontWeight={100} maxWidth={"30%"}>
						Well-being мероприятия
					</Typography>
				</Box>
			</Paper>
		</div>
	);
};
