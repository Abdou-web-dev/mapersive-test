// import noMatch from "../assets/img/404.png";
import "./pages_styles.scss";

function NoMatch() {
  return (
    <div className="no-match">
      <h2>Sorry, the page you're looking for does not exist.</h2>
      <div>{/* <img src={noMatch} alt="" /> */}</div>
    </div>
  );
}

export default NoMatch;
