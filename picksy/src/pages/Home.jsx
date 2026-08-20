import { useState } from "react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import PickOfTheDay from "../components/PickOfTheDay";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

function Home({
  products,
  loading,
  onAddToCart
}) {
  const [category, setCategory] =
    useState("All");

  const categories = [
    {
      title: "Accessories",
      description: "Cute little details",
      image: "/images/accessories.jpg"
    },
    {
      title: "Beauty",
      description: "Glow your way",
      image: "/images/beauty.jpg"
    },
    {
      title: "Skincare",
      description: "Everyday essentials",
      image: "/images/skincare.jpg"
    }
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );

  const featuredProduct =
    products.find(
      (product) => product.featured
    ) || products[0];

  return (
    <main>

      <Hero />

      <section
        id="categories"
        className="categories-section"
      >

        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">
              SHOP YOUR WAY
            </p>

            <h2>
              What are you
              <span> picking?</span>
            </h2>
          </div>

          <div className="categories-grid">

            {categories.map((item) => (
              <CategoryCard
                key={item.title}
                {...item}
                onClick={() =>
                  setCategory(item.title)
                }
              />
            ))}

          </div>

        </div>

      </section>

      <PickOfTheDay
        product={featuredProduct}
        onAdd={onAddToCart}
      />

      <section
        id="products"
        className="products-section"
      >

        <div className="container">

          <div className="section-heading products-heading">

            <div>
              <p className="eyebrow">
                OUR PICKS
              </p>

              <h2>
                Trending <span>now.</span>
              </h2>
            </div>

            <div className="filter-buttons">

              {[
                "All",
                "Accessories",
                "Beauty",
                "Skincare"
              ].map((item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? "filter active"
                      : "filter"
                  }
                  onClick={() =>
                    setCategory(item)
                  }
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {loading ? (
            <Loading />
          ) : (
            <div className="products-grid">

              {filteredProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={onAddToCart}
                  />
                )
              )}

            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Home;