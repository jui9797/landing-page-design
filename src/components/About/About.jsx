import about from '../../assets/image 317.png'

const About = () => {
    return (
        <div className='my-10 lg:my-28'>
          <h2 className="text-black text-3xl lg:text-5xl font-bold text-center mb-6">About Us</h2> 
          <div className="bg-[#ACD6DB] rounded-2xl my-10 space-y-3">
            <div className='py-4 lg:py-8'>
            <h2 className='text-white text-2xl lg:text-5xl lg:w-1/2 mx-auto text-center font-bold p-2 lg:p-6'><span className='text-black'>We are a hybrid company.</span><br />
            Fully flexible to our employees and customers.</h2>
            </div>
            <div className='h-[200px] lg:h-[500px]'>
                <img className='w-full h-full' src={about} alt="about" />
            </div>
            <div className="lg:w-2/4 mx-auto text-center text-xl lg:text-2xl p-4 font-semibold">
                <p>Our core principle is unwavering integrity and professionalism.  Wherever you are, we're committed to providing consistent, high-quality service and that’s a promise!</p>
            </div>
            </div> 
        </div>
    );
};

export default About;