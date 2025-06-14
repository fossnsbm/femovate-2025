import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#650E17] text-white w-full">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-2 flex flex-col gap-6"
       >

        {/* Top Content */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full"
        >

          {/* Left Section */}
          <div className="text-left text-sm md:pl-8">
            <p className="text-gray-300">Organized by</p>
            <p className="font-medium">2025 Foss community of NSBM</p>
          </div>

          {/* Center Logos */}
          <div className="flex justify-center items-center gap-8">
            <img src="/foss.png" alt="FOSS Logo" className="h-12 w-auto" />
            <img src="/wif.png" alt="Women in FOSS Logo" className="h-12 w-auto" />
          </div>

          {/* Right Section */}
          <div className="text-right text--gray-300 md:pr-8 mt-8 md:mt-0">
            <div className="flex justify-center md:justify-end gap-15 text-lg mb-1">
              <a href="https://whatsapp.com/channel/0029Vb7MbXeBPzjPouLpSY0j" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.facebook.com/share/1BzPtvLpPo/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/fossnsbm?igsh=MTMxdzJtM29ncGV1dA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/@fosscommunitynsbm?si=qba5tzQHmw2cfHIT" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/company/fossnsbm/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-gray-300"
              style={{ marginTop: "8px" }}>
              Made with ❤️ by the FOSS community of NSBM
            </p>
          </div>
        </div>

        {/* Spacer before line */}
        <div className="md:h-4 " />

        {/* Bottom Centered Line */}
        <div className="border-t border-gray-400 w-[90%] md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto my-2" />

        {/* Spacer below line to footer end */}
        <div className="md:h-4" />
      </div>
    </footer>
  );
}

export default Footer;