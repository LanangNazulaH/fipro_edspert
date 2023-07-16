import { Button, Form } from "react-bootstrap";

export default function KodePromo() {
  return (
    <>
      <div>
        <p className="fw-bold mb-2">Kode Promo</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Form.Control
          type="text"
          placeholder="Masukkan kode promo"
          style={{ marginRight: "1rem", width: "28rem" }}
        />
        <Button>Terapkan</Button>
      </div>
    </>
  );
}
