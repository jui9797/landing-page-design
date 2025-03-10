import bannerimg from '../../assets/hand.png'

const Banner = () => {
    return (
        <>
          <div className="flex flex-col lg:flex-row  border-none">
            <div className='lg:w-1/2 flex flex-col justify-center text-center lg:text-left  lg:pl-10 mb-4 mt-4'>
            <h1 className='text-[#000000] text-2xl lg:text-7xl font-bold  w-full'><span className='text-[#8AC1C7]'>Industry & Niche Based Services:</span><br /> Home to All Your Retouching Solutions</h1>
            <p className='lg:w-[410px] my-4 lg:my-8 text-xs lg:text-[16px]'>We've become a leading provider of photo editing services. We help photographers and agencies achieve stunning results for their campaigns.</p>
            <div>
            <button className="btn p-2 lg:py-4 lg:px-8 bg-transparent rounded-lg border-[#8AC1C7]">Book a consultation</button>
            </div>
            </div>
            <div className='lg:w-1/2 w-[300px] h-[250px] lg:h-[600px] mx-auto'>
                <img className='w-full h-full mx-auto' src={bannerimg} alt="banner" />
            </div>
        </div>  
        </>
    );
};

export default Banner;