import { Paper, Typography } from "@mui/material";
import logo from "../../../shared/assets/svg/oggetto-logo_mono-flat-hor-rus.svg";

export const Footer = () => {
	return (
		<div>
			<Paper
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: "5rem",
					p: "0 20px",
					overflow: "hidden",
					backgroundColor: "#FFDD00",
					border: "0px",
					minWidth: "80%",
					minHeight: "40%",
					mt: 4,
				}}
			>
				<img style={{ width: "20%" }} src={logo}></img>

				<Typography fontSize={"1.2rem"} fontWeight={700}>
					Well-being мероприятия
				</Typography>
			</Paper>
		</div>
	);
};
