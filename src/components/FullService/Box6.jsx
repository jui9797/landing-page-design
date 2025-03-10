import img1 from '../../assets/exampleSet_A.png'
const Box6 = () => {
    return (
         <div className="bg-[#F3F3F3] my-10 rounded-lg p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-4 h-[500px] lg:h-[700px]">
                          
                            <div className='lg:pl-8 space-y-1 lg:space-y-16'>
                            <h2 className='text-xl lg:text-5xl font-bold'><span className='text-[#8AC1C7] font-bold'>Image Cropping & Resizing <br /> Services:</span><br />Perfect sizing, <br /> effortlessly <br /> achieved.</h2>
                            <p className='text-xs lg:text-[16px]'>Expertly crop and resize your images for any platform, ensuring perfect dimensions and optimal display. Get fast, affordable, high-volume image cropping and resizing services starting at just $1 per image, with turnaround times as quick as 1 hour. </p>
                            <button className="btn border-2 border-[#8AC1C7] bg-transparent">Try Us For Free</button>
                            </div>
                            
                           
                           <div className=' mt-2'>
                            <img className=' w-11/12 mx-auto h-[180px] lg:h-[600px] mb-2' src={img1} alt="" />
                            
                            </div> 
                        </div>
    );
};

export default Box6;