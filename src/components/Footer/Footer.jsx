import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-[#F3F3F3] text-black px-6 md:px-12 py-8 border-t">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Left Section */}
                <div className="sm:border-r border-gray-400 pr-6">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mb-6">
                        <a href="#"><FaFacebook className="text-xl hover:text-blue-600" /></a>
                        <a href="#"><FaYoutube className="text-xl hover:text-red-600" /></a>
                        <a href="#"><AiFillTikTok className="text-xl hover:text-black" /></a>
                        <a href="#"><FaInstagram className="text-xl hover:text-pink-500" /></a>
                    </div>

                    {/* Subscription Section */}
                    <h3 className="font-semibold text-xl">SUBSCRIBE TO US !</h3>
                    <p className="text-sm text-gray-600">Sign up for the latest trends, launches & more...</p>
                    <div className="relative w-full max-w-xs mt-4 lg:mt-8">
                        <input
                            type="email"
                            placeholder="E-mail Address..."
                            className="p-3 pr-16 border border-gray-400 outline-none w-full"
                        />
                        <button className="absolute right-0 top-0 h-full bg-black text-white px-4 hover:bg-gray-800">
                            SUBMIT
                        </button>
                    </div>

                </div>

                {/* Middle Section */}
                <div>
                    <h3 className="font-semibold text-xl">COMPANY</h3>
                    <ul className="mt-2 space-y-1">
                        <li><a href="#" className="text-black text-[14px]">ABOUT US</a></li>
                        <li><a href="#" className="text-black text-[14px]">CONTACT US</a></li>
                        <li><a href="#" className="text-black v">BLOG</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="font-semibold text-xl">SERVICES</h3>
                    <ul className="mt-2 space-y-1 lg:pb-4">
                        <li><a href="#" className="text-black text-[14px]">MULTI CLIPPING PATH</a></li>
                        <li><a href="#" className="text-black text-[14px]">CLIPPING PATH</a></li>
                        <li><a href="#" className="text-black text-[14px]">INVISIBLE MANNEQUIN</a></li>
                        <li><a href="#" className="text-black text-[14px]">COLOR PROCESSING & RECOLORING</a></li>
                        <li><a href="#" className="text-black text-[14px]">IMAGE CROPPING & RESIZING</a></li>
                        <li><a href="#" className="text-black text-[14px]">SHADOWS & REFLECTIONS</a></li>
                        <li><a href="#" className="text-black text-[14px]">IMAGE MASKING</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-400  pt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-600 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 font-semibold text-black">
                    <a href="#" className="hover:underline">TERMS & CONDITIONS</a>
                    <a href="#" className="hover:underline">PRIVACY POLICY</a>
                </div>
                <p className="font-semibold text-black mt-2 sm:mt-0">COPYRIGHT © 2025. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
