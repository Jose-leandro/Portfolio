import Image from "next/image";
import React, { useRef } from "react";
import PropTypes from "prop-types";

const imageWrapperStyles = `
  relative w-auto sm:w-[450px] sm:h-60 rounded-2xl border-[1.9px] border-solid 
  border-custom-white md:w-[350px] md:h-52 xl:h-64 xl:w-[410px]
`;

// ProjectImage component
export default function ProjectImage({ src, imageRef }) {
  imageRef = useRef(null);

  return (
    <div className={imageWrapperStyles}>
      <Image
        src={src}
        alt="Images representing the technologies used in each project."
        fill
        ref={imageRef}
        quality={100}
        className="object-cover rounded-2xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
      />
    </div>
  );
}

ProjectImage.propTypes = {
  src: PropTypes.string.isRequired,
  imageRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};


