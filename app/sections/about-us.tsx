'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const cards = [
  {
    title: 'Volunteering',
    description: 'Join our community as a volunteer to support exciting tech events and initiatives that drive innovation, learning, and collaboration within the Faculty of Computing.',
    imageUrl: '/aboutus4.jpg',
    alt: 'Volunteers working together',
  },
  {
    title: 'Events',
    description: 'We organize diverse tech events like overnight CTFs and treasure hunts that engage and challenge students to grow their skills and passion for technology.',
    imageUrl: '/aboutus2.jpg',
    alt: 'Students at a tech event',
  },
  {
    title: 'WIF',
    description: 'Women in FOSS (WIF) is a sub-community that empowers women in tech through inclusive events and initiatives, fostering growth and representation in the IT field.',
    imageUrl: '/aboutus3.jpg',
    alt: 'Women in tech collaborating',
  }
];

const AboutUs = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')!;
      const count = +(counter as HTMLElement).innerText;
      const increment = target / speed;
      
      if (count < target) {
        counter.textContent = Math.ceil(count + increment).toString();
        setTimeout(updateCount, 1);
      } else {
        counter.textContent = target.toString();
      }
      
      function updateCount() {
        const count = +counter.textContent!;
        if (count < target) {
          counter.textContent = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 1);
        } else {
          counter.textContent = target.toString();
        }
      }
    });
  }, []);

  return (
    <section id='aboutus' className="relative py-20 bg-gradient-to-b from-[#F8F1E9] to-[#E6DBCE] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#650E17] opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#650E17] opacity-5 rounded-full translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#650E17] mb-4 font-serif">
            About Our Community
          </h2>
          <div className="w-20 h-1 bg-[#650E17] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We're a vibrant tech community at NSBM fostering innovation, collaboration, and growth through exciting initiatives and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group relative aspect-[4/3] rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              {/* Responsive Image with proper sizing */}
              <div className="relative w-full h-full">
              <Image
                src={card.imageUrl}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                priority={idx === 0} // Only prioritize first image
              />
            </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#650E17]/90 via-[#650E17]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end px-6 text-white">
                <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="mb-4 text-justify opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {card.description}
                  </p>
                </div>
              </div>
              
              {/* Initial title (shown before hover) */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;