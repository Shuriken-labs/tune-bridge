import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkMusicApps from "./pages/linkMusicApps.tsx";
import Profile from "./pages/myProfile.tsx";
import TransferPlaylist from "./pages/transferPlaylist.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/linkMusicApps" element={<LinkMusicApps />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transferPlaylist" element={<TransferPlaylist />} />
        </Routes>
    </BrowserRouter>
);
