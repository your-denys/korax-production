import Container from 'react-bootstrap/Container';
import logo from '../../assets/Korax.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="nav">
      <Container>
        <div className="nav-wrapper">
          <div>
            <NavLink to="/">
              <img src={logo} alt="KORAX" />
            </NavLink>
          </div>
          <div>
            <NavLink className="button-log-in" to="/platform">
              Log in
            </NavLink>

          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
