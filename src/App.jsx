// App.jsx
import { useState, lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ErrorBoundary from './components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Lazy load components
const InvoiceGenerator = lazy(() => import('./components/InvoiceGenerator'));
const TemplateCarousel = lazy(() => import('./components/TemplateCarousel'));
const FAQ = lazy(() => import('./components/FAQ'));

export default function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
    setIsSidebarExpanded(true);
  };

  const toggleSidebarExpansion = () => {
    setIsSidebarExpanded(prev => !prev);
  };

  return (
    <ErrorBoundary>
      <div className="d-flex">
        <Sidebar 
          isVisible={isSidebarVisible} 
          isExpanded={isSidebarExpanded}
          toggleExpansion={toggleSidebarExpansion}
        />

        <div className={`main-content ${isSidebarVisible ? (isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed') : ''}`}>
          <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />

          <Container fluid className="py-5">
            <Suspense fallback={<div>Loading...</div>}>
              <InvoiceGenerator />
              <TemplateCarousel />
              <FAQ />
            </Suspense>
          </Container>

          <Footer />
          <Chatbot />
        </div>
      </div>
      <style >{`
        .main-content {
          flex-grow: 1;
          transition: all 0.3s ease-in-out;
        }
        .main-content.sidebar-expanded {
          margin-left: 250px;
        }
        .main-content.sidebar-collapsed {
          margin-left: 60px;
        }
        .main-content:not(.sidebar-expanded):not(.sidebar-collapsed) {
          margin-left: 0;
        }
      `}</style>
    </ErrorBoundary>
  );
}