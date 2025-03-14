import { Link } from 'react-router-dom';
import './Register.css'

export const Register = () => {
  return (
    <section className="register-page-form-container">
      <form className="register-page-form">
        <h2 className="register-title">REGISTER</h2>
        <div className="input-email-container">
          <label htmlFor="email">Nombre</label>
          <input type="email" name="" id="text" />
        </div>

        <div className="input-email-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" />
        </div>

        <div className="input-password-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="" id="password" />
        </div>

        <button className="register-btn">Register</button>
        <Link to={'/login'} className='login-link'>If you already have an account </Link>
      </form>
    </section>
  );
};
