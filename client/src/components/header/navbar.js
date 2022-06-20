import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar-container">
        <nav className="navbar">
          <Link to="/" className="site-title">JUSTPORT</Link>
          <ul>
            <li className="active">
              <Link to="/dosare">Dosare</Link>
            </li>
            <li className="active">
              <Link to="/despre">Despre</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar;