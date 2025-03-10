import img1 from '../../assets/image 349.png'
import img2 from '../../assets/image 351.png'
import img3 from '../../assets/image 350.png'

const Grid2 = () => {
    return (
        <div className="my-10 lg:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-[#F3F3F3] p-6 h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
                <img className='h-[100px] lg:h-[150px]' src={img1} alt="watch" />
                <p className="text-xs font-bold">Flex with Perfection</p>
                <p className="text-xs w-2/3 lg:w-1/2 mx-auto my-2">our niche-based, high-end services are based on the industry’s best practices and techniques</p>
            </div>
            <div className="rounded-2xl bg-[#F3F3F3] p-6 h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
                <img className='h-[100px] lg:h-[150px]' src={img2} alt="watch" />
                <p className="text-xs font-bold">With You-All The Way</p>
                <p className="text-xs w-2/3 lg:w-1/2 mx-auto my-2">Get customisation that speaks of you. We can do anything you require, we are here for you</p>
            </div>
            <div className="rounded-2xl bg-[#F3F3F3] p-6 h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
                <img className='h-[100px] lg:h-[150px]' src={img3} alt="watch" />
                <p className="text-xs font-bold">Communication Made Easy</p>
                <p className="text-xs w-2/3 lg:w-1/2 mx-auto my-2">You need a team that cares. You need a mediator that understands your needs</p>
            </div>
        </div>
    );
};

export default Grid2;