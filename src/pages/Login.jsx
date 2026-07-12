import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { user, loginAsGuest } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/shop";

  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  const handleGuestLogin = () => {
    loginAsGuest();

    navigate(redirectPath, {
      replace: true,
    });
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <div className="login-icon">S</div>

        <h1>Welcome to ShopSphere</h1>

        <p>
          Login to continue your shopping experience and
          access checkout.
        </p>

        <button
          className="guest-button"
          onClick={handleGuestLogin}
        >
          Login as Guest
        </button>

        <span>No account required.</span>
      </div>
    </main>
  );
};

export default Login;