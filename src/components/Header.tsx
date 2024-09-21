import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-black">
          Vignesh Venkatraman - Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#experience" className="hover:text-transparent bg-clip-text text-xl hover:bg-gradient-to-r from-purple-400 to-blue-600">Experience</Link></li>
            <li><Link href="#skills" className="hover:text-transparent bg-clip-text text-xl hover:bg-gradient-to-r from-purple-400 to-blue-600">Skills</Link></li>
            <li><Link href="#testimonials" className="hover:text-transparent bg-clip-text text-xl hover:bg-gradient-to-r from-purple-400 to-blue-600">Testimonials</Link></li>
            <li><Link href="#contact" className="hover:text-transparent bg-clip-text text-xl hover:bg-gradient-to-r from-purple-400 to-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header