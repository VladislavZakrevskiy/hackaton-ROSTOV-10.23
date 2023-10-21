import { Comment } from "@/entities/Comment/model/types/Comment"
import { Feedback } from "@/entities/Comment/model/types/Feedback"
import { User } from "@/entities/User"

export interface Event {
	id: string
	image_link: string
	record_link: string
	name: string
	description: string
	start_date: string
	status: "PUBLISHED" | "FINISHED"
	comments?: Comment[]
	notifications?: Notification[] 
	feedbacks: Feedback[]
	specialist_id: string
	specialist: Specialist[]
	users: User[]

	created_at: string
	updated_at: string
}
