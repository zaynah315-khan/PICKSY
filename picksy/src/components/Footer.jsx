function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <h2 className="footer-logo">
            picksy<span>.</span>
          </h2>

          <p>
            Little things that make
            your everyday beautiful.
          </p>
        </div>

        <div>
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

        <div>
          <h3>Picksy</h3>

          <a href="#">
            About Us
          </a>

          <a href="#">
            Contact
          </a>

          <a href="#">
            Privacy
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Picksy. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;