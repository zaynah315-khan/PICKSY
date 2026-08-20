 import heroImage from "../assets/hero.jpeg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-text">

          <p className="eyebrow">
            CURATED JUST FOR YOU
          </p>

          <h1>
            Find little things
            <br />
            you'll <span>love.</span>
          </h1>

          <p className="hero-description">
            Discover trendy accessories,
            beauty essentials and skincare
            picks made for your everyday glow.
          </p>

          <a
            href="#products"
            className="primary-button"
          >
            Explore Picks →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;