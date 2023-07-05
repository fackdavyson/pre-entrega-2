import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const imglogo = "https://cdn.pixabay.com/photo/2013/07/13/10/43/blue-157652_1280.png"
  return (
    <header>
        <Link to="/">
          <h1><img className= 'imgLogo' src={imglogo} alt="" />Bluebubble</h1>
        </Link>

        <nav>
            <ul>
                <li> 
                    <NavLink to="/categoria/2"> PC Armadas </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/3"> Procesadores </NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar