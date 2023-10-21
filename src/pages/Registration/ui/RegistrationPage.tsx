import { LoginButton } from "@/widgets/GoogleLogin/ui/LoginButton";
import { Box, Card, Typography } from "@mui/material";
import logo from "@/shared/assets/svg/oggetto-logo_mono-flat-hor-rus.svg";

export const RegistrationPage = () => {
	return (
		<Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<img src={logo} alt="" style={{ position: "absolute", top: "3%", left: "3%", width: "10%" }} />
			<Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2 }}>
				<Typography fontSize={48} fontWeight={500}>
					Вход
				</Typography>
				<LoginButton />
			</Card>
		</Box>
	);
};
