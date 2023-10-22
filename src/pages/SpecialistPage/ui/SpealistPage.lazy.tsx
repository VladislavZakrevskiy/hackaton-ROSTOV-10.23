import { lazy } from "react";

export const LazySpecialistPage = lazy(async () => await import("./SpealistPage"));
