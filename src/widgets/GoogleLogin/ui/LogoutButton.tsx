import { UserActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { googleLogout } from "@react-oauth/google";

export const LoginButton = () => {
	const dispatch = useAppDispatch();

	const onLogout = () => {
		dispatch(UserActions.logout());
		googleLogout();
	};

	return (
		<IconButton onClick={onLogout}>
			<Logout />
		</IconButton>
	);
};
