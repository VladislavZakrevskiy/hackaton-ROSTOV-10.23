import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage'

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://248c-46-242-10-177.ngrok-free.app/',
        prepareHeaders: (headers) => {
            const token =
                localStorage.getItem(
                    USER_LOCAL_STORAGE_KEY
                ) || ''
            if (token) {
                headers.set('Authorization', token.replace(/"/g, ""))
                headers.set('ngrok-skip-browser-warning', 'true')
            }
            return headers
        },
    }),
    endpoints: (build) => ({}),
})
