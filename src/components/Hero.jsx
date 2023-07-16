import { Container, Col, Row } from "react-bootstrap";
import image1 from "../assets/figurdepan.png";

export default function Hero() {
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col
          lg={6}
          md={12}
          className="d-flex flex-column justify-content-center py-3"
          style={{ padding: "0 5rem" }}
        >
          <h1 className="mb-4">Jadi expert bersama edspert.id</h1>
          <p>
            Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
            bidangnya, untuk siapkan karir impian Anda.
          </p>
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <div style={{ height: "26rem" }}>
            <img
              src={image1}
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
