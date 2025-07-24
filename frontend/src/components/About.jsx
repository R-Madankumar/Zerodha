import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Customer first',
      description: 'That\'s why 1+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.',
    },
    {
      icon: Heart,
      title: 'No spam or gimmicks',
      description: 'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
    },
    {
      icon: Award,
      title: 'The Zerodha universe',
      description: 'Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.',
    },
    {
      icon: Users,
      title: 'Do better with money',
      description: 'With initiatives like Nudge and Kill Switch, we don\'t just facilitate transactions, but actively help you do better with money.',
    }
  ];

  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={6}>
            <h2 className="fw-bold mb-4">We pioneered the discount broking model in India.</h2>
            <p className="lead text-muted mb-4">
              Now, we are breaking ground with our technology.
            </p>
            <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
              We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.7' }}>
              Today, our disruptive pricing models and in-house technology have made us the largest stock broker in India in terms of active retail clients, contributing over 15% of all retail order volumes in India daily. Over 1+ crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>
          </Col>
          <Col lg={6} className="text-center">
            <div className="p-4">
              <div className="bg-light rounded-4 p-5">
                <h3 className="fw-bold mb-3" style={{ color: '#387ed1' }}>15+ years</h3>
                <p className="text-muted mb-4">of relentless focus on investing technology and user experience</p>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-3 bg-white rounded-3">
                      <h5 className="fw-bold mb-1" style={{ color: '#387ed1' }}>1+ Cr</h5>
                      <small className="text-muted">Active clients</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded-3">
                      <h5 className="fw-bold mb-1" style={{ color: '#387ed1' }}>15%</h5>
                      <small className="text-muted">Market share</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="g-4">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Col md={6} key={index}>
                <Card className="h-100 border-0 bg-light">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle me-3" 
                           style={{ width: '50px', height: '50px', backgroundColor: 'white' }}>
                        <IconComponent size={20} color="#387ed1" />
                      </div>
                      <div>
                        <Card.Title className="fw-bold mb-3">{value.title}</Card.Title>
                        <Card.Text className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                          {value.description}
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default About;