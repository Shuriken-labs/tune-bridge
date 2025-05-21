
import search from '../assets/Frame 63.png'
import tracks from '../assets/tracks.png'
import musictypes from '../assets/music.png'
import flow from '../assets/playlist link.png'
import songsData from '../assets/songData'

const StepByStepProcess = () => {
  return (
    <section className="text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl stretch text-center mb-16">
          STEP-BY-STEP <br /> PROCESS
        </h2>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex flex-row gap-10'>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col'>
                  <h3 className=' text-[60px] leading-[160%] tracking-[0%] stretch-sm text-center'>01/</h3>
                  <img src={search} alt="Search" className="w-full max-w-[616px] h-[90px] object-contain mt-3" />
                </div>
                <div className='flex flex-col mt-20'>
                  <h3 className=' text-[60px] leading-[160%] tracking-[0%] stretch-sm text-center'>03/</h3>
                  <img src={tracks} alt='' className="max-w-[518px] max-h-[303px] w-auto h-auto object-contain mt-3"/>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center w-[656px] h-[646.28px]'>
                <h3 className=' text-[60px] leading-[160%] tracking-[0%] stretch-sm text-center'>02/</h3>
                <img src={musictypes} alt='' className="w-[616px] h-[494.28px] object-contain mt-3"/>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-20'>
             <h3 className=' text-[60px] leading-[160%] tracking-[0%] stretch-sm text-center'>04/</h3>
             <p className='text-center mt-5'>Recieve Your New Playlist Link</p>
             <img src={flow} alt='Playlist Link' className='mt-2'/>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-10'>
          <h2 className="text-[48px] leading-[100%] text-center stretch-sm mt-30">
            AI-POWERED <br /> RECOMMENDATION
          </h2>
          <p className='text-[20px] leading-[100%] font-normal text-center mt-10'>Get suggestions for similar tracks</p>
          <section className="bg-black text-white py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {songsData.map((song) => (
          <div key={song.id} className="flex items-start gap-2 p-4 rounded-lg">
            <img src={song.img} alt={song.title} className="w-12 h-12 object-cover rounded-md" />
            <div>
              <h3 className="font-bold text-white">{song.title}</h3>
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
