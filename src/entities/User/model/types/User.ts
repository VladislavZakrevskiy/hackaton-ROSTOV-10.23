import { Feedback } from "@/entities/Comment/model/types/Feedback";
import { UserRoles } from "../consts/UserRoles";

export interface User {
	id: string
	email: string
	first_name: string
	last_name: string
	image_url: string
	roles: string
	comments?: Comment[]
	notifications?: Notification[]
	feedbacks?: Feedback[]

	created_at: string
	updated_at: string
	events: Event
}

export interface UserSchema {
	errorEnter: boolean;
	credential?: string;
	authData?: User;
	roles: UserRoles[];
}
