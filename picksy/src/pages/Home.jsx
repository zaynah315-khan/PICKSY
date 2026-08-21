 import { useState } from "react";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import PickOfTheDay from "../components/PickOfTheDay";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

import accessoriesImage from "../assets/accessories.jpeg";
import beautyImage from "../assets/beauty.jpeg";
import skincareImage from "../assets/skincare.jpeg";

function Home({
  products,
  loading,
  onAddToCart,
}) {
  const [category, setCategory] = useState("All");

  const categories = [
    {
      title: "Accessories",
      description: "Cute little details",
      image: accessoriesImage,
    },
    {
      title: "Beauty",
      description: "Glow your way",
      image: beautyImage,
    },
    {
      title: "Skincare",
      description: "Everyday essentials",
      image: skincareImage,
    },
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
      (product) => product.featured === true
    ) || products[0];

  return (
    <main>
      <Hero />

      {/* Categories */}
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
              What are you{" "}
              <span>picking?</span>
            </h2>
          </div>

          <div className="categories-grid">
            {categories.map((item) => (
              <CategoryCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                onClick={() =>
                  setCategory(item.title)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pick of the Day */}
      {featuredProduct && (
        <PickOfTheDay
          product={featuredProduct}
          onAdd={onAddToCart}
        />
      )}

      {/* Products */}
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
                "Skincare",
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
          ) : filteredProducts.length === 0 ? (
            <div className="loading">
              <p>No products found.</p>
            </div>
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