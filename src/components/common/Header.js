import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Logo</Link>
      </h1>

      <nav>
        <li>
          <NavLink to="/department">Department</NavLink>
        </li>
        <li>
          <NavLink to="/community">Community</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/youtube">Location</NavLink>
        </li>
        <li>
          <NavLink to="/location">Youtube</NavLink>
        </li>
        <li>
          <NavLink to="/members">Members</NavLink>
        </li>
      </nav>
    </header>
  )
}

export default Header
