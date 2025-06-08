import React from 'react'
import Image from 'next/image'

const cards = [
    {
        title: 'Volunteering',
        description: 'Join our community as a volunteer to support exciting tech events and initiatives that drive innovation, learning, and collaboration within the Faculty of Computing.',
        imageUrl: '/aboutus4.jpg',
        alt: 'about us',
    },
    {
        title: 'Events',
        description: 'We organize diverse tech events like overnight CTFs and treasure hunts that engage and challenge students to grow their skills and passion for technology.',
        imageUrl: '/aboutus2.jpg',
        alt: 'about us',
    },
    {
        title: 'WIF',
        description: 'Women in FOSS (WIF) is a sub-community that empowers women in tech through inclusive events and initiatives, fostering growth and representation in the IT field.',
        imageUrl: '/aboutus3.jpg',
        alt: 'about us',
    }
]

const AboutUs = () => {
    return (
        <div id='aboutus' className='flex flex-col gap-8'>
            <div className='flex justify-center text-4xl font-bold text-[#650E17]'>About Us</div>
            <div className="flex flex-col items-center gap-8 pb-20 sm:flex-row sm:justify-center sm:items-stretch sm:flex-wrap">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="card bg-base-100 w-80 sm:w-96 shadow-sm rounded-xl border-2 border-[#650E17] hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                        <figure className="flex justify-center w-full rounded-t-xl">
                            <Image
                                src={card.imageUrl}
                                alt={card.alt}
                                width={400}
                                height={200}
                                className="rounded-t-xl object-cover w-full h-48"
                               
                            />
                        </figure>
                        <div className="card-body items-center text-center p-4 flex-1 flex flex-col">
                            <h2 className="card-title text-[#650E17]">{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUs
