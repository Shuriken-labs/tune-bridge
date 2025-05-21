import search from '../assets/Frame 63.png'
import tracks from '../assets/tracks.png'
import musictypes from '../assets/music.png'
import flow from '../assets/playlist link.png'
import songsData from '../assets/songData'

const StepByStepProcess = () => {
  return (
    <section className="text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 stretch-sm">
          STEP-BY-STEP <br /> PROCESS
        </h2>

        {/* STEP 1, 2, 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Column: Step 01 and 03 */}
          <div className="flex flex-col items-center gap-20">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl sm:text-5xl font-bold stretch-sm">01/</h3>
              <img
                src={search}
                alt="Search"
                className="w-full max-w-[616px] h-auto object-contain mt-3"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl sm:text-5xl font-bold stretch-sm">03/</h3>
              <img
                src={tracks}
                alt="Tracks"
                className="w-full max-w-[518px] h-auto object-contain mt-3"
              />
            </div>
          </div>

          {/* Middle Column: Step 02 */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl font-bold stretch-sm">02/</h3>
            <img
              src={musictypes}
              alt="Music Types"
              className="w-full max-w-[616px] h-auto object-contain mt-3"
            />
          </div>
        </div>

        {/* STEP 4 */}
        <div className="flex flex-col items-center justify-center mt-20 px-4">
          <h3 className="text-4xl sm:text-5xl font-bold text-center stretch-sm">04/</h3>
          <p className="text-center mt-5 text-lg sm:text-xl">Receive Your New Playlist Link</p>
          <img src={flow} alt="Playlist Link" className="mt-5 w-full max-w-4xl object-contain" />
        </div>

        {/* AI Recommendations */}
        <div className="flex flex-col items-center justify-center mt-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center stretch-sm">
            AI-POWERED <br /> RECOMMENDATION
          </h2>
          <p className="text-lg sm:text-xl font-normal text-center mt-6">
            Get suggestions for similar tracks
          </p>

          <section className="bg-black text-white py-10 px-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {songsData.map((song) => (
                <div
                  key={song.id}
                  className="flex items-start gap-3 p-4 rounded-lg bg-zinc-900"
                >
                  <img
                    src={song.img}
                    alt={song.title}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{song.title}</h3>
                    <p className="text-sm text-gray-300">{song.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default StepByStepProcess;
