import img1 from '../../assets/b1 (1).png'
import img2 from '../../assets/box5-img2.png'

const Box8 = () => {
    return (
        <div className="bg-[#F3F3F3] my-10 rounded-lg p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 h-[500px] lg:h-[700px]">
                           <div>
                            <div className='lg:pl-8 space-y-2 lg:space-y-16'>
                            <h2 className='text-xl lg:text-5xl font-bold'><span className='text-[#8AC1C7] font-bold'>Image Masking <br /> Services:</span><br /> Intricate details, <br /> flawlessly masked.</h2>
                            <p className='text-xs lg:text-[16px]'>Isolate subjects with precision using our expert image masking services.  Perfect for complex images and intricate details, our masking services deliver clean, professional results. Get fast, affordable, high-volume image masking services starting at just $1 per image, with turnaround times as quick as 1 hour.</p>
                            <button className="btn border-2 border-[#8AC1C7] bg-transparent">Try Us For Free</button>
                            </div>
                            
                           </div>
                           <div className="flex lg:flex-col">
                            
                            <img className='w-full  lg:w-[300px] xs-h-[150px] h-[160px] lg:h-[280px] lg:ml-64 ' src={img1} alt="" />
                           
                            <img className='w-full lg:w-1/2 xs-h-[150px] h-[160px] lg:h-[350px] lg:mr-72' src={img2} alt="" />
                            </div> 
                        </div>
    );
};

export default Box8;