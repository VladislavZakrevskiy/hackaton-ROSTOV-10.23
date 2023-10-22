import { rtkApi } from "@/shared/api/rtkApi";
import { Event } from "../model/types/Event";

// TODO: добавить url для сенда
const eventApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getEventById: build.query<Event, string>({
            query: (id: string) => `/event/${id}`
        }),
        getEvents: build.query<Event[], void>({
            query: () => `/event/all`
        })
	}),
});

export const { useGetEventByIdQuery, useGetEventsQuery } = eventApi;
