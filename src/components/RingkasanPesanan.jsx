import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import CheckoutItemDetail from "../components/CheckoutItemDetail";
import KodePromo from "../components/KodePromo";
import RingkasanPembayaran from "../components/RingkasanPembayaran";

function CancelButton() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setShowModal(true);
  };

  const handleConfirmCancel = () => {
    navigate("/details");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Batalkan Pesanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Apakah Anda yakin ingin membatalkan pesanan ini?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Tidak
          </Button>
          <Button variant="danger" onClick={handleConfirmCancel}>
            Ya, Batalkan
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        variant="link"
        style={{ textDecoration: "none", color: "grey" }}
        onClick={handleCancel}
      >
        <ChevronLeft /> Batalkan
      </Button>
    </>
  );
}

function PaymentSummary() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout/payment");
  };

  return (
    <Card
      className="border-0 py-3 px-3"
      style={{ height: "45rem", boxSizing: "border-box" }}
    >
      <Card.Body>
        <h4 className="mb-4">Ringkasan Pesanan</h4>
        <CheckoutItemDetail />
        <KodePromo />
        <div>
          <p className="fw-bold mt-4 mb-0">Metode Pembayaran</p>
          <p>Bank Transfer (verifikasi manual) - Mandiri</p>
        </div>
        <RingkasanPembayaran />
        <div className="mt-4" style={{ width: "35rem", fontSize: "10pt" }}>
          <p>
            Dengan menekan tombol Bayar kamu telah menyetujui syarat dan
            ketentuan yang berlaku, silakan baca kembali Syarat & Ketentuan yang
            berlaku.
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <CancelButton />
          <Button className="rounded-pill px-5" onClick={handleClick}>
            Bayar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PaymentSummary;
