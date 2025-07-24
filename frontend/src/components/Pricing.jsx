import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { IndianRupee, Percent, DollarSign } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      icon: IndianRupee,
      title: 'Free equity delivery',
      description: 'All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.',
      price: '₹0',
      period: 'per trade'
    },
    {
      icon: DollarSign,
      title: 'Intraday and F&O trades',
      description: 'Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.',
      price: '₹20',
      period: 'per trade'
    },
    {
      icon: Percent,
      title: 'Free direct MF',
      description: 'All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.',
      price: '₹0',
      period: 'commission'
    }
  ];

  return (
    <section id="pricing" className="py-5 bg-white">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold mb-3">Unbeatable pricing</h2>
            <p className="lead text-muted">
              We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                         style={{ width: '60px', height: '60px', backgroundColor: '#f8f9fa' }}>
                      <IconComponent size={24} color="#387ed1" />
                    </div>
                    <Card.Title className="fw-bold mb-3">{plan.title}</Card.Title>
                    <div className="mb-3">
                      <span className="display-6 fw-bold" style={{ color: '#387ed1' }}>{plan.price}</span>
                      <span className="text-muted ms-2">{plan.period}</span>
                    </div>
                    <Card.Text className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {plan.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <p className="text-muted">
              <a href="#" className="text-decoration-none" style={{ color: '#387ed1' }}>See the full pricing list →</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;