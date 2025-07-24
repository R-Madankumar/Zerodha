import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Smartphone, BarChart3, PieChart, TrendingUp, Calculator, BookOpen } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Smartphone,
      title: 'Kite',
      description: 'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.',
      link: 'Try demo →'
    },
    {
      icon: BarChart3,
      title: 'Console',
      description: 'The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations.',
      link: 'Learn more →'
    },
    {
      icon: PieChart,
      title: 'Coin',
      description: 'Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.',
      link: 'Coin →'
    },
    {
      icon: TrendingUp,
      title: 'Kite Connect API',
      description: 'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.',
      link: 'Kite Connect →'
    },
    {
      icon: Calculator,
      title: 'Varsity',
      description: 'An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.',
      link: 'Varsity →'
    },
    {
      icon: BookOpen,
      title: 'TradingQ&A',
      description: 'Trading and investment Q&A platform where all your queries are answered by experts and fellow traders and investors.',
      link: 'TradingQ&A →'
    }
  ];

  return (
    <section id="products" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold mb-3">Technology</h2>
            <p className="lead text-muted">
              Sleek, modern, and intuitive trading platforms
            </p>
            <p className="text-muted">
              Check out our <a href="#" className="text-decoration-none" style={{ color: '#387ed1' }}>investment offerings →</a>
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                         style={{ width: '60px', height: '60px', backgroundColor: '#f8f9fa' }}>
                      <IconComponent size={24} color="#387ed1" />
                    </div>
                    <Card.Title className="fw-bold mb-3">{product.title}</Card.Title>
                    <Card.Text className="text-muted mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {product.description}
                    </Card.Text>
                    <a href="#" className="text-decoration-none fw-medium" style={{ color: '#387ed1' }}>
                      {product.link}
                    </a>
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

export default Products;