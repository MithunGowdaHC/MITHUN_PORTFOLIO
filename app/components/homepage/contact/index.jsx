// @flow strict
// import { personalData } from '@/utils/data/personal-data';
// import Link from 'next/link';
// import { BiLogoLinkedin } from "react-icons/bi";
// import { CiLocationOn } from "react-icons/ci";
// import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoGithub, IoMdCall } from "react-icons/io";
// import { MdAlternateEmail } from "react-icons/md";
// import ContactForm from './contact-form';

// function ContactSection() {
//   return (
//     <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
//       <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
//         <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
//           CONTACT
//         </span>
//         <span className="h-36 w-[2px] bg-[#1a1443]"></span>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//         <ContactForm />
//         <div className="lg:w-3/4 ">
//           <div className="flex flex-col gap-5 lg:gap-9">
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <MdAlternateEmail
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>{personalData.email}</span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <IoMdCall
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>
//                 {personalData.phone}
//               </span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <CiLocationOn
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>
//                 {personalData.address}
//               </span>
//             </p>
//           </div>
//           <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
//             <Link target="_blank" href={personalData.github}>
//               <IoLogoGithub
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalData.linkedIn}>
//               <BiLogoLinkedin
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalData.twitter}>
//               <FaXTwitter
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
            
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;


"use client";
import React from 'react';
import { motion } from "framer-motion";
import { 
  IoLogoGithub, 
  IoLogoLinkedin, 
  IoMdMail 
} from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

// Define your social links array with additional styling and hover effects
const socialLinks = [
  { 
    icon: IoLogoGithub, 
    href: "https://github.com/MithunGowdaHC", 
    label: "GitHub",
    bgColor: "from-[#171515] to-[#333]",
    hoverColor: "hover:from-[#333] hover:to-[#171515]"
  },
  { 
    icon: FaTwitter, 
    href: "https://twitter.com/mg10_3", 
    label: "Twitter",
    bgColor: "from-[#1DA1F2] to-[#0c7abf]",
    hoverColor: "hover:from-[#0c7abf] hover:to-[#1DA1F2]"
  },
  { 
    icon: IoLogoLinkedin, 
    href: "https://www.linkedin.com/in/mithungowda10/", 
    label: "LinkedIn",
    bgColor: "from-[#0077B5] to-[#005582]",
    hoverColor: "hover:from-[#005582] hover:to-[#0077B5]"
  },
  { 
    icon: IoMdMail, 
    href: "mailto:mithungowdahc12a@gmail.com", 
    label: "Email",
    bgColor: "from-[#EA4335] to-[#C52D25]",
    hoverColor: "hover:from-[#C52D25] hover:to-[#EA4335]"
  },
];

// ContactSection Component
const ContactSection = () => {
  return (
    <div id='contact' className="my-16 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#13ECA2] to-[#2CBEFF]">
          Connect with Me
        </h2>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative overflow-hidden rounded-full p-4 
                  bg-gradient-to-br ${social.bgColor} ${social.hoverColor}
                  transition-all duration-500 ease-in-out transform
                  hover:scale-110 hover:shadow-2xl
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {/* Subtle hover effect overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <Icon 
                  size={40} 
                  className="text-white transition-transform duration-300 group-hover:rotate-12" 
                />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;