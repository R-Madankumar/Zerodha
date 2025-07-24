import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Users, Award, Shield, Globe } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { icon: Users, number: '1+ Crore', label: 'Active clients' },
    { icon: Globe, number: '₹6+ Lakh Crores', label: 'Client assets' },
    { icon: Award, number: '15+ Years', label: 'Of experience' },
    { icon: Shield, number: '100%', label: 'Secure platform' }
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold mb-3">Trust with confidence</h2>
            <p className="lead text-muted">
              Over 1+ crore customers trust Zerodha with ₹3.5+ lakh crores of equity investments and contribute to over 15% of daily retail exchange volumes in India.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Col md={6} lg={3} key={index} className="text-center">
                <div className="p-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                       style={{ width: '80px', height: '80px', backgroundColor: '#f8f9fa' }}>
                    <IconComponent size={32} color="#387ed1" />
                  </div>
                  <h3 className="fw-bold mb-2" style={{ color: '#387ed1' }}>{stat.number}</h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default TrustSection;