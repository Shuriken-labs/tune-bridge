import { useMemo, useState } from "react";
import Navbar from "../component/header";
import walletlogo from "../assets/Vector.png";
import clsx from "clsx";
import { link_platform, type ConnectedPlatform } from "../utils/apis";
import { getLocalStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

export default function LinkMusicApps() {
  const navigate = useNavigate();
  const MUSIC_APP_LIST = useMemo(() => {
    return [
      {
        name: "Spotify",
        icon: "/logos/spotify.webp",
        active: true
      },
      {
        name: "Youtube Music",
        icon: "/logos/youtube-music.webp",
        active: true
      },
      {
        name: "Apple Music",
        icon: "/logos/apple-music.webp",
        active: false
      },
      {
        name: "Amazon Music",
        icon: "/logos/amazon-music.webp",
        active: false
      },
      {
        name: "Tidal",
        icon: "/logos/tidal.webp",
        active: false
      },
      {
        name: "Deezer",
        icon: "/logos/deezer.webp",
        active: false
      },
      {
        name: "Audiomack",
        icon: "/logos/audiomack.webp",
        active: false
      }
    ];
  }, []);

  const [connectedPlatforms, setConnectedPlatforms] = useState<
    Record<string, boolean>
  >({
    Spotify: false,
    "Youtube Music": false,
    "Apple Music": false,
    "Amazon Music": false,
    Tidal: false,
    Deezer: false,
    Audiomack: false
  });

  const toggleConnection = (platformName: string) => {
    setConnectedPlatforms((prev) => ({
      ...prev,
      [platformName]: !prev[platformName]
    }));
  };

  console.log(toggleConnection);

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="size-full inner flex flex-col items-center py-[5rem] gap-[40px] text-white ">
        <p className="text-[64px] stretch text-center leading-none">
          LINK YOUR MUSIC <br />
          APPS
        </p>
        <p className="text-[32]">Please link your music apps to get started:</p>

        <div className="listContainer flex justify-center flex-wrap gap-[25px] px-[15vw]">
          {MUSIC_APP_LIST.map((app, index) => {
            const isConnected = connectedPlatforms[app.name];

            return (
              <button
                key={index}
                className="listItem border border-[#00C6FF] rounded-[10px] w-[234px] h-[253px] flex flex-col items-center justify-center gap-[20px]"
                disabled={!app.active}
                style={{
                  opacity: !app.active ? "0.3" : "1",
                  cursor: app.active ? "pointer" : "not-allowed"
                }}
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  className="size-[64.5px] object-contain"
                  width={64.5}
                  height={64.5}
                />
                <p className="text-[24px] text-white">{app.name}</p>
                {app.active && (
                  <button
                    onClick={() => {
                      let platform: ConnectedPlatform;
                      if (app.name.toLowerCase().includes("spotify")) {
                        platform = "SPOTIFY";
                      } else {
                        platform = "YOUTUBE";
                      }

                      let user_id = getLocalStorage("user", "");
                      if (user_id.length == 0) {
                        return navigate("/");
                      }
                      link_platform(platform, user_id);
                      // toggleConnection(app.name);
                    }}
                    className={clsx(
                      "flex items-center gap-2 justify-center text-white py-1 rounded-full font-semibold transition hover:opacity-90 min-w-36",
                      isConnected
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-gray-900 p-[2px] bg-gradient-to-r from-blue-500 to-purple-600"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex items-center gap-2 justify-center w-full h-full rounded-full px-4 py-2 min-w-[138px]",
                        !isConnected && "bg-gray-900"
                      )}
                    >
                      {isConnected ? "CONNECTED" : "LINK"}
                      <img
                        src={walletlogo}
                        alt="Wallet"
                        className="ml-2 w-5 h-5"
                      />
                    </div>
                  </button>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space w-full h-screen"></div>
    </div>
  );
}
