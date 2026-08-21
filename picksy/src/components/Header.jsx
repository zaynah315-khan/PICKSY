 import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../services/authService";
import logo from "../assets/picksy-logo.jpeg";

function Header({ cartCount, user, onAuthClick }) {
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut();
    navigate("/");
  }

  return (
    <header className="header">
      <div className="container header-inner">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={logo} alt="Picksy Logo" />
          <span>picksy</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="nav">
          <Link to="/">Home</Link>

          <a href="#categories">
            Categories
          </a>

          <a href="#products">
            Shop
          </a>

          {/* ADMIN PORTAL - ONLY WHEN LOGGED IN */}
          {user && (
            <Link
              to="/admin"
              className="admin-nav-link"
            >
              Admin Portal
            </Link>
          )}
        </nav>

        {/* ACTIONS */}
        <div className="header-actions">
          {user ? (
            <button
              className="header-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="header-button"
              onClick={onAuthClick}
            >
              Login
            </button>
          )}

          {/* CART */}
          <Link
            to="/cart"
            className="cart-button"
          >
            ♡ Cart

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;