export enum AppRoutes {
	MAIN = "main",
	REGISTRATION = 'registration',
	PROFILE = 'profile',
	EVENT_BY_ID = 'event_by_id',
	NOT_FOUND = "not_found",
	ADMIN = 'admin',
	SPECIALIST = 'specialist'
}

export const getRouteMain = () => '/'
export const getRouteRegistration = () => '/registration'
export const getRouteEventById = (id: string) => '/event/' + id
export const getRouteEvent = () => '/event'
export const getRouteProfile = () => '/profile'
export const getRouteSpecialist = () => '/specialist'
export const getRouteSpecialistById = (id: string) => `/specialist/` + id
export const getRouteAdmin = () => '/admin'
export const getRouteNotFound = () => '*'
