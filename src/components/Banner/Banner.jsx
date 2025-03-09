import bannerimg from '../../assets/hand.png'

const Banner = () => {
    return (
        <>
          <div className="flex flex-col lg:flex-row gap-4 border-none">
            <div className='lg:w-1/2 flex flex-col justify-center text-center lg:text-left gap-4 lg:pl-12'>
            <h1 className='text-[#000000] text-3xl lg:text-7xl font-bold'><span className='text-[#8AC1C7]'>Industry & Niche Based Services:</span><br /> Home to All Your Retouching Solutions</h1>
            <p className='lg:w-[410px]'>We've become a leading provider of photo editing services. We help photographers and agencies achieve stunning results for their campaigns.</p>
            <div>
            <button className="btn border-2 rounded-lg border-[#8AC1C7]">Book a consultation</button>
            </div>
            </div>
            <div className='lg:w-1/2 h-[350px] lg:h-[600px]'>
                <img className='w-full h-full' src={bannerimg} alt="banner" />
            </div>
        </div>  
        </>
    );
};

export default Banner;