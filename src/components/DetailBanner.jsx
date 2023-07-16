import { Container, Col, Row } from "react-bootstrap";
import image1 from "../assets/figurdepan.png";
import { useMediaQuery } from "react-responsive";

export default function DetailBanner() {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col
          lg={9}
          md={12}
          className="d-flex flex-column justify-content-center py-4"
          style={{ padding: "0 5rem" }}
        >
          <div className="mb-3">
            <h1>Programming with Laravel</h1>
            <h2>Getting started with Laravel 9</h2>
          </div>
          <p>Mentor</p>
          <table>
            <thead className="fw-bold">
              <tr>
                <td>William Hartono</td>
                <td>Farel Prayoga</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Developer at Widya Edu</td>
                <td>Developer at Widya Edu</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col lg={3} className="d-none d-lg-block">
          <div style={{ height: "18rem" }}>
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
