import React from 'react';
import Image from 'next/image';

const ContactUs = () => {
    return (
        <div className="w-full bg-white">
            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row w-full lg:gap-0 gap-4">
                {/* Spacer for desktop, hidden on mobile */}
                <div className="hidden lg:block w-30"></div>
                {/* Left Section */}
                <div className="flex justify-center m-4 md:m-10 lg:m-20 w-full lg:w-auto">
                    <div className="flex flex-col justify-center gap-8 md:gap-12 lg:gap-16 items-end pl-0 md:pl-6 lg:pl-10 w-full">
                        <div className="flex flex-col md:flex-row justify-start items-center gap-4 md:gap-10 w-full mb-6 md:mb-10">
                            {/* Image with overlaid "Contact" */}
                            <div className="relative w-full max-w-[320px] md:max-w-[350px] h-[90px] md:h-[140px] rounded overflow-hidden flex justify-center">
                                <Image
                                    src="/Rectangle1.png"
                                    alt="Contact"
                                    layout="fill"
                                    objectFit="contain"
                                    className="z-0"
                                    priority
                                />
                                <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-3xl md:text-6xl font-medium select-none pointer-events-none">
                                    Contact
                                </div>
                            </div>
                            {/* "Us" beside image */}
                            <div className="text-black text-3xl md:text-6xl font-medium self-center">
                                Us
                            </div>
                        </div>

                        <div className="text-black text-lg md:text-2xl lg:text-2xl font-med leading-relaxed pl-0 md:pl-6 lg:pl-10 text-center md:text-left">
                            Have questions, suggestions, or a spark of inspiration? <br />
                            Reach out to us — together, we can empower change and innovate for a brighter, more inclusive future.
                        </div>
                        <div className="bg-[#E6DBCE] lg:rounded-2xl flex flex-col md:flex-row justify-around items-center p-6 md:p-12 lg:p-24 w-full h-auto md:h-36 cursor-pointer hover:bg-[#D4C2A6] transition-colors duration-300 gap-4 md:gap-0">
                            <div className="text-black text-2xl  font-medium text-center">
                                Join our WhatsApp Group
                            </div>
                            <div className="relative flex-shrink-0 w-full max-w-[220px] md:max-w-[320px] lg:w-80 h-12 md:h-20 rounded overflow-hidden cursor-pointer">
                                <Image
                                    src="/Rectangle 2.png"
                                    alt="Join WhatsApp Group"
                                    layout="fill"
                                    objectFit="contain"
                                    className="z-0"
                                    priority
                                />
                                <a href="https://chat.whatsapp.com/GY4ji4rmvA43WH8K83f4Bk" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center text-white text-lg md:text-2xl font-bold select-none visited:text-white hover:text-white no-underline">
  Click Here
</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
                    <Image
                        src="/contactus.png"
                        alt="Contact Us"
                        width={300}
                        height={300}
                       className='lg:w-[500px] lg:h-[500px] '
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
