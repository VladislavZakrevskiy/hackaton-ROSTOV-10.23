import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/app/styles/index.css";
import "@/shared/config/i18n/i18n";
import App from "@/app/App";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleClientUrl } from "./shared/consts/GoogleClientUrl";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
	<GoogleOAuthProvider clientId={GoogleClientUrl}>
		<BrowserRouter>
			<StoreProvider>
				<ErrorBoundary>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</ErrorBoundary>
			</StoreProvider>
		</BrowserRouter>
	</GoogleOAuthProvider>
);
