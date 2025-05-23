import { sepolia } from "@starknet-react/chains";
import { StarknetConfig, cartridgeProvider } from "@starknet-react/core";

import { InjectedConnector } from "starknetkit/injected";

import "./App.css";
import Navbar from "./component/header";
import Hero from "./component/hero";
import heroimg from "./assets/Property 1=Desktop - 2.png";
import StepByStepProcess from "./component/process";

const connectors = [
  new InjectedConnector({
    options: { id: "argentX", name: "Argent X" }
  }),
  new InjectedConnector({
    options: { id: "braavos", name: "Braavos" }
  })
  // new WebWalletConnector({ url: "https://web.argent.xyz" })
];

function App() {
  const chains = [sepolia];
  const provider = cartridgeProvider();
  return (
    <StarknetConfig chains={chains} provider={provider} connectors={connectors}>
      <div>
        <div
          className="flex flex-col text-amber-50"
          style={{
            backgroundImage: `url(${heroimg})`
          }}
        >
          <Navbar />
          <Hero />
        </div>
        <StepByStepProcess />
      </div>
    </StarknetConfig>
  );
}

export default App;
