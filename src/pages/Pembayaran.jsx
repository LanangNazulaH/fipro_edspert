import { Card, Container, Col, Row, Nav, Tab, Button } from "react-bootstrap";
import CheckoutItemDetail from "../components/CheckoutItemDetail";
import { Files } from "react-bootstrap-icons";
import mandiri from "../assets/mandiri.png";

export default function Pembayaran() {
  const InstruksiBayar = () => {
    return (
      <div className="me-3">
        <h4 className="mb-3" style={{ fontSize: "16pt" }}>
          Instruksi Pembayaran
        </h4>
        <Tab.Container defaultActiveKey="link-1">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link className="fw-bold" eventKey="link-1">
                ATM
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="fw-bold" eventKey="link-2">
                Internet Banking
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="fw-bold" eventKey="link-3">
                M-Banking
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="mt-3">
            <Tab.Pane eventKey="link-1">
              <ol style={{ fontSize: "11pt" }}>
                <li>Masukkan kartu ke mesin ATM Mandiri.</li>
                <li>Pilih Bahasa.</li>
                <li>Masukkan PIN ATM.</li>
                <li>Pilih menu transaksi lainnya.</li>
                <li>Pilih menu "Transfer", lalu pilih ke rekening Mandiri.</li>
                <li>Masukkan no rekening yang dituju.</li>
                <li>Masukkan nominal jumlah uang yang akan ditransfer.</li>
                <li>
                  Layar ATM akan menampilkan data transaksi Anda, jika data
                  sudah benar pilih "YA".
                </li>
                <li>Selesai, struk akan keluar dari mesin ATM.</li>
              </ol>
            </Tab.Pane>
            <Tab.Pane eventKey="link-2">
            <ol style={{ fontSize: "11pt" }}>
                <li>Login ke link internet kamu. Kemudian silahkan masukkan user ID dan password kamu</li>
                <li>Pilih menu "Transfer", pilih Rekening anda jika ingin kirim uang ke sesama bank anda atau pilih Antar Bank Online jika ingin kirim ke bank lain.</li>
                <li>Pilih rekening asal, nominal, rekening tujuan transfer kemudian pilih "Lanjutkan"</li>
                <li>Langkah berikutnya aktifkan token dan masukan PIN Token mandiri kamu, lalu tekan angka 1 untuk masuk ke mode APPLI 1</li>
                <li>nput challenge code yang terlihat pada layar PC (ada 8 digit) ke token bank dan tunggu sampai muncul kode baru dan masukan kode yang tampak pada token bank kamu ke kolom “Masukan PIN Mandiri” Untuk Konfirmasi, terakhir pilih tombol Lanjutkan</li>
                
              </ol>
            </Tab.Pane>
            <Tab.Pane eventKey="link-3">
            <ol style={{ fontSize: "11pt" }}>
                <li>Masuk ke menu "m-Transfer" dan kemudian masuk ke menu "Transfer"</li>
                <li>Klik menu "Transfer Antar Rekening"</li>
                <li>Masukkan nominal yang ingin ditrnasfer</li>
                <li>Tambahkan berita atau keterangan transfer jika diperlukan.</li>
                <li>Konfirmasi nomor rekening penerima beserta nominal yang ditransfer</li>
                <li>Masukkan Personal Identification Number (PIN) BCA, pastikan tidak salah dalam memasukkan PIN.</li>
                <li>Transaksi selesai.</li>
              
              </ol>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  };

  const MetodeBayar = () => {
    return (
      <div className="mx-3">
        <h4 style={{ fontSize: "14pt" }}>Metode Pembayaran</h4>
        <p style={{ fontSize: "10pt", color: "grey" }}>
          Bank Transfer (verifikasi manual) - Mandiri
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={mandiri}
              alt=""
              style={{
                objectFit: "contain",
                width: "100%",
                height: "50%",
              }}
            />
          </div>
          <div>
            <span
              className="fw-semibold py-0 my-0"
              style={{ fontSize: "10pt" }}
            >
              No Rek. 137000299089
            </span>
            <span>
              <Button
                className="py-0"
                variant="link"
                style={{ textDecoration: "none", fontSize: "9pt" }}
              >
                <Files className="me-1" />
                Salin
              </Button>
            </span>
            <p
              className="py-0 my-0"
              style={{ fontSize: "10pt", color: "grey" }}
            >
              a.n. PT Widya Kreasi Bangsa
            </p>
          </div>
        </div>
        <div>
          <p className="mt-2 mb-1" style={{ fontSize: "10pt", color: "grey" }}>
            Nominal yang harus dibayar senilai:
          </p>
          <h5>Rp 400.000</h5>
        </div>
      </div>
    );
  };

  return (
    <Container
      fluid
      className="bg-light py-3"
      style={{ padding: "0 5rem" }}
    >
      <Row>
        <Col md={12} className="mb-3 p-0">
          <h2>Instruksi Bayar</h2>
        </Col>
      </Row>
      <Row>
        <Card className="px-0">
          <Card.Body>
            <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr" }}>
              <div>
                <CheckoutItemDetail />
                <MetodeBayar />
              </div>
              <InstruksiBayar />
            </div>
          </Card.Body>
          <Card.Footer className="bg-dark">
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ height: "13rem" }}
            >
              <p className="fw-semibold text-white mb-4">
                Sudah Transfer? Lakukan verifikasi pembayaran segera!
              </p>
              <Button
                variant="success"
                className="text-white fw-semibold rounded-pill px-5 py-3"
              >
                Verifikasi Pembayaran
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
}
