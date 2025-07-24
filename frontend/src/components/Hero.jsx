import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-5" style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-3 fw-bold mb-4" style={{ color: '#212529', lineHeight: '1.2' }}>
              Invest in everything
            </h1>
            <p className="lead mb-4 text-muted" style={{ fontSize: '1.25rem' }}>
              Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>
          </Col>
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <div className="position-relative">
              <div 
                className="bg-white rounded-4 shadow-lg p-4 mx-auto"
                style={{ maxWidth: '500px', border: '1px solid #e9ecef' }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0 fw-bold">Portfolio</h5>
                  <span className="badge bg-success rounded-pill">+12.5%</span>
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded-3">
                      <h6 className="mb-1 text-muted">Total Value</h6>
                      <h4 className="mb-0 fw-bold text-success">₹3,45,678</h4>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded-3">
                      <h6 className="mb-1 text-muted">Day's P&L</h6>
                      <h4 className="mb-0 fw-bold text-success">+₹4,567</h4>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>RELIANCE</span>
                    <span className="text-success">+2.3%</span>
                  </div>
                  <div className="progress mb-3" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '75%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>TCS</span>
                    <span className="text-success">+1.8%</span>
                  </div>
                  <div className="progress mb-3" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>HDFC BANK</span>
                    <span className="text-danger">-0.5%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-danger" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;