import { BrowserRouter, Route, Routes } from "react-router-dom";
import { sepolia } from "@starknet-react/chains";
import { StarknetConfig, cartridgeProvider } from "@starknet-react/core";

import { InjectedConnector } from "starknetkit/injected";
import App from "../App";
import LinkMusicApps from "./linkMusicApps";
import Profile from "./myProfile";
import TransferPlaylist from "./transferPlaylist";
import PlaylistBreakdown from "./PlaylistBreakdown";
import PricingPage from "./Pricing";

const connectors = [
  new InjectedConnector({
    options: { id: "argentX", name: "Argent X" }
  }),
  new InjectedConnector({
    options: { id: "braavos", name: "Braavos" }
  })
  // new WebWalletConnector({ url: "https://web.argent.xyz" })
];

const Page = () => {
  const chains = [sepolia];
  const provider = cartridgeProvider();
  return (
    <StarknetConfig chains={chains} provider={provider} connectors={connectors}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/link-music-apps" element={<LinkMusicApps />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transfer" element={<TransferPlaylist />} />
          <Route path="/playlist" element={<PlaylistBreakdown />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </BrowserRouter>
    </StarknetConfig>
  );
};

export default Page;
