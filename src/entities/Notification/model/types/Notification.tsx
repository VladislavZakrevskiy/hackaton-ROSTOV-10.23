import { Event } from "@/entities/Event/model/types/Event";
import { User } from "@/entities/User";

export interface Notification {
	id: string;
	user_id: string;
	user: User;
	event_id: string;
	event: Event;
	text: string;

	created_at: string;
	updated_at: string;
}
