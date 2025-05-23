import axios, { type AxiosResponse } from "axios";
import { SERVER_URL } from "./constants";
export type ConnectedPlatform = "SPOTIFY" | "YOUTUBE";

const signup = async (
  wallet_address: string
): Promise<AxiosResponse<any, any>> => {
  const response = await axios.post(
    `${SERVER_URL}/auth/signup`,
    {},
    {
      params: {
        walletAddress: wallet_address
      }
    }
  );
  return response;
};

const link_platform = async (
  type: ConnectedPlatform,
  user_id: string
): Promise<AxiosResponse<any, any>> => {
  let platform;
  if (type == "SPOTIFY") {
    platform = "spotify";
  } else platform = "youtube";
  const response = await axios.get(`${SERVER_URL}/${platform}/login`, {
    params: {
      userId: user_id
    }
  });
  return response;
};

export { signup, link_platform };
