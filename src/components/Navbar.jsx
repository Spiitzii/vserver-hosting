import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import firmaLogo from '../assets/images/firma.png';
import { AccountContext } from './Accounts';

function Navbar({ onLoginOpen, cartCount }) {
  const { isLoggedIn, logout } = useContext(AccountContext);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <Link className="navbar-brand" to="/">
        <div className="logo-icon">
          <img src={firmaLogo} style={{ width: '50%', height: '50%' }} alt="Firma Logo" />
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link custom-link" to="/support" id="support-link">
              Hilfe & Support
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-link" to="/konfigurator" id="konfigurator-link">
              Konfigurator
            </Link>
          </li>
          <li className="nav-item position-relative">
            <Link className="nav-link custom-link" to="/warenkorb" id="warenkorb-link">
              Warenkorb
              {cartCount > 0 && (
                <span className="badge badge-danger cart-count">{cartCount}</span>
              )}
            </Link>
          </li>
          <li className="nav-item dropdown align-middle">
            {isLoggedIn ? (
              <>
                <button className="dropdown-toggle align-middle">
                  Konto
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/settings">
                    Einstellungen
                  </Link>
                  <Link className="dropdown-item" to="#" onClick={logout}>
                    Logout
                  </Link>
                </div>
              </>
            ) : ( 
              <Link className="nav-link custom-link align-middle" to="#" onClick={onLoginOpen}>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
