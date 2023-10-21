import { LoginButton } from "@/widgets/GoogleLogin/ui/LoginButton";
import { Box, Card, Typography } from "@mui/material";

export const RegistrationPage = () => {
	return (
		<Box sx={{ width: "100vw", height: "100vh" }}>
			<Card>
				<Typography>Регистрация</Typography>
				<LoginButton />
			</Card>
		</Box>
	);
};
