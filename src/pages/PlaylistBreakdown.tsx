import { useNavigate } from "react-router-dom";
import Navbar from "../component/header";
import BottomNav from "../component/Bottom-nav";
import BackIcon from "../assets/back-icon.png"; // back icon

import { useLocation } from "react-router-dom";
import type { IMusic, ISpotify } from "./transferPlaylist";
import { useEffect, useState } from "react";
import {
  add_tracks_to_destination_platform,
  create_playlist,
  fetch_playlist_tracks,
  fetch_playlists_destination_platform,
  find_tracks_in_destination_platform,
  type ConnectedPlatform
} from "../utils/apis";
import { getLocalStorage } from "../utils/localStorage";

interface LocationState {
  origin: string;
  track: IMusic | ISpotify;
  destination: string;
}

interface IYTMusic {
  videoId: string;
  title: string;
  artists: string;
  songTitle: string;
  thumbnail: string;
  videoOwnerChannelTitle: string;
}

interface ISpotifyMusic {
  trackName: string;
  albumName: string;
  thumbnail: string;
  artists: string;
}

interface IYTSearchResult {
  query: {
    title: string;
    artists: string;
  };
  videoId: string | null;
  message?: string;
}

const PlaylistBreakdown = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { origin, track, destination } = location?.state as LocationState;
  const [bridgeStatus, setBridgeStatus] = useState<string>(
    "ALL GOOD, BRIDGE ⚡️"
  );
  const [trackItems, setTrackItems] = useState<IYTMusic[] | ISpotifyMusic[]>(
    []
  );

  const [playlistName, setPlaylstName] = useState<string>();

  if (!origin || !track || !destination) {
    console.log("origin missing");
  }

  useEffect(() => {
    if (!origin || !track || !destination) {
      navigate("/link-music-apps");
    }
  }, [origin, track, destination, navigate]);

  let platform: ConnectedPlatform;
  useEffect(() => {
    if (!origin || !track || !destination) {
      navigate("/link-music-apps");
      return;
    }
    {
      "title" in track
        ? setPlaylstName(track.title)
        : setPlaylstName(track.name);
    }

    if (origin && origin.toLowerCase().includes("spotify")) {
      platform = "SPOTIFY";
    } else {
      platform = "YOUTUBE";
    }
    let user_id = getLocalStorage("user", "");
    if (user_id.length == 0) {
      navigate("/link-music-apps");
      return;
    }
    console.log(platform);
    fetch_playlist_tracks(platform, user_id, track.id).then((response) => {
      console.log(response);
      setTrackItems(response.data.tracks);
    });
  }, []);

  return (
    <div className="w-screen h-screen text-white">
      {/* Navbar */}
      <div className="hidden md:flex">
        <Navbar />
      </div>

      {/* Mobile Back Button */}
      <div className="absolute top-6 left-4 z-10 md:hidden">
        <button onClick={() => navigate(-1)} className="text-white">
          <img src={BackIcon} alt="Back" className="w-6 h-6" />
        </button>
      </div>

      {/* Content Section */}
      <section className="w-full flex flex-col items-center justify-start px-4 pt-24 pb-32">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight mb-2 stretch">
          PLAYLIST <br /> BREAKDOWN
        </h2>
        {track && (
          <p className="text-2xl text-[#00C6FF] mb-6 stretch">
            {"title" in track ? track.title : track.name}
          </p>
        )}

        <div className="mb-6 text-sm text-gray-300 stretch bg-[#1f1f1f] w-full max-w-[700px] rounded-full px-2 py-1 items-center border border-white">
          <p className="text-center">
            {origin} To {destination}
          </p>
        </div>

        {/* Track List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[700px] mb-10 h-72 overflow-y-auto">
          {trackItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-[#1f1f1f] rounded-md px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.thumbnail} // Placeholder image
                  alt="Track"
                  className="w-10 h-10 rounded object-cover"
                  style={{
                    backgroundPosition: "center"
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {"songTitle" in item ? item.songTitle : item.trackName}
                  </span>
                  <span className="text-xs text-gray-400">{item.artists}</span>
                </div>
              </div>
              {/* <img src={blue} alt="Play" className="w-6 h-6" /> */}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="w-[200px] sm:w-[180px] h-[45px] px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-white hover:text-black transition disabled:text-gray-400 disabled:border-gray-400 disabled:hover:cursor-none"
            disabled
          >
            MINT PLAYLIST
          </button>
          <button
            className="w-[200px] sm:w-[220px] h-[45px] px-4 py-2 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#285DBC] to-[#5808B9] text-white font-medium"
            onClick={async () => {
              if (origin && origin.includes("spotify")) {
                platform = "YOUTUBE";
              } else {
                platform = "SPOTIFY";
              }

              let user_id = getLocalStorage("user", "");
              setBridgeStatus("Creating Playlist...");
              let playlist_id: string | undefined;

              const fetch_user_playlists_on_destination_platform =
                await fetch_playlists_destination_platform(platform, user_id);

              const existing_playlists =
                fetch_user_playlists_on_destination_platform.data.playlists as
                  | IMusic[]
                  | ISpotify[];

              let playlists: string[] = [];

              if (
                Array.isArray(existing_playlists) &&
                existing_playlists.length > 0
              ) {
                const first = existing_playlists[0];

                if ("title" in first) {
                  // It's IMusic[]
                  playlists = existing_playlists.map(
                    (item) => (item as IMusic).title
                  );

                  if (playlistName && playlists.includes(playlistName)) {
                    const match = (existing_playlists as IMusic[]).find(
                      (p) => p.title === playlistName
                    );
                    playlist_id = match?.id;
                  }
                } else if ("name" in first) {
                  // It's ISpotify[]
                  playlists = existing_playlists.map(
                    (item) => (item as ISpotify).name
                  );

                  if (playlistName && playlists.includes(playlistName)) {
                    const match = (existing_playlists as ISpotify[]).find(
                      (p) => p.name === playlistName
                    );
                    playlist_id = match?.id;
                  }
                }
              }

              // 👉 Create playlist only if it doesn't exist
              if (!playlist_id && playlistName) {
                const response = await create_playlist(
                  platform,
                  user_id,
                  playlistName, // Use directly here
                  track.description // Assuming `track` is in scope
                );

                playlist_id = response.data.playlistId;
              }

              const tracks = trackItems.map((e: IYTMusic | ISpotifyMusic) => {
                if ("songTitle" in e)
                  return {
                    title: e.songTitle,
                    artists: e.artists
                  };
                else
                  return {
                    title: e.trackName,
                    artists: e.artists
                  };
              });

              const response = await find_tracks_in_destination_platform(
                platform,
                user_id,
                tracks
              );

              const found_tracks = response.data.results as IYTSearchResult[];
              const filtered = found_tracks
                .map((e) => e.videoId)
                .filter((id): id is string => id !== null);
              console.log(filtered);

              add_tracks_to_destination_platform(
                platform,
                user_id,
                playlist_id || "",
                filtered
              );
            }}
          >
            {bridgeStatus}
          </button>
        </div>
      </section>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};

export default PlaylistBreakdown;
