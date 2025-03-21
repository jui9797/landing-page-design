import book from '../../assets/book.png'
import { FaCircleArrowRight } from "react-icons/fa6";
import dog from '../../assets/dog.png'
import dog2 from '../../assets/b1.png'
import dress from '../../assets/dress1.png'
import dress2 from '../../assets/dress2.png'
import design from '../../assets/dress-color.png'
import design2 from '../../assets/pant-design.png'
import girl from '../../assets/face.png'
import crop1 from '../../assets/crop1.png'
import crop2 from '../../assets/crop2.png'
import shadow from '../../assets/shadow1.png'
import shadow2 from '../../assets/shadow2.png'
import mask from '../../assets/masking.png'
import mask2 from '../../assets/masking2.png'

const Service = () => {
    return (
        <div id='service'>
            <h2 className="text-black text-2xl lg:text-4xl font-bold text-center lg:text-left mb-6">Our Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* card-1 */}
                <div className='lg:w-[680px] h-[320px] lg:h-[242px] flex flex-col lg:flex-row lg:gap-4 border-2 border-black rounded-lg p-4'>
                    <div className='w-full lg:w-2/3 lg:space-y-2 lg:p-4'>
                        <div>
                        <h3 className='text-xl lg:text-2xl  text-[#3D7E8F] font-bold'>Multi Clipping Path <br /> Service</h3>
                        </div>
                        <div className='h-16'>
                        <p className="text-xs text-[#000000]">We streamline your post-production with fast, accurate product clippings (even complex shapes) in under 3 hours, freeing your team for other tasks.</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold lg:text-xl'>
                        <p><FaCircleArrowRight /></p>
                        <div>
                        <button>Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className=''>
                        <img className='w-full h-[120px] lg:w-[257px] lg:h-[170px]' src={book} alt="book" />
                    </div>
                </div>
                {/* card-2 */}
                <div className='lg:w-[680px] h-[320px] lg:h-[242px] flex flex-col lg:flex-row lg:gap-4  border-2 border-black rounded-lg p-4'>
                    <div className='lg:w-1/2 lg:space-y-2 lg:p-4 mb-2'>
                        <div>
                        <h3 className='text-xl lg:text-2xl text-[#3D7E8F] font-bold'>Clipping Path <br />
                        Service</h3>
                        </div>
                        <div className='h-16'>
                        <p className="text-xs text-[#000000]">We deliver world-class, pixel-perfect clipping paths for top e-commerce brands by our expert photo editors.</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold lg:text-xl'>
                        <span><FaCircleArrowRight /></span>
                        <div>
                        <button>Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-36 h-28 lg:h-36' src={dog} alt="dog" />
                        <img className='w-36 h-28 lg:h-36' src={dog2} alt="dog" />
                    </div>
                </div>
                {/* card-3 */}
                <div className='lg:w-[680px] h-[320px] lg:h-[242px] flex flex-col lg:flex-row lg:gap-4 border-2 border-black rounded-lg p-4'>
                    <div className='lg:w-1/2 lg:space-y-2 lg:p-4'>
                        <div>
                        <h3 className='text-xl lg:text-2xl text-[#3D7E8F] font-bold'>Invisible Mannequin  <br />
                        Service</h3>
                        </div>
                        <div className='h-16'>
                        <p className="text-xs text-[#000000]">Streamline your post-production with our fast, accurate product clippings (even complex shapes) delivered in under 3 hours.</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold lg:text-xl'>
                        <span><FaCircleArrowRight /></span>
                        <div>
                        <button>Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-24 h-28' src={dress} alt="dog" />
                        <img className='w-24 h-28 lg:mt-16' src={dress2} alt="dog" />
                    </div>
                </div>
                {/* card-4 */}
                <div className='lg:w-[680px] h-[320px] lg:h-[242px] flex flex-col lg:flex-row lg:gap-4 border-2 border-black rounded-lg p-4'>
                    <div className='lg:w-1/2 lg:space-y-2 lg:p-4 mb-4'>
                        <div>
                        <h3 className='text-xl lg:text-2xl text-[#3D7E8F] font-bold'>Color processing & <br />
                        recolouring Service</h3>
                        </div>
                        <div className='h-16'>
                        <p className="text-xs text-[#000000]">We provide high-quality vector conversions from raster images for businesses like print-on-demand, automotive, and marketing agencies.</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold lg:text-xl'>
                        <span><FaCircleArrowRight /></span>
                        <div>
                        <button>Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center lg:flex-col gap-2'>
                        <img className='w-40 lg:w-52 h-20' src={design} alt="dog" />
                        <img className='w-40 lg:w-52 h-20' src={design2} alt="dog" />
                    </div>
                </div>
                {/* card-5 */}
                <div className='lg:w-[680px] h-[320px] lg:h-[242px] flex flex-col lg:flex-row lg:gap-4 border-2 border-black rounded-lg p-4'>
                    <div className='lg:w-1/2 lg:space-y-2 lg:p-4 mb-2'>
                        <div>
                        <h3 className='text-xl lg:text-2xl text-[#3D7E8F] font-bold'>Photo Retouching <br />
                        Service</h3>
                        </div>
                        <div className='h-16'>
                        <p className="text-xs text-[#000000]">We provide expert image retouching for fashion, advertising, and print media, creating layered paths for precise editing of skin, hair, clothing, and all elements within the image.</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold lg:text-xl'>
                        <span><FaCircleArrowRight /></span>
                        <div>
                        <button>Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-[150px] h-[120px] lg:w-[292px] lg:h-[200px]' src={girl} alt="dog" />
                        
                    </div>
                </div>
                {/* card-6 */}
                <div className='lg:w-[680px] h-[320px] lg:h-[242px] flex flex-col lg:flex-row lg:gap-4 border-2 border-black rounded-lg p-4'>
                    <div className='lg:w-1/2 lg:space-y-2 lg:p-4 mb-2'>
                        <div>
                        <h3 className='text-xl lg:text-2xl text-[#3D7E8F] font-bold'>Image Cropping & <br />
                        Resizing Service</h3>
                        </div>
                        <div className='h-16'>
                        <p className="text-xs text-[#000000]">Beyond basic edits, we enhance apparel appeal by expertly shaping, reducing creases, and creating symmetry, leveraging biological imperatives to maximize visual impact.</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold lg:text-xl'>
                        <span><FaCircleArrowRight /></span>
                        <div>
                        <button>Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-36 h-28 lg:h-36' src={crop1} alt="dog" />
                        <img className='w-36 h-28 lg:h-36' src={crop2} alt="dog" />
                    </div>
                </div>
                {/* card-7 */}
                <div className='lg:w-[680px] h-[320px] lg:h-[242px] flex flex-col lg:flex-row lg:gap-4 border-2 border-black rounded-lg p-4'>
                    <div className='lg:w-1/2 lg:space-y-2 lg:p-4 mb-2'>
                        <div>
                        <h3 className='text-xl lg:text-2xl text-[#3D7E8F] font-bold'>Shadows & Reflections <br />
                        Service</h3>
                        </div>
                        <div className='h-16'>
                        <p className="text-xs text-[#000000]">We streamline your post-production with fast, accurate product clippings (even complex shapes) in under 3 hours, freeing your team for other tasks.</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold lg:text-xl'>
                        <span><FaCircleArrowRight /></span>
                        <div>
                        <button>Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-36 h-28 lg:h-36' src={shadow} alt="dog" />
                        <img className='w-36 h-28 lg:h-36' src={shadow2 } alt="dog" />
                    </div>
                </div>
                {/* card-8 */}
                <div className='lg:w-[680px] h-[320px] lg:h-[242px] flex flex-col lg:flex-row lg:gap-4 border-2 border-black rounded-lg p-4'>
                    <div className='lg:w-1/2 lg:space-y-2 lg:p-4 mb-2'>
                        <div>
                        <h3 className='text-xl lg:text-2xl text-[#3D7E8F] font-bold'>Image Masking<br />
                        Service</h3>
                        </div>
                        <div className='h-16'>
                        <p className="text-xs text-[#000000]">We deliver world-class, pixel-perfect clipping paths for top e-commerce brands by our expert photo editors.</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold lg:text-xl'>
                        <span><FaCircleArrowRight /></span>
                        <div>
                        <button>Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-36 h-28 lg:h-36' src={mask} alt="dog" />
                        <img className='w-36 h-28 lg:h-36' src={mask2} alt="dog" />
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Service;