import React from 'react'

const Hero = () => {
  return (
    <>
    <main className="">
        <section className=" text-black">
          <div className="container mx-auto px-6 py-52 text-center">
            <h1 className="text-6xl font-bold">Welcome to Communify</h1>
            <p className="mt-4 text-xl">
            Connecting local businesses with their community. Discover, support, and engage with local businesses around you.
          </p>
        
         
            <a href="/businesses" className="mt-32 inline-block bg-white  px-6 py-3 rounded-full font-light hover:bg-teal-500">
              Add your business
            </a>
          </div>
        </section>

     
      </main>
    </>
  )
}

export default Hero