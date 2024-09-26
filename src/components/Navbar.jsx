// components/Navbar.jsx
import PropTypes from 'prop-types';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
import '../styles/Navbar.css';

export default function Navbar({ toggleSidebar, isSidebarVisible }) {
  return (
    <BootstrapNavbar bg="light" expand="lg" fixed="top" className="px-3 navbar-container">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center me-2">
          <Button variant="link" onClick={toggleSidebar} className="p-0 me-2">
            <List size={24} />
          </Button>
          {!isSidebarVisible && (
            <img src="./logo.jpeg" alt="Logo" className="navbar-logo" />
          )}
        </div>

        <div className="navbar-divider"></div>

        <div className="ms-3">
          <div className="navbar-title">Free GST Invoice Generator</div>
          <div className="navbar-subtitle">by Zoho Invoice</div>
        </div>
      </div>

      <Nav className="ms-auto d-flex align-items-center">
        <span className="navbar-zoho ms-auto me-3">
          Check out Zoho Invoices
        </span>
        <Button variant="danger" className="ms-2">Sign Up. It s Free</Button>
      </Nav>
    </BootstrapNavbar>
  );
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarVisible: PropTypes.bool.isRequired,
};