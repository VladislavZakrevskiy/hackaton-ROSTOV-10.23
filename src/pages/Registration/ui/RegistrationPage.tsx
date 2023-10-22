import { LoginButton } from "@/widgets/GoogleLogin/ui/LoginButton";
import { Box, Card, Typography } from "@mui/material";

export const RegistrationPage = () => {
	return (
		<Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2 }}>
				<Typography fontSize={48} fontWeight={500}>
					Вход
				</Typography>
				<LoginButton />
			</Card>
		</Box>
	);
};
