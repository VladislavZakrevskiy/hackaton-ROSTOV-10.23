import { getRouteRegistration } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector";
import { Email } from "@mui/icons-material";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

const ProfiePage = () => {
	const user = useAppSelector((state) => state.user.authData);

	if (!user) {
		return <Navigate to={getRouteRegistration()} replace />;
	}

	return (
		<Box>
			<Box display="grid" sx={{ gridTemplateColumns: "40% 1fr" }}>
				<Avatar src={user.image_url} alt={user.first_name + " " + user.last_name} sx={{ width: "40%" }} />
				<Container>
					<Typography>
						{user.first_name} {user.last_name}
					</Typography>
					<Typography sx={{ display: "flex", gap: 1, justifyContent: "center", alignItems: "center" }}>
						<Email />
						{user.email}
					</Typography>
					<Typography>В системе с: {user.created_at}</Typography>					
			</Box>
		</Box>
	);
};

export default ProfiePage;
