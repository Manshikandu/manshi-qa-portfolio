import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'QA Lab', path: '/qa-lab' },
  ]

  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      {/* <Link className="brand" to="/" onClick={closeMenu}>
        Manshi<span>.</span>
      </Link> */}

      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            onClick={closeMenu}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <Link className="nav-cta" to="/contact">
        Get in touch <ArrowUpRight size={15} />
      </Link>
    </header>
  )
}

export default Navbar;