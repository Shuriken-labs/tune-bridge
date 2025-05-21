import { useMemo } from "react";
import Navbar from "../component/header";

export default function LinkMusicApps() {
    const MUSIC_APP_LIST = useMemo(() => {
        return [
            {
                name: "Spotify",
                icon: "/logos/spotify.webp",
            },
            {
                name: "Apple Music",
                icon: "/logos/apple-music.webp",
            },
            {
                name: "Youtube Music",
                icon: "/logos/youtube-music.webp",
            },
            {
                name: "Amazon Music",
                icon: "/logos/amazon-music.webp",
            },
            {
                name: "Tidal",
                icon: "/logos/tidal.webp",
            },
            {
                name: "Deezer",
                icon: "/logos/deezer.webp",
            },
            {
                name: "Audiomack",
                icon: "/logos/audiomack.webp",
            },
        ];
    }, []);

    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div className="size-full inner flex flex-col items-center py-[5rem] gap-[40px] ">
                <p className="text-[64px] stretch text-center leading-none">
                    LINK YOUR MUSIC <br />
                    APPS
                </p>
                <p className="text-[32]">
                    Please link your music apps to get started:
                </p>

                <div className="listContainer flex justify-center flex-wrap gap-[25px] px-[15vw]">
                    {MUSIC_APP_LIST.map((app, index) => (
                        <div
                            key={index}
                            className="listItem border border-[#00C6FF] rounded-[10px] w-[234px] h-[253px] flex flex-col items-center justify-center gap-[20px]"
                        >
                            <img
                                src={app.icon}
                                alt={app.name}
                                className="size-[64.5px] object-contain"
                                width={64.5}
                                height={64.5}
                            />
                            <p className="text-[24px] ">{app.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space w-full h-screen"></div>
        </div>
    );
}
