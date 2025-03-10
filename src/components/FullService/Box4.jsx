import img1 from '../../assets/Color_chang.png'
import img2 from '../../assets/pant-design.png'

const Box4 = () => {
    return (
        <div className="bg-[#F3F3F3] my-10 rounded-lg p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 h-[500px] lg:h-[700px]">
                   <div>
                    <div className='lg:pl-8 space-y-2 lg:space-y-16'>
                    <h2 className='text-xl lg:text-5xl font-bold'><span className='text-[#8AC1C7] font-bold'>Color Processing & <br /> Recoloring <br /> Services: </span><br />Quality you <br /> can trust.</h2>
                    <p className='text-xs lg:text-[16px]'>Enhance your product visuals with our professional Color Processing & Recoloring Services. We create vibrant, accurate colors that make your products stand out.</p>
                    <button className="btn border-2 border-[#8AC1C7] bg-transparent">Try Us For Free</button>
                    </div>
                    
                   </div>
                   <div>
                    <img className='lg:ml-[218px] w-full lg:w-2/3 h-[100px] lg:h-[300px] mb-2 lg:mb-8' src={img1} alt="" />
                    <img className='w-full h-[80px] lg:h-[200px]' src={img2} alt="" />
                    </div> 
                </div>
    );
};

export default Box4;