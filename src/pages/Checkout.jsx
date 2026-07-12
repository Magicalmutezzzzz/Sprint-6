import { useCart } from "../context/CartContext";

const Checkout = () => {
  const {
    cart,
    removeFromCart,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            Add products from the shop to continue.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="page-header">
        <p>YOUR CART</p>

        <h1>Checkout</h1>
      </div>

      <div className="checkout-container">
        <section className="cart-items">
          {cart.map((item) => (
            <article
              className="cart-item"
              key={item.id}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="cart-item-details">
                <h3>{item.title}</h3>

                <p>Quantity: {item.quantity}</p>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </div>

              <button
                className="remove-button"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>
            </article>
          ))}
        </section>

        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>

            <span>{cart.length}</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>

            <strong>
              ${cartTotal.toFixed(2)}
            </strong>
          </div>

          <button className="checkout-button">
            Place Order
          </button>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;