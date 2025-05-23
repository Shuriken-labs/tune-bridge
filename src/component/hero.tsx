import { Connector, useAccount, useConnect } from "@starknet-react/core";
import {
  type StarknetkitConnector,
  useStarknetkitConnectModal
} from "starknetkit";

import walletlogo from "../assets/Vector.png";
import playlogo from "../assets/play_circle_24dp_E8EAED_FILL1_wght300_GRAD0_opsz24 1.png";
import { signup } from "../utils/apis";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

const Hero = () => {
  // const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  const { address, account } = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [_isError, setIsError] = useState<string>();
  const [_isFailed, setIsFailed] = useState<boolean>();
  // const [isSuccess, setIsSuccess] = useState<boolean>();
  // const [response, setResponse] = useState<string>();

  const { connect, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[]
  });

  // const { provider } = useProvider();

  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    await connect({ connector: connector as Connector });
  }

  const auth = async (wallet_address: string) => {
    setIsLoading(true);
    try {
      const response = await signup(wallet_address);

      if (response.status == 201) {
        navigate("/link-music-apps");
        setIsLoading(false);
      } else {
        console.log(response.data?.message);
        setIsFailed(true);
        setIsError(response.data?.message);
        setIsLoading(false);
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.status == 400) {
        navigate("/link-music-apps");
        setIsLoading(false);
      } else {
        setIsFailed(true);
        setIsError(axiosError.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (address) {
      auth(address);
    }
  }, [address, account]);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 py-10 bg-cover bg-center bg-no-repeat">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white stretch-sm text-balance">
        SEAMLESS TRANSFER
        <br />
        YOUR MUSIC PLAYLIST
        <br />
        ACROSS PLATFORMS
      </h1>

      <p className="mb-10 max-w-md md:max-w-xl text-sm md:text-lg lg:text-xl text-white font-nunito font-light">
        Transform your music experience with AI-powered playlist creation
      </p>

      <div className="flex flex-col sm:flex-row gap-4 hover:cursor-pointer">
        <button
          className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition hover:cursor-pointer min-w-60"
          onClick={() => {
            if (address) {
              // disconnect();
              auth(address);
            } else {
              connectWallet();
            }
          }}
        >
          {isLoading
            ? "Loading.."
            : address
            ? address?.slice(0, 6) + "..." + address?.slice(-4)
            : "CONNECT WALLET"}
          <img src={walletlogo} alt="Wallet" className="ml-2 w-5 h-5" />
        </button>

        <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition hover:cursor-pointer">
          WATCH DEMO NOW
          <img src={playlogo} alt="Play" className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
