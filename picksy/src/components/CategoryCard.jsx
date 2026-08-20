function CategoryCard({
  title,
  description,
  image,
  onClick
}) {
  return (
    <button
      className="category-card"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
      />

      <div className="category-overlay">
        <p>{description}</p>
        <h3>{title}</h3>
        <span>Explore →</span>
      </div>
    </button>
  );
}

export default CategoryCard;