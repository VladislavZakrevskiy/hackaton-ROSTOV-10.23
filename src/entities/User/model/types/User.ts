import { UserRoles } from "../consts/UserRoles";
import { jsonSettings } from "./jsonSettings";

export interface User {
	id: string;
	username: string;
	avatar?: string;
	roles?: UserRoles[];
	jsonSettings?: jsonSettings;
}

export interface UserSchema {
	authData?: User;

	_inited: boolean;
}