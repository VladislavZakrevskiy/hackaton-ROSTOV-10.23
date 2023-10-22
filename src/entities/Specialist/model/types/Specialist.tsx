import { Feedback } from "@/entities/Comment/model/types/Feedback";
import { Event } from "@/entities/Event/model/types/Event";

export interface Specialist {
	id: string;
	first_name: string;
	last_name: string;
	social_link: string;
	feedbacks: Feedback[];
	events: Event[];

	created_at: string;
	updated_at: string;
}
