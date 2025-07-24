import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MessageCircle, Phone, Mail, FileText, Users, Clock } from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Support portal',
      description: 'Search for answers or ask your queries',
      action: 'Track tickets'
    },
    {
      icon: Phone,
      title: 'Call & trade',
      description: 'Call & Trade and more',
      action: 'Call now'
    },
    {
      icon: FileText,
      title: 'Track complaints',
      description: 'Track your complaints here',
      action: 'Track complaints'
    }
  ];

  const stats = [
    { icon: Users, number: '6.4M+', label: 'Monthly active users' },
    { icon: Clock, number: '<1 min', label: 'Average response time' },
    { icon: MessageCircle, number: '99.5%', label: 'Uptime guarantee' }
  ];

  return (
    <section id="support" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold mb-3">Support</h2>
            <p className="lead text-muted">
              We're here to help with any questions or concerns you might have.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 mb-5">
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                         style={{ width: '60px', height: '60px', backgroundColor: '#f8f9fa' }}>
                      <IconComponent size={24} color="#387ed1" />
                    </div>
                    <Card.Title className="fw-bold mb-3">{option.title}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {option.description}
                    </Card.Text>
                    <a href="#" className="text-decoration-none fw-medium" style={{ color: '#387ed1' }}>
                      {option.action} →
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Row className="g-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Col md={4} key={index} className="text-center">
                <div className="p-3">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                       style={{ width: '60px', height: '60px', backgroundColor: '#f8f9fa' }}>
                    <IconComponent size={24} color="#387ed1" />
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

export default Support;