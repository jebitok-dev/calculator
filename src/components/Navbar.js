import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar" data-testid="navbar">
    <h2>Math Magicians</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
