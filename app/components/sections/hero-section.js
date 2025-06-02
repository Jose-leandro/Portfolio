
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function HeroSection() {
  return <main className={montserrat.className}>Hello World</main>;
}










// import React from "react";
// import { SOCIAL_LINKS, SOCIAL_BUTTON } from '../../constants/social-links';
// import Image from 'next/image';
// import PropTypes from 'prop-types';

// /**
//  * Component for displaying a social media link with an icon.
//  *
//  * @param {Object} props - Component props.
//  * @param {string} props.href - URL of the social media profile.
//  * @param {string} props.src - Source URL of the icon image.
//  * @param {string} props.alt - Alt text for the icon.
//  * @returns {React.ReactElement} The rendered social media link.
//  */
// const SocialLink = ({ href, src, alt }) => (
//   <a href={href}>
//     <Image
//       width={28}
//       height={28}
//       src={src}
//       alt={alt}
//       className="bg-transparent rounded-full border-white border-2 border-solid w-8 ml-4 cursor-pointer hover:h-[35px]
//       hover:w-[35px] hover:mb-[0.2px]"
//     />
//   </a>
// );

// SocialLink.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

// const HeroButton = ({ href, name }) => (
//   <a
//   href={href}
//   className="bg-white text-black px-6 py-3 ml-4 mr-4 rounded-xl shadow transition"
// >
//   {name}
// </a>
// );


// const HeroSection = () => {
//   const today = new Date().toLocaleDateString("en-US", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric"
//   });

//   return (
//     <section className="min-h-screen flex flex-col items-center text-center p-6">
//       <h1 className="text-xl bg-transparent rounded-lg border-white border-2 w-2/6 border-solid py-1 px-2 text-white mb-4">
//         Today is {today}
//       </h1>

//       <h2 className="text-3xl font-bold w-full text-end text-white font-serif">My name It's Lendro
//       </h2>

//       <h3 className="text-8xl md:text-5xl font-bold text-white font-serif">And this is 
//         <span className="text-9xl"> my portfolio.</span>
//       </h3>

//     <div className="flex justify-between w-full mb-5">
//       <p className="text-lg md:text-xl text-white mt-2">
//         Explore my portfolio, learn more about me, what I do, and discover my projects.
//       </p>


//       <div className="flex">

//         {SOCIAL_LINKS.map((link) => (
//           <SocialLink
//           key={link.href}
//                 href={link.href}
//                 src={link.src}
//                 alt={link.alt}
//                 />
//         ))}
//       </div>
//       </div>

//       <div className="mt-6">

//       {SOCIAL_BUTTON.map((button) => (
//           <HeroButton
//           key={button.href}
//                 href={button.href}
//                 name={button.name}
//                 />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

