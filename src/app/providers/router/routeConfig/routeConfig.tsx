import { NotFoundPage } from "@/pages/NotFoundPage";
import { LazyMainPage } from "@/pages/MainPage";
import {
	AppRoutes,
	getRouteAdmin,
	getRouteEventById,
	getRouteMain,
	getRouteNotFound,
	getRouteProfile,
	getRouteRegistration,
	getRouteSpecialist,
} from "@/shared/consts/router";
import { AppRouteProps } from "@/shared/types/router";
import { UserRoles } from "@/entities/User";
import { RegistrationPage } from "@/pages/Registration";
import { LazyProfiePage } from "@/pages/ProfilePage";
import { LazyEventByIdPage } from "@/pages/EventByIdPage";
import { LazyAdminPage } from "@/pages/AdminPage";
import { LazySpecialistPage } from "@/pages/SpecialistPage";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	main: {
		path: getRouteMain(),
		element: <LazyMainPage />,
	},
	not_found: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
	registration: {
		path: getRouteRegistration(),
		element: <RegistrationPage />,
		roles: [UserRoles.UNAUTH],
	},
	profile: {
		path: getRouteProfile(),
		element: <LazyProfiePage />,
		authOnly: true,
		roles: [UserRoles.USER],
	},
	event_by_id: {
		path: getRouteEventById(":id"),
		element: <LazyEventByIdPage />,
		authOnly: true,
		roles: [UserRoles.USER],
	},
	admin: {
		path: getRouteAdmin(),
		element: <LazyAdminPage />,
		authOnly: true,
		roles: [UserRoles.ADMIN, UserRoles.MANAGER],
	},
	specialist: {
		path: getRouteSpecialist(":id"),
		element: <LazySpecialistPage />,
		authOnly: true,
		roles: [UserRoles.USER],
	},
};
