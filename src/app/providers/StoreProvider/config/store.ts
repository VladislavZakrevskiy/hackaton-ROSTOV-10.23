import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'
import { UserReducer } from '@/entities/User'
// import { NavigateOptions, To } from 'react-router-dom'

export const createReduxStore = (
    initaialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
    // nav?: (to: To, options?: NavigateOptions) => void
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: UserReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const reducerManager =
        createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<
            CombinedState<StateSchema>
        >,
        devTools: __IS_DEV__,
        preloadedState: initaialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: { api: $api /* nav */ },
                },
            }).concat(rtkApi.middleware),
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<
    typeof createReduxStore
>['dispatch']
