import PropTypes from 'prop-types';
import { People, Cash, Box, FileEarmarkText, Facebook, Twitter, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import '../styles/Sidebar.css';

export default function Sidebar({ isVisible, isExpanded, toggleExpansion }) {
  if (!isVisible) return null;

  return (
    <div className={`sidebar bg-dark text-white ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header p-3 text-center">
        <img src={'./logo2.png'} alt="Logo" className="logo" />
        {isExpanded && <span className="fw-bold title mt-1">Finance Free App</span>}
      </div>

      <button onClick={toggleExpansion} className="toggle-btn">
        {isExpanded ? <ChevronLeft /> : <ChevronRight />}
      </button>

      {isExpanded && (
        <>
          <div className="billing-section p-3">
            <h5>
              <People className="me-2" />
              Billing
            </h5>
            <div className="billing-items">
              <div className="billing-item">Create Invoices</div>
              <div className="billing-item">Generate Estimates</div>
              <div className="billing-item">Create Receipts</div>
              <div className="billing-item">Revenue Forecast</div>
            </div>
          </div>

          <div className="finance-payroll-section p-3">
            <h5>
              <Cash className="me-2" />
              Finance & Payroll
            </h5>
            <div className="billing-items">
              <div className="billing-item">HMRC Furlough Claim Calculator</div>
              <div className="billing-item">Income Tax Calculator</div>
              <div className="billing-item">Paycheck Calculator</div>
            </div>
          </div>

          <div className="inventory-section p-3">
            <h5>
              <Box className="me-2" />
              Inventory
            </h5>
            <div className="billing-items">
              <div className="billing-item">SKU Generator</div>
              <div className="billing-item">Purchase Order Generator</div>
              <div className="billing-item">Calculate Reorder Point</div>
              <div className="billing-item">Economic Order Quantity</div>
              <div className="billing-item">Break-even Point Calculator</div>
              <div className="billing-item">Inventory Turnover Ratio</div>
              <div className="billing-item">Packing Slip Generator</div>
              <div className="billing-item">BarCode Generator</div>
            </div>
          </div>

          <div className="expense-section p-3">
            <h5>
              <FileEarmarkText className="me-2" />
              Expense
            </h5>
            <div className="billing-items">
              <div className="billing-item">Generate Expense Reports</div>
            </div>
          </div>

          <div className="spread-the-word text-center p-3">
            <div className="spread-text">Spread the word</div>
            <div className="social-icons">
              <Facebook className="me-2" />
              <Twitter />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  toggleExpansion: PropTypes.func.isRequired,
};