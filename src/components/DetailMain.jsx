import {
  Button, ButtonGroup, Card, Container, Col, Row,
  
} from "react-bootstrap";
import { CheckSquareFill } from "react-bootstrap-icons";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export default function DetailMain() {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/checkout")
  }

  const customList = {
    display: "inline-block",
    verticalAlign: "0.125em",
    width: "1em",
    height: "0.5em",
    marginRight: "0.5em",
  };

  const loremTwenty =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad accusantium dolorum libero, fuga voluptatem aperiam culpa tempore optio molestiae quaerat!";

  return (
    <Container fluid className="bg-light py-5 px-5">
      <Row>
        <Col md={3}>
          <Card
            className="rounded-top border-0 mb-5"
            style={{ boxShadow: "0 0 15px #aeaeae" }}
          >
            <Card.Header className="bg-white rounded-top p-0">
              <ButtonGroup vertical className="d-flex">
                <Button variant="dark">Materi</Button>
                <Button variant="dark" className="rounded-bottom-0">
                  Fasilitas
                </Button>
              </ButtonGroup>
            </Card.Header>
            <Card.Body className="d-flex flex-column bg-white rounded-bottom">
              <div className="d-flex justify-content-around">
                <p
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                    fontSize: "10pt",
                  }}
                >
                  Rp 125.000
                </p>
                <p style={{ color: "orange" }} className="fw-bold">
                  Rp 99.000
                </p>
              </div>
              <Button variant="primary" className="rounded-pill" onClick={handleClick}>
                Daftar Kelas
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card style={{ boxShadow: "0 0 15px #aeaeae" }}>
            <Card.Header
              className={isMobile ? "bg-white mx-2 mt-2" : "bg-white mx-5 mt-2"}
            >
              <h2>Materi</h2>
            </Card.Header>
            <Card.Body className={isMobile ? "mx-2" : "mx-5"}>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">
                    Pengenalan Programming Laravel
                  </span>
                  <p
                    className="mx-4"
                    style={{ color: "grey", fontSize: "10pt" }}
                  >
                    {loremTwenty}
                  </p>
                </li>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">Materi Bootcamp 2</span>
                  <p
                    className="mx-4"
                    style={{ color: "grey", fontSize: "10pt" }}
                  >
                    {loremTwenty}
                  </p>
                </li>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">Materi Bootcamp 3</span>
                  <p
                    className="mx-4"
                    style={{ color: "grey", fontSize: "10pt" }}
                  >
                    {loremTwenty}
                  </p>
                </li>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">Materi Bootcamp 4</span>
                  <p
                    className="mx-4"
                    style={{ color: "grey", fontSize: "10pt" }}
                  >
                    {loremTwenty}
                  </p>
                </li>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">Materi Bootcamp 5</span>
                  <p
                    className="mx-4"
                    style={{ color: "grey", fontSize: "10pt" }}
                  >
                    {loremTwenty}
                  </p>
                </li>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">Materi Bootcamp 6</span>
                  <p
                    className="mx-4"
                    style={{ color: "grey", fontSize: "10pt" }}
                  >
                    {loremTwenty}
                  </p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={{ span: 9, offset: 3 }}>
          <Card style={{ boxShadow: "0 0 15px #aeaeae" }}>
            <Card.Header
              className={isMobile ? "bg-white mx-2 mt-2" : "bg-white mx-5 mt-2"}
            >
              <h2>Fasilitas</h2>
            </Card.Header>
            <Card.Body className={isMobile ? "mx-2" : "mx-5"}>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">E-Sertifikat</span>
                </li>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">Portfolio</span>
                </li>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">Job Connector</span>
                </li>
                <li>
                  <span style={customList}>
                    <CheckSquareFill color="orange" />
                  </span>
                  <span className="fw-bold">Career Development</span>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
