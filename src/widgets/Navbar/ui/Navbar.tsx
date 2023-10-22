import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import logo from "@/shared/assets/svg/oggetto-logo_mono-flat-hor-rus.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CtrlK } from "@/widgets/CtrlK/CtrlK";
import { getRouteAdmin, getRouteEvent, getRouteRegistration, getRouteSpecialist } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector";
import { NotificationBadge } from "../../../entities/Notification/ui/NotificationBadge/NotificationBadge";
import { UserRoles } from "@/entities/User";

export const Navbar = () => {
	const nav = useNavigate();
	const authData = useAppSelector((state) => state.user.authData);
	const location = useLocation();

	if (authData) {
		return (
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" color="transparent">
					<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
						<img src={logo} alt="" style={{ width: "20%", cursor: "pointer" }} onClick={() => nav("/")} />

						<Box display={"flex"} gap={2}>
							<Link style={{ color: "black" }} to={getRouteEvent()}>
								<Typography fontSize={20}>События</Typography>
							</Link>
							<Link style={{ color: "black" }} to={getRouteSpecialist()}>
								<Typography fontSize={20}>Наши специалисты</Typography>
							</Link>
							{(authData.roles.includes(UserRoles.ADMIN) || authData.roles.includes(UserRoles.MANAGER)) && (
								<Link style={{ color: "black" }} to={getRouteAdmin()}>
									<Typography fontSize={20}>Админка</Typography>
								</Link>
							)}
						</Box>
						<Box display={"flex"} gap={2}>
							<NotificationBadge />
							<CtrlK />
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		);
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent">
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<img src={logo} alt="" style={{ width: "20%", cursor: "pointer" }} onClick={() => nav("/")} />

					<Box display={"flex"} gap={2}>
						{location.pathname !== getRouteRegistration() && (
							<Link style={{ color: "black" }} to={getRouteSpecialist()}>
								<Button
									onClick={() => nav(getRouteRegistration())}
									variant="contained"
									sx={{ fontSize: 20, p: "0.5rem 2rem" }}
								>
									Вход
								</Button>
							</Link>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
