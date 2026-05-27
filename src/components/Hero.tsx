const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-black text-white py-16">
      <div className="w-full px-12 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-purple-400 mb-6">
              IT Lead · Tech &amp; Transformation
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Vignesh
              </span>
              <br />
              Venkatraman
            </h1>
            <p className="text-gray-400 mb-6 text-xl">
              Principal Software Developer
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
              Building enterprise systems and leading high-performance teams for over a decade.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition duration-300 inline-block"
              >
                Get in Touch
              </a>
              <a
                href="/CV-VigneshVenkatraman.docx"
                download
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-8 py-4 rounded-lg font-semibold text-base transition duration-300 inline-block"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">Years experience</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">Efficiency delivered</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">Leadership roles</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">Enterprise projects</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;