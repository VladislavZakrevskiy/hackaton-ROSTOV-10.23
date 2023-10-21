import { UserRoles } from "../consts/UserRoles";
import { jsonSettings } from "./jsonSettings";

export interface User {
	id: string;
	username: string;
	roles?: UserRoles[];
	jsonSettings?: jsonSettings;
	avatarSrc?: string
}

export interface UserSchema {
	authData?: User;

	_inited: boolean;
}