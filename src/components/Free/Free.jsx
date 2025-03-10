import img from '../../assets/image 318.png'
import { BsCloudUpload } from "react-icons/bs";

const Free = () => {
    return (
        <div className="my-10 lg:my-24">
            <div className="flex justify-around mb-4 lg:mb-8 ">
                <h2 className="text-black text-2xl lg:text-4xl font-bold mb-6">Try For Free...</h2>
                <p className="font-bold text-center text-xs lg:text-[16px]">“Your vision, our expertise: We will bring your <br /> projects to life flawlessly.” </p>
            </div>

            {/* free form */}
            <div className="flex flex-col lg:flex-row rounded-xl w-full ">
                <div className=' w-full lg:w-1/2 bg-[#F3F3F3] p-4 lg:p-10 space-y-2 lg:space-y-3'>
                    <div className='flex lg:gap-8 gap-2'>
                        <input className='p-2 lg:p-4 rounded-xl w-1/2 ' type="text" placeholder='First Name*' />
                        <input className='p-2 lg:p-4 rounded-xl w-1/2' type="text" placeholder='First Name*' />

                    </div>
                    <div>
                        <input className='p-4 rounded-xl w-full' type="email" placeholder='Email*' />
                    </div>
                    <div>
                        <input className='p-4 rounded-xl w-full' type="text" placeholder='Select Service' />
                    </div>
                    <div>
                        <input className='p-4 rounded-xl w-full' type="text" placeholder='Instructions for us to follow' />
                    </div>

                    <div className=" w-full">
                        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-20 border-2  border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100">
                            <div className="flex flex-col items-center w-full">
                            <BsCloudUpload />
                                <p className="text-gray-600 text-sm">Click to upload or drag and drop</p>
                            </div>
                            <input id="file-upload" type="file" className="hidden " />
                        </label>
                    </div>

                    <div>
                        <button className='btn text-[#8AC1C7] border-[#8AC1C7] w-full'>Submit</button>
                    </div>
                </div>
                <div className='h-[300px] lg:h-[500px] w-full lg:w-1/2'>
                    <img className='w-full h-full' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Free;