import walletlogo from "../assets/Vector.png";
import playlogo from "../assets/play_circle_24dp_E8EAED_FILL1_wght300_GRAD0_opsz24 1.png";

const Hero = () => {
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

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
          CONNECT WALLET
          <img src={walletlogo} alt="Wallet" className="ml-2 w-5 h-5" />
        </button>

        <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
          WATCH DEMO NOW
          <img src={playlogo} alt="Play" className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
