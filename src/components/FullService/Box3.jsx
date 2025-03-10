import img1 from '../../assets/dress1.png'
import img2 from '../../assets/dress2.png'

const Box3 = () => {
    return (
        <div className="bg-[#F3F3F3] my-10 rounded-lg p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 h-[500px] lg:h-[700px]">
                   <div>
                    <div className='lg:pl-8 space-y-2 lg:space-y-16'>
                    <h2 className='text-xl lg:text-5xl font-bold'><span className='text-[#8AC1C7] font-bold'>Invisible Mannequin Service: </span><br /> Trust us <br /> for Impeccable Edits</h2>
                    <p className='text-xs lg:text-[16px]'>E-commerce and fashion brands create impactful product photos without the need for models. Our Invisible Mannequin Services add the necessary depth and dimension for truly engaging visuals. We offer fast, affordable editing for large batches of images, with turnaround times as quick as 1 hour.</p>
                    <button className="btn border-2 border-[#8AC1C7] bg-transparent">Try Us For Free</button>
                    </div>
                    
                   </div>
                   <div className="flex lg:flex-col">
                    
                    <img className='w-full  lg:w-1/2 h-[200px] lg:h-[320px] lg:ml-72' src={img1} alt="" />
                   
                    <img className='w-full lg:w-1/2 h-[200px] lg:h-[320px] lg:mr-72' src={img2} alt="" />
                    </div> 
                </div>
    );
};

export default Box3;