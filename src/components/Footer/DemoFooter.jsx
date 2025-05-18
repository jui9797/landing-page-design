// import { FaPinterest, FaTwitter } from "react-icons/fa";
// import { IoIosSend } from "react-icons/io";
// import { CiLocationOn } from "react-icons/ci";
// import { LuPhone } from "react-icons/lu";
// import { HiOutlineMailOpen } from "react-icons/hi";
// import { IoTimeOutline } from "react-icons/io5";
// import { FaFacebook } from "react-icons/fa";
// const DemoFooter = () => {
//     return (
//         <footer className="bg-[#8B0000] text-white">
//             <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap gap-8">

//                 {/* Newsletter */}
//                 <div>
//                     <h2 className="text-xl font-bold mb-4">RESTAURANT</h2>
//                     <p className="mb-4 text-base-200">Subscribe our newsletter and get discount 25% off</p>
//                     <div className="flex">
//                         <input
//                             type="email"
//                             placeholder="Enter Your Email"
//                             className="p-2 rounded-l bg-white text-black w-full"
//                         />
//                         <button className="bg-red-600 px-4 rounded-r text-white"><IoIosSend /></button>
//                     </div>
//                     <div className="flex space-x-3 mt-4 text-xl">
//                         <FaPinterest className="hover:text-gray-300 text-red-600 cursor-pointer" />
//                         <FaTwitter className="hover:text-gray-300 text-blue-500 cursor-pointer" />
//                         <FaFacebook className="hover:text-gray-300 text-blue-600 cursor-pointer" />
//                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
//                             <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
//                         </svg>
//                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
//                             <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
//                         </svg>
//                     </div>
//                 </div>

//                 {/* Contact Us */}
//                 <div>
//                     <h2 className="text-lg font-semibold mb-4">Contact us</h2>
//                     <p className="flex items-center gap-2 mb-2 text-base-200"><span className="text-2xl"><CiLocationOn /></span> 3517 W. Gray St. Utica, Pennsylvania 57867</p>
//                     <p className="flex items-center gap-2 mb-2 text-base-200"><LuPhone /> (480) 555-0103</p>
//                     <p className="flex items-center gap-2 mb-2 text-base-200"><HiOutlineMailOpen /> MAlyaqout@4house.Co</p>
//                     <p className="flex items-center gap-2 text-base-200"><IoTimeOutline /> Sun - Sat / 10:00 AM – 8:00 PM</p>
//                 </div>

//                 {/* Links */}
//                 <div>
//                     <h2 className="text-lg font-semibold mb-4">Links</h2>
//                     <ul className="space-y-2 text-base-200">
//                         <li><a href="#" className="hover:underline">About us</a></li>
//                         <li><a href="#" className="hover:underline">Contact Us</a></li>
//                         <li><a href="#" className="hover:underline">Our Menu</a></li>
//                         <li><a href="#" className="hover:underline">Team</a></li>
//                         <li><a href="#" className="hover:underline">FAQ</a></li>
//                     </ul>
//                 </div>


//                 <div className=" lg:w-[300px]">
//                     <h2 className="text-lg font-semibold mb-4">Instagram Gallery</h2>
//                     <div className="grid grid-cols-3 gap-2">

//                         {[
//                             "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg",
//                             "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg",
//                             "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg",
//                             "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg",
//                             "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg",
//                             "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg"
//                         ].map((src, i) => (
//                             <img key={i} src={src} alt={`Gallery ${i}`} className="w-full h-20 object-cover rounded" />
//                         ))}
//                     </div>
//                 </div>

//             </div>

//             <div className="bg-[#A52A2A] text-sm py-4 text-center flex flex-col md:flex-row justify-between items-center px-4 text-base-200">
//                 <p>Copyright © 2025. All rights reserved</p>
//                 <div className="space-x-4 mt-2 md:mt-0">
//                     <a href="#" className="hover:underline">Privacy Policy</a>
//                     <a href="#" className="hover:underline">Term of Use</a>
//                     <a href="#" className="hover:underline">Partner</a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default DemoFooter;
