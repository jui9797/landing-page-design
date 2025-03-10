import support from '../../assets/support.png'

const Support = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 my-10 lg:my-20 bg-[#B4E0E5] rounded-2xl p-6">
           <div className="lg:w-2/3 text-center lg:text-left p-4 ">
           <h3 className='font-bold text-2xl lg:text-3xl mb-2 lg:mb-4 lg:mt-4'>Let’s get this started...</h3>
           <p className='mb-2 lg:mb-4'>Experience streamlined, cost-effective photo editing solutions for Pro-photographers, Fashion, Apparel, and E-commerce. We offer a full range of services, from quality testing and custom quotes to order placement and tailored solutions.</p>
           <button className="btn border-2 lg:w-1/2 bg-transparent border-black">Try us for free</button>
           </div> 
           <div className='flex justify-center items-center'>
            <img src={support} alt="support" />
           </div>
        </div>
    );
};

export default Support;