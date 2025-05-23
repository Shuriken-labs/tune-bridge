import { createRoot } from "react-dom/client";
import "./index.css";

import Page from "./pages/Page.tsx";

createRoot(document.getElementById("root")!).render(Page());
