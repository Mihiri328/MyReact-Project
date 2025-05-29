import { useNavigate } from 'react-router-dom';
import InputField from './components/InputField';
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Login to Your Account</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <InputField type="email" placeholder="Email" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <SocialLogin />

        <div className="separator"><span>or</span></div>

        <div className="remember-forgot">
          <label className="remember-me">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-password-link">Forgot password?</a>
        </div>

        <button className="login-button" type="submit"><b>Login</b></button>

        <p className="signup-prompt">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
