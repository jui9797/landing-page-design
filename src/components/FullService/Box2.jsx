import img1 from '../../assets/b2.png'
import img2 from '../../assets/a2.png'

const Box2 = () => {
    return (
        <div className="bg-[#F3F3F3] my-10 rounded-lg p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 h-[500px] lg:h-[700px]">
           <div>
            <div className='lg:pl-8 space-y-2 lg:space-y-16'>
            <h2 className='text-2xl lg:text-5xl font-bold'><span className='text-[#8AC1C7] font-bold'>Best Clipping Path Services: </span><br /> Value Pricing & <br /> Guaranteed <br /> Quality for All br Industries.</h2>
            <p className='text-xs lg:text-[16px]'>Isolate multiple elements within a single image with our multi clipping path services. Ideal for complex product shots and e-commerce needs, we deliver precise and efficient results. Get fast, affordable, high-volume multi clipping path services starting at just $1 per image, with turnaround times as quick as 1 hour.</p>
            <button className="btn border-2 border-[#8AC1C7] bg-transparent">Try Us For Free</button>
            </div>
            
           </div>
           <div className='flex lg:flex-col'>
           <img className='w-full h-[100px] lg:h-[350px]' src={img2} alt="" />
            <img className='lg:mr-[218px] w-full lg:w-2/3 h-[100px] lg:h-[300px]' src={img1} alt="" />
            
            </div> 
        </div>
    );
};

export default Box2; 