import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterConfig } from "./Routes/RouterConfig.jsx";
import { UserLanguageProvider } from "./Contexts/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserLanguageProvider>
      <RouterProvider router={RouterConfig} />
    </UserLanguageProvider>
  </StrictMode>
);
