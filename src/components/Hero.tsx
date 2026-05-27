const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-black text-white py-16">
      <div className="w-full px-16 md:px-24 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — text content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-purple-400 mb-4">
              IT Lead · Tech &amp; Transformation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Vignesh
              </span>
              <br />
              Venkatraman
            </h1>
            <p className="text-gray-400 mb-6 text-base">
              Principal Software Developer
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              Building enterprise systems and leading high-performance teams for over a decade.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition duration-300 inline-block"
              >
                Get in Touch
              </a>
              <a
                href="/CV-VigneshVenkatraman.docx"
                download
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold text-sm transition duration-300 inline-block"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-1">10+</div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">Years experience</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-1">40%</div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">Efficiency delivered</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-1">3</div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">Leadership roles</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-1">15+</div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">Enterprise projects</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;