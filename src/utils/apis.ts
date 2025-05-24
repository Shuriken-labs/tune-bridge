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

const link_platform = async (type: ConnectedPlatform, user_id: string) => {
  let platform;
  if (type == "SPOTIFY") {
    platform = "spotify";
  } else platform = "youtube";

  window.location.href = `${SERVER_URL}/${platform}/login?userId=${user_id}`;
};

const fetch_playlists = async (
  type: ConnectedPlatform,
  user_id: string
): Promise<AxiosResponse<any, any>> => {
  let platform;
  if (type == "SPOTIFY") {
    platform = "spotify";
  } else platform = "youtube";

  const response = await axios.get(
    `${SERVER_URL}/${platform}/get-playlists/${user_id}`
  );

  return response;
};

const fetch_playlists_destination_platform = async (
  type: ConnectedPlatform,
  user_id: string
): Promise<AxiosResponse<any, any>> => {
  let platform;
  if (type == "SPOTIFY") {
    platform = "youtube";
  } else platform = "spotify";

  const response = await axios.get(
    `${SERVER_URL}/${platform}/get-playlists/${user_id}`
  );

  return response;
};

const fetch_playlist_tracks = async (
  type: ConnectedPlatform,
  user_id: string,
  playlist_id: string
): Promise<AxiosResponse<any, any>> => {
  let platform;
  if (type == "SPOTIFY") {
    platform = "spotify";
  } else platform = "youtube";

  const response = await axios.get(
    `${SERVER_URL}/${platform}/get-playlist-tracks/${user_id}/${playlist_id}`
  );
  return response;
};

const create_playlist = async (
  type: ConnectedPlatform,
  user_id: string,
  title: string,
  description: string | undefined
): Promise<AxiosResponse<any>> => {
  let platform;
  if (type == "SPOTIFY") {
    platform = "spotify";
  } else platform = "youtube";

  const response = await axios.post(
    `${SERVER_URL}/${platform}/create-playlist/${user_id}`,
    type == "YOUTUBE"
      ? {
          title,
          description,
          privacyStatus: "public"
        }
      : {
          name: title,
          description,
          privacyStatus: "public"
        }
  );

  console.log("response from create playliist");
  console.log(response);

  return response;
};

interface ISongSearch {
  title: string;
  artists: string;
}

const find_tracks_in_destination_platform = async (
  type: ConnectedPlatform,
  user_id: string,
  songs: ISongSearch[]
): Promise<AxiosResponse<any>> => {
  let platform;
  if (type == "SPOTIFY") {
    platform = "youtube";
  } else platform = "spotify";

  const response = await axios.post(
    `${SERVER_URL}/${platform}/search-${platform}/${user_id}`,
    {
      songs
    }
  );

  console.log(response);

  return response;
};

const add_tracks_to_destination_platform = async (
  type: ConnectedPlatform,
  user_id: string,
  playistId: string,
  trackIds: string[]
): Promise<AxiosResponse<any>> => {
  let platform;
  if (type == "SPOTIFY") {
    platform = "youtube";
  } else platform = "spotify";

  const response = await axios.post(
    `${SERVER_URL}/${platform}/add-to-playlist/${user_id}/${playistId}`,
    platform == "spotify"
      ? {
          trackIds: trackIds
        }
      : {
          videoIds: trackIds
        }
  );

  console.log(response);

  return response;
};

export {
  signup,
  link_platform,
  fetch_playlists,
  fetch_playlist_tracks,
  create_playlist,
  find_tracks_in_destination_platform,
  add_tracks_to_destination_platform,
  fetch_playlists_destination_platform
};
