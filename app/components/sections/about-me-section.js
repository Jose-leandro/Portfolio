import React from 'react';
import { ABOUT_ME_TEXT } from '../../constants/content';
import { domine } from '../../styles/fonts';

export default function AboutMeSection() {
  return (
    <section className="flex flex-col justify-evenly w-3/4 h-auto py-0 md:py-12">
      <h4 className="text-3xl font-bold text-white mb-3 font-serif">
      Who I Am
      </h4>
      <p className="text-whit etext-lg leading-relaxed">
      "I'm a Front-End Developer passionate about building impactful and accessible websites that create real value for people around the world. My focus is on crafting clean, responsive interfaces that connect users with meaningful digital experiences.
          </p>
    </section>
  );
}



