import { Link } from "react-router-dom";
import "./home.style.scss";

export const Home = () => {
  return (
    <main className="home-page page-container">
      <div className="page-wrapper">
        <section className="page-content">
          <div className="content-text">
            <h5 className="subtitle">SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="title">SPACE</h1>
            <p className="description">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </section>
        <section className="explore">
          <Link to="/destination/moon">
            <button className="explore-button">
              <h4 className="btn">EXPLORE</h4>
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
};
