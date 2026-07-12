import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductView = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  if (loading) {
    return <div className="status-message">Loading product...</div>;
  }

  if (error) {
    return <div className="status-message">{error}</div>;
  }

  return (
    <main className="product-view-page">
      <Link to="/shop" className="back-link">
        ← Back to Shop
      </Link>

      <section className="product-view">
        <div className="product-view-image">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="product-view-details">
          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="product-rating">
            ⭐ {product.rating} / 5
          </p>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-information">
            <p>
              <strong>Brand:</strong>{" "}
              {product.brand || "Generic"}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
          </div>

          <h2 className="detail-price">
            ${product.price}
          </h2>

          <button
            className="add-cart-button"
            onClick={handleAddToCart}
          >
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductView;