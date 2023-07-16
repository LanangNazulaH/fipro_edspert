import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={5} className="px-5">
          <h3>Edspert</h3>
          <p style={{ fontSize: "10pt", color: "grey" }}>
            Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55581
          </p>
        </Col>
        <Col md={2} className="ps-5">
          <p className="fw-bold">Program</p>
          <div style={{ fontSize: "10pt", color: "grey", cursor: "pointer" }}>
            <p>Online Course</p>
            <p>Mini bootcamp</p>
            <p>Bootcamp</p>
          </div>
        </Col>
        <Col md={2} className="ps-5">
          <p className="fw-bold">Bidang Ilmu</p>
          <div style={{ fontSize: "10pt", color: "grey", cursor: "pointer" }}>
            <p>Digital marketing</p>
            <p>Product management</p>
            <p>English</p>
            <p>Programming</p>
          </div>
        </Col>
        <Col md={2} className="ps-5">
          <p className="fw-bold">Tentang Edspert.id</p>
          <div style={{ fontSize: "10pt", color: "grey", cursor: "pointer" }}>
            <p>Bantuan</p>
            <p>Kontak kami</p>
            <p>Media sosial</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={7} className="ps-5 d-flex justify-content-end">
          <p
            className="fw-bold pe-4"
            style={{ fontSize: "10pt", color: "grey" }}
          >
            © Edspert. All Rights Reserved.
            <p>
              Created by: Lanang Nazula Hadialloh
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
