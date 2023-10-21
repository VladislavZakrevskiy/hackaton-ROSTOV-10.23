import { lazy } from "react";

export const LazyEventPage = lazy(async () => await import("./EventPage"));
