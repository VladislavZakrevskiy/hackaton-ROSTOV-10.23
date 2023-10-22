import { rtkApi } from "@/shared/api/rtkApi";
import { Notification } from "../model/types/Notification";

// TODO: добавить url для сенда
const notificationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getNotifications: build.query<Notification[], void>({
			query: () => "/notifications",
		}),
	}),
});

export const { useGetNotificationsQuery } = notificationApi;
