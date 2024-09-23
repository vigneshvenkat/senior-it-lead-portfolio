import Link from 'next/link'

const Header = () => {
  const menuItems = [
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex flex-wrap justify-end space-x-2 sm:space-x-4 md:space-x-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="text-sm sm:text-base md:text-lg hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-400 to-blue-600 transition-colors duration-300 py-2 px-2 sm:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header