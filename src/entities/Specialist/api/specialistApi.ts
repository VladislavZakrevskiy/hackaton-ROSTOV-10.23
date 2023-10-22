import { rtkApi } from "@/shared/api/rtkApi";
import { Specialist } from "../model/types/Specialist";

const specialistApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getSpecialistById: build.query<Specialist, string>({
			query: (id) => "/specialist/" + id,
		}),
		getSpecialists: build.query<Specialist[], void>({
			query: () => "/specialist",
		}),
	}),
});

export const { useGetSpecialistByIdQuery, useGetSpecialistsQuery } = specialistApi;
