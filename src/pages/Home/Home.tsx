import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <section className="main">
      <h1 className="title">Tonder</h1>
      <section className="row-btn-flex">
        <Link to={"/login"} className="login-page-link">Login</Link>
        <Link to={"/register"} className="register-page-link">Register</Link>
      </section>
    </section>
  );
};
