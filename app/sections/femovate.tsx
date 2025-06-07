import React from 'react'

function femovate() {
  return (
    <main className="p-8"
          style={{ marginLeft: '80px', marginRight: '80px', marginBottom: '80px' }}>
        
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-8"
          style={{ marginTop: '130px' }}>
          
          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">Turning Ideas Into Masterpieces</h1>
          </div>

          <div className="md:w-1/2 text-gray-600">
            <p className='italic'>
              At Femovate, we believe in more than just presenting ideas — we believe in nurturing them. This space is designed to encourage women to explore bold thoughts, connect with creative minds, and begin the journey toward impactful change. Whether you're just discovering your passion or already envisioning a venture, Femovate offers the platform, guidance, and inspiration to help transform your vision into something extraordinary.
            </p>
          </div>
        </div>



        <div className="flex flex-col md:flex-row justify-between gap-20"
          style={{ marginTop: '50px' }}>
          
          <div className="w-full md:w-3/4 bg-[#6E0E18] text-[#E6DBCE] rounded-lg flex items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left"
              style={{ marginLeft: '150px',marginRight: '150px', marginTop: '50px', marginBottom: '50px' }}>
              "This isn’t just a competition; it’s an opportunity to spark innovation, amplify your voice, and shape the future together."
            </p>
          </div>

          <div className="w-full md:w-1/4 bg-beige rounded-lg p-4 flex justify-center items-center">
            <img
              src="/mic.png"
              alt="Mic"
              className="w-32 sm:w-40 md:w-52 lg:w-72 h-auto transition-transform duration-500 hover:scale-x-[-1]"
            />

          </div>

        </div>
      </main>
  )
}

export default femovate