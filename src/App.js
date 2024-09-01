import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Updated paths
import ABOUT from './assets/about us.gif';
import VUL from './assets/vulnerability-assessments image.jpg';
import PERSON from '../src/assets/person.jpg'; // Correct paths to images

// Services data
const services = [
  {
    title: 'Penetration Testing',
    description: 'Identify and fix vulnerabilities in your systems before attackers can exploit them.',
    image: VUL,
    link: '/penetration-testing',
  },
  {
    title: 'Vulnerability Assessments',
    description: 'Thorough assessments to discover and address potential security weaknesses.',
    image: VUL,
    link: '/vulnerability-assessments',
  },
  {
    title: 'Security Audits',
    description: 'Comprehensive audits to ensure your organization meets security standards and regulations.',
    image: VUL,
    link: '/security-audits',
  },
  {
    title: 'Incident Response',
    description: 'Fast and effective response to security breaches to minimize damage and recover swiftly.',
    image: VUL,
    link: '/incident-response',
  },
  {
    title: 'Compliance Consulting',
    description: 'Expert guidance to help you comply with industry-specific regulations and standards.',
    image: VUL,
    link: '/compliance-consulting',
  },
  {
    title: 'Security Training',
    description: 'Equip your staff with the knowledge and skills to recognize and prevent cyber threats.',
    image: VUL,
    link: '/security-training',
  },
];

// Team members data
const teamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Security Analyst',
    description: 'John has over 10 years of experience in cybersecurity, specializing in vulnerability assessments.',
    image: PERSON,
  },
  {
    name: 'Jane Smith',
    role: 'Cybersecurity Expert',
    description: 'Jane is an expert in penetration testing and incident response, with a strong background in ethical hacking.',
    image: PERSON,
  },
  {
    name: 'Alice Johnson',
    role: 'Compliance Specialist',
    description: 'Alice ensures that all cybersecurity measures comply with industry regulations and standards.',
    image: PERSON,
  },
];

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted'); // Replace this with actual form submission logic
  };

  return (
    <>
      <header className="header">
        <Container>
          <Navbar expand="lg" variant="dark" className="navbar-custom">
            <Navbar.Brand href="#">
              <div className="logo">CRAP SECURITY</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto nav-links">
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#team">Team</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="about" className="section about-section">
                <Container>
                  <Row className="align-items-center">
                    <Col md={6} className="about-text">
                      <h2 className="section-title">CRAP SECURITY</h2>
                      <h3 className="section-subtitle">Securing Your Digital Future</h3>
                      <p className="section-description">
                        We are a team of experienced cybersecurity experts dedicated to protecting your digital assets. Our mission is to provide comprehensive and cutting-edge solutions to ensure your digital environment is secure from evolving threats.
                      </p>
                    </Col>
                    <Col md={6} className="about-image">
                      <img src={ABOUT} alt="Cybersecurity" className="about-img" />
                    </Col>
                  </Row>
                </Container>
              </section>

              <section id="services" className="section services-section">
                <Container>
                  <Row>
                    {services.length > 0 ? (
                      services.map((service, index) => (
                        <Col md={4} key={index} className="mb-4">
                          <div className="service-card">
                            <img src={service.image} alt={service.title} className="service-image" />
                            <div className="service-content">
                              <h4 className="service-title">{service.title}</h4>
                              <p className="service-description">{service.description}</p>
                              <Button variant="outline-light" href={service.link} className="learn-more-button">
                                Learn More
                              </Button>
                            </div>
                          </div>
                        </Col>
                      ))
                    ) : (
                      <Col>
                        <p>No services available.</p>
                      </Col>
                    )}
                  </Row>
                </Container>
              </section>

              <section id="team" className="section team-section">
                <Container>
                  <h2 className="section-title">Our Team</h2>
                  <p className="section-description">
                    Meet the team of experts who are committed to providing you with the best cybersecurity solutions.
                  </p>
                  <Slider {...settings} className="team-slider">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="team-card">
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h4 className="team-name">{member.name}</h4>
                        <p className="team-role">{member.role}</p>
                        <p className="team-description">{member.description}</p>
                      </div>
                    ))}
                  </Slider>
                </Container>
              </section>

              <section id="contact" className="section contact-section">
  <Container>
    <Row>
      <Col md={6} className="contact-info">
        <h2 className="section-title">Our Address</h2>
        <div className="contact-info-box">
          <p><strong>Crap Security</strong></p>
          <p>1234 Crap Security Ave</p>
          <p>Crap Security City, EC 56789</p>
          <p>Email: <a href="mailto:contact@Crap Security.com">contact@Crap Security.com</a></p>
          <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
        </div>
      </Col>
      <Col md={6} className="contact-form">
        <h2 className="section-title">Contact Us</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact">Contact Number:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </Col>
    </Row>
  </Container>
</section>



            </>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <footer className="footer">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <p>&copy; 2023 Crap Security. All rights reserved.</p>
              <div className="social-icons">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
