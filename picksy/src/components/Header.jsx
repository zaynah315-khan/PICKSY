import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../services/authService";

function Header({
  cartCount,
  user,
  onAuthClick
}) {
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut();
    navigate("/");
  }

  return (
    <header className="header">
      <div className="container header-inner">

        <Link to="/" className="logo">
          picksy<span>.</span>
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>

          <a href="#categories">
            Categories
          </a>

          <a href="#products">
            Shop
          </a>
        </nav>

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