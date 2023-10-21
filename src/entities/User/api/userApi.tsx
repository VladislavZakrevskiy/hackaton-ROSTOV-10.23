import { rtkApi } from "@/shared/api/rtkApi";
import { User } from "..";

// TODO: добавить url для сенда
const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		sendCreditial: build.mutation({
			query: (creditial: string) => ({ url: "/", method: "", body: { creditial } }),
		}),
		getMe: build.query<User, void>({
			query: () => "/me",
		}),
	}),
});

export const { useSendCreditialMutation, useGetMeQuery } = userApi;
