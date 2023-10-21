import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage'

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://752b-46-242-10-177.ngrok-free.app/api#/',
        prepareHeaders: (headers) => {
            const token =
                localStorage.getItem(
                    USER_LOCAL_STORAGE_KEY
                ) || ''
            if (token) {
                headers.set('Authorization', token)
            }
            return headers
        },
    }),
    endpoints: (build) => ({}),
})
