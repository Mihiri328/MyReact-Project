import { useNavigate } from 'react-router-dom';
import InputField from './components/InputField';
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin';


const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        onLogin();
        navigate('/dashboard');
      } else {
        const err = await res.json();
        alert(err.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="outsite-message">
      <div className="outsite">
        <div className="form-header">
          <h2 className="form-title">Welcome Back</h2>
          <p className="form-subtitle">Access your dashboard and features</p>
        </div>
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
      </div>
    </div>
  );
};

export default Login;
