import { HelperInfo } from "../features";
import { SurveyForm } from "../features/survey-form";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelperInfo />
    <SurveyForm />
  </StrictMode>
);
