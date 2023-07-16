import { Button, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function DetailJoin() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <Container
      fluid
      className="d-grid justify-content-center bg-dark text-white"
      style={{ padding: "6rem" }}
    >
      <Row>
        <Col md={12} className="mb-4">
          <h2>Sudah siap bergabung?</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={handleClick}
            className="rounded-pill fw-bold"
            style={{ padding: "0.5rem 5rem", fontSize: "15pt" }}
          >
            Daftar Kelas
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
