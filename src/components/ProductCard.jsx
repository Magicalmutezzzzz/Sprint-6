import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const openProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <article className="product-card" onClick={openProduct}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-card-content">
        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.title}</h3>

        <p className="product-rating">
          ⭐ {product.rating}
        </p>

        <div className="product-card-footer">
          <span className="product-price">
            ${product.price}
          </span>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              openProduct();
            }}
          >
            View Product
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;