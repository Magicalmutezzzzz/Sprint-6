import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            MODERN E-COMMERCE
          </p>

          <h1>
            Discover Products
            <span> You'll Love.</span>
          </h1>

          <p className="hero-description">
            Explore our collection of products and enjoy a
            seamless shopping experience built with React.
          </p>

          <Link to="/shop" className="primary-button">
            Explore Shop
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;