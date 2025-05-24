import {
  Connector,
  useAccount,
  useConnect,
  useContract,
  useProvider
} from "@starknet-react/core";
import contract_abi from "../dev/tunebridge_subscription_TuneBridge.contract_class.json";
import erc20_contract_abi from "../erc20/dev/erc20_erc20.contract_class.json";
import { CONTRACT_ADDRESS, STRK_TOKEN_ADDRESS } from "../utils/constants";
import { num, TransactionExecutionStatus, type Abi } from "starknet";
import { useEffect, useState } from "react";
import {
  useStarknetkitConnectModal,
  type StarknetkitConnector
} from "starknetkit";
import { useNavigate } from "react-router-dom";

export interface IUser {
  amount: BigInt;
  date: BigInt;
  user_address: BigInt;
}

const PricingPage = () => {
  const { provider } = useProvider();
  const { address, account } = useAccount();
  const [userState, setUserState] = useState<IUser>();
  const navigate = useNavigate();
  const [pricing, setPricing] = useState<BigInt[]>([]);

  const { contract: contract1 } = useContract({
    abi: contract_abi.abi as Abi,
    address: CONTRACT_ADDRESS,
    provider: provider
  });

  const { contract: erc20Contract } = useContract({
    abi: erc20_contract_abi.abi as Abi,
    address: STRK_TOKEN_ADDRESS,
    provider: provider
  });
  const { connect, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[]
  });

  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    if (!address || !account) connect({ connector: connector as Connector });
  }

  const fetchUserData = async () => {
    if (!contract1 || !address) return;
    console.log("reached here");
    try {
      const response = await (contract1.call as any)("fetch_user", [address]);

      setUserState(response);
      console.log("User state:", response);
      return response;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchSubscriptionAmount = async () => {
    if (!contract1 || !address) return;
    try {
      const response: BigInt[] = (await contract1.call(
        "get_subscription_amount"
      )) as unknown as BigInt[];
      console.log("Subscription Amount:", response);
      setPricing(response);
      return response;
    } catch (error) {
      console.error("Error fetching subscription amount:", error);
      throw Error("Couldn't fetch subscription amount");
    }
  };

  const handleSubscribe = async (index: number) => {
    if (!contract1 || !account) return;

    try {
      const response = await account.execute([
        {
          contractAddress: CONTRACT_ADDRESS,
          entrypoint: "subscribe",
          calldata: [index]
        }
      ]);
      console.log("Subscribe transaction hash:", response.transaction_hash);

      console.log("Waiting for confirmation...");
      const waitForTx = await provider.waitForTransaction(
        response.transaction_hash,
        {
          successStates: [TransactionExecutionStatus.SUCCEEDED]
        }
      );
      console.log(waitForTx);
      // You can wait for transaction confirmation if needed

      console.log("Transaction confirmed!");

      // Refresh user data after subscription
      fetchUserData();
    } catch (err) {
      console.error("Error subscribing:", err);
      throw err;
    }
  };

  const handleApprove = async (index: number) => {
    if (!erc20Contract || !account) return false;

    try {
      const amounts = await fetchSubscriptionAmount();
      if (!amounts) throw new Error("Failed to fetch subscription amounts");

      const subscription_amount = amounts[index];
      if (!subscription_amount)
        throw Error("Couldn't fetch subscription amount at approval");

      const amountBigInt = BigInt(subscription_amount.toString());
      const LOW_PART = BigInt(2) ** BigInt(128);
      const low = (amountBigInt % LOW_PART).toString();
      const high = (amountBigInt / LOW_PART).toString();

      const response = await account.execute([
        {
          contractAddress: STRK_TOKEN_ADDRESS,
          entrypoint: "approve",
          calldata: [CONTRACT_ADDRESS, low, high]
        }
      ]);

      console.log("Approve tx hash:", response.transaction_hash);

      const result = await provider.waitForTransaction(
        response.transaction_hash,
        {
          successStates: [TransactionExecutionStatus.SUCCEEDED]
        }
      );

      console.log("Approval confirmed:", result);
      return true;
    } catch (error) {
      console.error("Error approving contract to spend on behalf:", error);
      return false;
    }
  };
  const hasActiveSubscription = (index: number): boolean => {
    if (!userState) return false;

    // `userState.amount` should match pricing[index] if subscribed to that plan
    const userAmount = BigInt(userState.amount.toString());
    const currentPlanAmount = pricing[index];

    return userAmount === BigInt(currentPlanAmount?.toString() || "0");
  };

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    fetchSubscriptionAmount();
    fetchUserData();
  }, [address, account]);

  return (
    <div className="min-h-screen  text-white p-6 ">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 stretch">Pricing</h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto nunito">
          <span className="text-red-500 mr-1">Testnet Tokens - </span>
          Proceed to{" "}
          <a
            href="https://starknet-faucet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 underline italic"
          >
            Faucet to get some $STRK tokens
          </a>
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-lg p-8 border ${plan.theme} ${
              plan.popular
                ? "bg-gray-800 transform scale-105 z-10"
                : "bg-gray-900/50"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <h2
              className={`text-2xl font-bold mb-2 stretch ${
                plan.popular ? "text-purple-400" : ""
              }`}
            >
              {plan.name}
            </h2>
            <p className="text-gray-400 mb-6 nunito">{plan.description}</p>

            <div className="mb-8">
              <span className="text-4xl font-bold ">
                {(pricing.length > 0 &&
                  formatTokenAmount(pricing[index]?.toString())) ||
                  0}{" "}
                STRK
              </span>
              <span className="text-gray-400">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {hasActiveSubscription(index) ? (
              <button
                disabled
                className="w-full py-3 px-6 rounded-lg font-bold transition-all text-white bg-gray-600 cursor-not-allowed opacity-70"
              >
                Current Plan
              </button>
            ) : (
              <button
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all text-white ${
                  plan.popular
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={async () => {
                  const approved = await handleApprove(index);
                  if (!approved) {
                    console.error("Approval failed or was rejected");
                    return;
                  }

                  await handleSubscribe(index);
                  navigate("/link-music-apps");
                }}
              >
                Get Started
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;

function formatTokenAmount(amount: string, decimals: number = 18): string {
  const bigIntValue = num.toBigInt(amount);
  const divisor = 10n ** BigInt(decimals);

  const whole = bigIntValue / divisor;
  const fractional = bigIntValue % divisor;

  return `${whole}.${fractional
    .toString()
    .padStart(decimals, "0")
    .replace(/0+$/, "")}`;
}

const plans = [
  {
    name: "Basic",
    price: "..STRK",
    period: "/month",
    description: "For casual playlist creators",
    features: [
      "Convert up to 10 playlists/month",
      "Basic audio quality",
      "Ad-supported experience",
      "Email support",
      "Spotify to YouTube only",
      "up to 40 songs per playlist"
    ],
    popular: false,
    theme: "text-blue-500 border-blue-500"
  },
  {
    name: "Pro",
    price: "..STRK",
    period: "/month",
    description: "For serious music lovers",
    features: [
      "Unlimited playlist conversions",
      "High audio quality",
      "Ad-free experience",
      "Priority email support",
      "Spotify ↔ YouTube two-way sync",
      "up to 100 songs per playlist"
    ],
    popular: true,
    theme: "text-purple-500 border-purple-500"
  }
  // {
  //   name: "Premium",
  //   price: "..STRK",
  //   period: "/month",
  //   description: "For power users & creators",
  //   features: [
  //     "All Pro features",
  //     "Lossless audio quality",
  //     "24/7 live chat support",
  //     "Early access to new features",
  //     "Collaborative playlist tools",
  //     "Metadata editing",
  //     "Dedicated account manager"
  //   ],
  //   popular: false,
  //   theme: "text-pink-500 border-pink-500"
  // }
];
