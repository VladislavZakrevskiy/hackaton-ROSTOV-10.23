import { cn } from "@/shared/lib/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector";
import { PageLoader } from "@/widgets/PageLoader";
import { Suspense, useEffect, useState } from "react";
import { AppRouter } from "./providers/router";
import { useGetMeQuery } from "@/entities/User/api/userApi";
import { UserActions } from "@/entities/User";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

function App() {
	const [inited, setInited] = useState(false);
	const { data: user } = useGetMeQuery();
	const credential = useAppSelector((state) => state.user.credential);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user) {
			dispatch(UserActions.setAuthData(user));
		}
		setInited(true);
	}, [user, credential, dispatch]);

	if (!inited) {
		return <PageLoader />;
	}

	return (
		<div className={cn("app", {}, [])}>
			<Navbar />
			<Suspense fallback={<PageLoader />}>{inited && <AppRouter />}</Suspense>
			<Footer />
		</div>
	);
}

export default App;
