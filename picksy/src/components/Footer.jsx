 import logo from "../assets/picksy-logo.jpeg";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* BRAND */}
        <div className="footer-brand">

          <div className="footer-logo-wrapper">
            <img
              src={logo}
              alt="Picksy Logo"
              className="footer-logo-image"
            />

            <h2 className="footer-logo">
              picksy
            </h2>
          </div>

          <p>
            Little things that make
            your everyday beautiful.
          </p>

          <div className="footer-decoration">
            <span></span>
            ✦
            <span></span>
          </div>

        </div>

        {/* SHOP */}
        <div className="footer-column">
          <h3>Shop</h3>

          <a href="#products">
            Accessories
          </a>

          <a href="#products">
            Beauty
          </a>

          <a href="#products">
            Skincare
          </a>
        </div>

        {/* PICKSY */}
        <div className="footer-column">
          <h3>Picksy</h3>

          <a href="#products">
            About Us
          </a>

          <a href="#products">
            Contact
          </a>

          <a href="#products">
            Privacy
          </a>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="container footer-bottom">

        <p>
          © {new Date().getFullYear()} Picksy.
          All rights reserved.
        </p>

        <div className="footer-credit">
          Made with
          <span className="footer-heart">♥</span>
          by
          <strong>Zaynah Khan</strong>
        </div>

        <span className="footer-star">
          ✦
        </span>

      </div>

    </footer>
  );
}

export default Footer;