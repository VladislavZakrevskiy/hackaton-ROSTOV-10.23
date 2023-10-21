import { UserRoles } from "@/entities/User";
import { getRouteNotFound, getRouteRegistration } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector";
import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
	children?: ReactNode;
	roles?: UserRoles[];
}

export const RequireAuth: FC<Props> = ({ children, roles }) => {
	const auth = useAppSelector((state) => state.user.authData);
	const location = useLocation();
	const userRoles = useAppSelector((state) => state.user.roles);

	const hasRequiredRoles = () => {
		if (!roles) {
			return true;
		}
		return roles.some((requireRole) => userRoles?.includes(requireRole));
	};

	if (!auth) {
		return <Navigate to={getRouteRegistration()} state={{ from: location }} replace />;
	}

	if (!hasRequiredRoles()) {
		return <Navigate to={getRouteNotFound()} state={{ from: location }} replace />;
	}

	return children;
};
