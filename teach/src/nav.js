import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Exercise</Link> |
      <Link to="/hello"> Hello</Link> |
      <Link to="/tuiter"> Tuiter</Link> |
      <Link to="/e6"> Exercise 6</Link> |
    </div>
  );
}

export default Nav;