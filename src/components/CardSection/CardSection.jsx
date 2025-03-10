import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'

const CardSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 lg:my-24 gap-12">
            {/* card-1 */}
            <div className='border-2 border-black p-6 h-[200px] lg:h-[300px] rounded-lg'>
                <img src={card1} alt="" />
                <div className='lg:w-2/3'>
                <h3 className='font-bold text-2xl lg:w-1/2'>Industry's Best Practices</h3>
                <p>For 15 years, we've used industry best practices to deliver top-quality solutions.</p>
                </div>
            </div>
            {/* card-2 */}
            <div className='border-2 border-black p-6 h-[200px] lg:h-[300px] rounded-lg'>
                <img src={card2} alt="" />
                <div className='lg:w-2/3'>
                <h3 className='font-bold text-2xl lg:w-1/2'>Work from Anywhere</h3>
                <p>Our advanced infrastructure and work culture ensures we'll deliver optimized results.</p>
                </div>
            </div>
            {/* card-3 */}
            <div className='border-2 border-black p-6 h-[200px] lg:h-[300px] rounded-lg'>
                <img src={card3} alt="" />
                <div className='lg:w-2/3'>
                <h3 className='font-bold text-2xl lg:w-2/3'>We've Got You Covered</h3>
                <p>We are fully available 24/7, ensuring your work is always completed on time no matter what.</p>
                </div>
            </div>
            {/* card-4 */}
            <div className='border-2 border-black p-6 h-[200px] lg:h-[300px] rounded-lg'>
                <img src={card4} alt="" />
                <div className='lg:w-2/3'>
                <h3 className='font-bold text-2xl lg:w-1/2'>Ever-evolving Team</h3>
                <p>Our team's expertise in the latest trends & technologies helps our clients outperform all competition.</p>
                </div>
            </div>
            
        </div>
    );
};

export default CardSection;
