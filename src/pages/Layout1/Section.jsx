import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Background Image
import Background from "../../assets/images/hero-1-bg-img.png";
import hero from "../../assets/images/undraw_Developer_activity_re_39tg.png";
import FeatherIcon from "feather-icons-react";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="hero-1-bg bg-light "
          style={{
            backgroundImage: `url(${Background})`,
            height: "100vh",
          }}
          id="home">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                <h1 className="display-4 text-secondary font-weight-semibold">
                  Adept
                </h1>
                <h2 className="font-weight-medium mb-4">
                  Automated Data Engineering by Program Transformation
                </h2>
                <p>- Chidi Solomon Obi</p>
                {/* <h1 className="hero-1-title font-weight-normal text-dark mb-4">We Help You To Boost Your Business</h1>
                <p className="text-muted mb-4 pb-3">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequinesciunt.</p>
                <Link to="#" className="btn btn-primary">Get Started <span className="ml-2 right-icon">&#8594;</span></Link> */}
              </Col>
              <Col lg={6} md={10}>
                <div className=" mt-5 mt-lg-0">
                  <img
                    src={hero}
                    alt=""
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          {/* <a
            href="https://www.linkedin.com/company/periteleios"
            target="_blank"
            className="menu-social-link mx-auto d-block text-center"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/company/periteleios")
            }>
            <FeatherIcon icon="linkedin" className=" icon-lg sw_1-5" />
          </a> */}
          <Container>
            <h1 className=" text-center text-dark font-weight-semibold display-5 py-4">
              Coming soon
            </h1>
            <p className="text-center pb-3">
              <a
                href="mailto:info@periteleios.com"
                className="text-center d-inline-block bg-primary text-light font-weight-medium"
                style={{
                  padding: 10,
                  borderRadius: 6,
                  textAlign: "center",
                }}>
                <FeatherIcon icon="mail" />
                <p className="mx-1 d-inline">info@periteleios.com</p>
              </a>
            </p>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
