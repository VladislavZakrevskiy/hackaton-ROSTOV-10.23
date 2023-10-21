import { User } from "@/entities/User"

export interface Comment {
	id: string
	event_id: string
	event: Event
	user_id: string
	user?: User
	text: string

	created_at: string
	updated_at: string
}
