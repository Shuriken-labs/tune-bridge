import React from "react";
import walletlogo from "../assets/Vector.png";
import playlogo from "../assets/play_circle_24dp_E8EAED_FILL1_wght300_GRAD0_opsz24 1.png";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center  px-6 bg-cover bg-center bg-no-repeat">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 stretch text-white">
                SEAMLESS TRANSFER
                <br />
                YOUR MUSIC PLAYLIST
                <br />
                ACROSS PLATFORMS
            </h1>
            <p className="mb-10 max-w-xl font-Nunito font-light text-32px text-center nunito ">
                Transform your music experience with AI-powered playlist
                creation
            </p>
            <div className="flex gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 cursor-pointer">
                    CONNECT WALLET
                    <img
                        src={walletlogo}
                        alt="Vector graphic"
                        className="inline-block ml-2"
                    />
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 cursor-pointer">
                    WATCH DEMO NOW
                    <img
                        src={playlogo}
                        alt="Play graphic"
                        className="inline-block ml-2"
                    />
                </button>
            </div>
        </section>
    );
};

export default Hero;
