import { UserActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
	const dispatch = useAppDispatch();
	const nav = useNavigate();

	const onSuccess = useCallback((res: CredentialResponse) => {
		dispatch(UserActions.setCredential(res.credential || ""));
		nav("/");
	}, []);

	const onFailure = useCallback(() => {
		dispatch(UserActions.setError());
		console.log("failure");
	}, []);

	return <GoogleLogin onSuccess={onSuccess} onError={onFailure} />;
};
