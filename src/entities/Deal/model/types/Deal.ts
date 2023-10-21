import { User } from "@/entities/User";

export interface Deal {
	title: string;
	date: string;
	place: string;
	holl: string;
	members: User[];
	format: "Онлайн" | "Запись";
	mode: "online" | "record";
	description: string;
}
