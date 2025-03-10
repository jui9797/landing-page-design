import img1 from '../../assets/b1.png'
import img2 from '../../assets/a1.png'

const Box5 = () => {
    return (
         <div className="bg-[#F3F3F3] my-10 rounded-lg p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 h-[500px] lg:h-[700px]">
                   <div>
                    <div className='lg:pl-8 space-y-2 lg:space-y-16'>
                    <h2 className='text-xl lg:text-5xl font-bold'><span className='text-[#8AC1C7] font-bold'>Photo Retouching <br /> Services:</span><br />Flawless <br /> retouching, <br />  perfected.</h2>
                    <p className='text-xs lg:text-[16px]'>Enhance your images with our professional photo retouching services. From subtle corrections to extensive enhancements, we perfect your photos while maintaining a natural look. Get fast, affordable, high-volume photo retouching services starting at just $1 per image.
                    with turnaround times as quick as 1 hour. </p>
                    <button className="btn border-2 border-[#8AC1C7] bg-transparent">Try Us For Free</button>
                    </div>
                    
                   </div>
                   <div className='flex lg:flex-col'>
                    <img className=' w-11/12 mx-auto h-[100px] lg:h-[300px] mb-2' src={img1} alt="" />
                    <img className='w-11/12 mx-auto h-[100px] lg:h-[300px]' src={img2} alt="" />
                    </div> 
                </div>
    );
};

export default Box5;