 import heroBanner from "../assets/hero-banner.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner">

        {/* Hero Image */}
        <img
          src={heroBanner}
          alt="Picksy trending accessories"
          className="hero-banner-image"
        />

        {/* Dark overlay */}
        <div className="hero-overlay"></div>

        {/* Trending Marquee */}
        <div className="hero-marquee">
          <div className="marquee-track">
            <span>TRENDING ACCESSORIES</span>
            <b>✦</b>

            <span>BEAUTY ESSENTIALS</span>
            <b>✦</b>

            <span>NEW ARRIVALS</span>
            <b>✦</b>

            <span>EVERYDAY LUXE</span>
            <b>✦</b>

            <span>TRENDING ACCESSORIES</span>
            <b>✦</b>

            <span>BEAUTY ESSENTIALS</span>
            <b>✦</b>

            <span>NEW ARRIVALS</span>
            <b>✦</b>

            <span>EVERYDAY LUXE</span>
            <b>✦</b>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-text">

          <p className="hero-eyebrow">
            ✦ CURATED FOR YOU ✦
          </p>

          <h1>
            Your Style.
            <br />
            <span>Your Picksy.</span>
          </h1>

          <p className="hero-description">
            Discover trendy accessories, beauty essentials
            and little luxuries made for your everyday style.
          </p>

          <button className="hero-button">
            Shop The Collection
            <span>→</span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;