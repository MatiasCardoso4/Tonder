import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  return (
    <section className="login-page-form-container">
      <form className="login-page-form">
        <h2 className="login-title">LOGIN</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="" id="password" />
        </div>

        <button className="login-btn">Login</button>

        <Link to={'/register'} className="create-account-link">You have an account?</Link>
      </form>
    </section>
  );
};
