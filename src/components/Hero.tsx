import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  ctaText,
  ctaLink,
}) => {
  return (
    <section
      className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-gray-300 text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <a
          href={ctaLink}
          className="inline-block mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
