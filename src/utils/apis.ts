import axios, { type AxiosResponse } from "axios";
import { SERVER_URL } from "./constants";

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
  return response.data;
};

export { signup };
