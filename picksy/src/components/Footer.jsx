 function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            picksy<span>.</span>
          </h2>

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


        {/* Shop */}
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


        {/* Picksy */}
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


      {/* Footer Bottom */}
      <div className="container footer-bottom">

        <p>
          © {new Date().getFullYear()} Picksy. All rights reserved.
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