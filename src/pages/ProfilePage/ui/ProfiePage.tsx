import { getRouteRegistration } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector";
import { Avatar, Box } from "@mui/material";
import { Navigate } from "react-router-dom";

const ProfiePage = () => {
	const user = useAppSelector((state) => state.user.authData);

	if (!user) {
		return <Navigate to={getRouteRegistration()} replace />;
	}

	return (
		<Box>
			<Avatar src={user.avatarSrc} />
		</Box>
	);
};

export default ProfiePage;
