import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/User";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/consts/localStorage";
import { UserRoles } from "../..";

const initialState: UserSchema = {
	errorEnter: false,
	credential: undefined,
	authData: undefined,
	roles: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
			state.roles = action.payload.roles || [UserRoles.UNAUTH];
		},
		setCredential: (state, action: PayloadAction<string>) => {
			state.credential = action.payload;
			localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
		},
		setError: (state) => {
			state.errorEnter = true;
		},
		logout: (state) => {
			state.authData = undefined;
			localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
		},
	},
});

export const { reducer: UserReducer, actions: UserActions } = userSlice;
