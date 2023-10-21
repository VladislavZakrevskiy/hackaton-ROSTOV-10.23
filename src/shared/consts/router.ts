export enum AppRoutes {
	MAIN = "main",
	REGISTRATION = 'registration',
	LOGIN = 'login',
	PROFILE = 'profile',
	EVENT_BY_ID = 'event_by_id',
	NOT_FOUND = "not_found",
	ADMIN = 'admin'
}

export const getRouteMain = () => '/'
export const getRouteRegistration = () => '/registration'
export const getRouteLogin = () => '/login'
export const getRouteEventById = () => '/event/:id'
export const getRouteEvent = () => '/event'
export const getRouteProfile = () => '/profile'
export const getRouteAdmin = () => '/admin'
export const getRouteNotFound = () => '*'

