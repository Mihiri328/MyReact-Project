import { useNavigate } from 'react-router-dom';
import SocialLogin from './components/SocialLogin';
import InputField from './components/InputField';
import { Link } from 'react-router-dom';

const Signup = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        onLogin();
        navigate('/dashboard');
      } else {
        const err = await res.json();
        alert(err.message);
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="outsite-message">
      <div className="outsite">
        <div className="form-header">
          <h2 className="form-title">Create Your Account</h2>
          <p className="form-subtitle">It only takes a minute to create your account</p>
        </div>
        <div className="login-container">
          <h2 className="form-title">Create Your Account</h2>

          <SocialLogin />

          <div className="separator"><span>or</span></div>

          <form onSubmit={handleSubmit} className="login-form">
            <InputField type="text" placeholder="Full Name" icon="person" />
            <InputField type="email" placeholder="Email Address" icon="mail" />
            <InputField type="password" placeholder="Create Password" icon="lock" />

            <button type="submit" className="login-button"><b>Sign Up</b></button>
          </form>

          <p className="signup-prompt">
            Already have an account? <Link to="/login" className="signup-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
