import { rtkApi } from "@/shared/api/rtkApi";

const admintApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		postEvent: build.mutation({
            query: () => ({
                url: '/event',
                
            })
        })
	}),
});

export const {  } = admintApi;
