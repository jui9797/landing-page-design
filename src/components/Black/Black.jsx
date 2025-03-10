import woman from '../../assets/black-lady.png'
import watch from '../../assets/watch.png'
import timer from '../../assets/timer.png'
import like from '../../assets/like.png'

const Black = () => {
    return (
        <div className="flex flex-col lg:flex-row my-10 lg:my-24 gap-2">
            <div className='w-full lg:w-1/2 space-y-3'>
                <h3 className='font-semibold text-2xl lg:text-4xl'>We serve 4000+ businesses and edit and retouch 10,000+ images daily.</h3>
                <p>With our growing expert team, scaling to meet your photo retouching needs is easy!</p>
                {/* card-1 */}
                <div className="flex justify-start items-center gap-4 bg-[#F3F3F3] p-2 rounded-lg h-[130px] lg:h-[116px] ">
                    <img src={watch} alt="" />
                    <div className='flex flex-col justify-start'>
                        <h4 className='font-bold text-xl'>100% On Time Delivery
                        </h4>
                        <p className='text-xs lg:mt-2'>Simple as...we hate being late as much as you do.</p>
                    </div>
                </div>
                {/* card-2 */}
                <div className="flex justify-start items-center gap-4 bg-[#F3F3F3] p-2 rounded-lg h-[130px] lg:h-[116px]">
                    <img src={timer} alt="" />
                    <div className='flex flex-col justify-start'>
                        <h4 className='font-bold text-xl'>Quick Turnaround Time
                        </h4>
                        <p className='text-xs lg:mt-2'>Get your images back in as little as 1-hour, even if you have hundreds of shots to get through.</p>
                    </div>
                </div>
                {/* card-3 */}
                <div className="flex justify-start items-center gap-4 bg-[#F3F3F3] p-2 rounded-lg h-[130px] lg:h-[116px]">
                    <img src={like} alt="" />
                    <div className='flex flex-col justify-start'>
                        <h4 className='font-bold text-xl'>24/7 Roundabout Service
                        </h4>
                        <p className='text-xs lg:mt-2'>We are here working with you 24/7/365 so that you can get the best out of your time. 100+ retouchers are available for you.</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 h-[200px] lg:h-[500px]'>
                <img className='w-full h-full' src={woman} alt="" />
            </div>
        </div>
    );
};

export default Black;