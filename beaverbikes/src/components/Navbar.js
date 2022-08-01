import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo" >
                    <img src="../img/logo.png"/>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar