import React from 'react'

const femovate = () => {
  return (
   <div className="mt-20">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mx-12 mb-20 ">
          
          <div className="md:w-1/2 mx-12" >
            <h1 className="md:text-6xl text-5xl font-bold mb-4">Turning Ideas Into Masterpieces</h1>
          </div>

          <div className="md:w-1/2 text-gray-600">
            <p className='italic'>
              At Femovate, we believe in more than just presenting ideas — we believe in nurturing them. This space is designed to encourage women to explore bold thoughts, connect with creative minds, and begin the journey toward impactful change. Whether you're just discovering your passion or already envisioning a venture, Femovate offers the platform, guidance, and inspiration to help transform your vision into something extraordinary.
            </p>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between gap-20">
          
          <div className="w-full md:w-3/4 bg-[#6E0E18] text-[#E6DBCE]  flex items-center justify-center p-4">
            <p className="md:text-5xl text-3xl  font-bold">
              "This isn’t just a competition; it’s an opportunity to spark innovation, amplify your voice, and shape the future together."
            </p>
          </div>

          <div className="w-full md:w-1/4 bg-beige rounded-lg p-4 flex justify-center items-center">
            <img
              src="/mic.png"
              alt="Mic"
              className="w-40  md:w-72 h-auto transition-transform duration-500 hover:scale-x-[-1]"
            />
          </div>

        </div>
      </div>
  )
}

export default femovate