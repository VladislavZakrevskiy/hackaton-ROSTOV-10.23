import { lazy } from "react";

export const LazyProfiePage = lazy(async () => await import("./ProfiePage"));
