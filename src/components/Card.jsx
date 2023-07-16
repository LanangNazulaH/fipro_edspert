import { Card } from "react-bootstrap";
import cardimg1 from "../assets/konten.png";
import { useNavigate, Link } from "react-router-dom";

export default function CardContent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details");
  };

  return (
    <Card
      as={Link}
      to="/details"
      onClick={handleClick}
      className="rounded-3 border-0"
      style={{
        width: "18rem",
        boxShadow: "5px 5px 5px #7f7f7f",
        userSelect: "none",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <div className="d-flex bg-dark rounded-top-3">
        <img
          src={cardimg1}
          alt=""
          width={"80px"}
          className="ps-2"
          style={{ objectFit: "contain" }}
        />
        <div className="px-4 pt-2">
          <h3 style={{ fontSize: "12pt", color: "#ffcd29" }}>
            Intensive Bootcamp
          </h3>
          <h2 style={{ fontSize: "12pt", color: "#f5f5f5" }}>
            Programming Laravel
          </h2>
          <p style={{ fontSize: "8pt", color: "#f5f5f5" }}>
            (Getting Started with Laravel 9)
          </p>
        </div>
      </div>
      <Card.Body className="pt-1 pb-0">
        <Card.Title>Programming Laravel</Card.Title>
        <Card.Subtitle>Getting Started with Laravel 9</Card.Subtitle>
        <div>
          <table style={{ fontSize: "8pt", marginTop: "0.5rem" }}>
            <tbody>
              <tr>
                <td style={{ paddingRight: "0.5rem", color: "#7e7e7e" }}>
                  Batch
                </td>
                <td>September 2022</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "0.5rem", color: "#7e7e7e" }}>
                  Mentor
                </td>
                <td>William Hartono, Farel Prayoga</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <p
            style={{
              textDecoration: "line-through",
              fontSize: "8pt",
              marginRight: "0.4rem",
            }}
          >
            Rp 2.060.000
          </p>
          <h3 style={{ fontSize: "12pt", color: "#0acf83" }}>Rp 560.000</h3>
        </div>
      </Card.Body>
    </Card>
  );
}
