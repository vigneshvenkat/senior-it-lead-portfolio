import Image from 'next/image'
import profileImage from '/src/public/profile.jpg'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Vignesh Venkatraman
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-white">
            Senior IT Team Lead with 10+ Years Experience
          </h2>
          <p className="text-lg mb-8 text-gray-400 max-w-lg">
            Driving innovation and leading high-performance teams to deliver cutting-edge IT solutions in an ever-evolving technological landscape.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:from-purple-600 hover:to-blue-700 transition duration-300 inline-block"
            >
              Get in Touch
            </a>
            <a 
              href="#skills" 
              className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-700 transition duration-300 inline-block"
            >
              View Skills
            </a>
          </div>
        </div>
        <div className="md:w-1/4 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image 
              src={profileImage}
              alt="Vignesh"
              className="rounded-full aspect-square object-cover border-1 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero