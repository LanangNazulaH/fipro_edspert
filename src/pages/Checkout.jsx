import React, { useState, useEffect } from "react";
import { Accordion, Card, Container, Col, Row } from "react-bootstrap";
import mandiri from "../assets/mandiri.png";
import bca from "../assets/bca.png";
import BankTransferOption from "../components/TransferBank";
import PaymentSummary from "../components/RingkasanPesanan";

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  

  const handleRadioChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  useEffect(() => {
    setSelectedPayment("paymentOption1");
  }, []);

  return (
    <Container fluid className="py-3 bg-light">
      <Row className="mb-3 mx-5">
        <Col md={12}>
          <h2>Checkout</h2>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col md={5}>
          <Card className="border-0 py-3" style={{ height: "45rem" }}>
            <Card.Body>
              <h4 className="mb-4">Pilih Metode Pembayaran</h4>
              <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="px-1">
                      <h5 style={{ fontSize: "12pt" }}>
                        Bank Transfer (verifikasi manual)
                      </h5>
                      <p style={{ fontSize: "9pt" }}>
                        Pembayaran melalui Bank Transfer Mandiri atau BCA.
                        Metode bayar ini memerlukan verifikasi pembayaran manual
                        melalui WhatsApp.
                      </p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <BankTransferOption
                      logo={mandiri}
                      label="Bank Transfer ke Rek Bank Mandiri"
                      value="paymentOption1"
                      selectedPayment={selectedPayment}
                      onRadioChange={handleRadioChange}
                    />
                    <BankTransferOption
                      logo={bca}
                      label="Bank Transfer ke Rek Bank BCA"
                      value="paymentOption2"
                      selectedPayment={selectedPayment}
                      onRadioChange={handleRadioChange}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="px-1">
                      <h5 style={{ fontSize: "12pt" }}>
                        Virtual Account (verifikasi otomatis)
                      </h5>
                      <p style={{ fontSize: "9pt" }}>
                        Pembayaran melalui virtual account berbagai bank. Metode
                        bayar ini akan diverifikasi secara otomatis.
                      </p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <BankTransferOption
                      logo={mandiri}
                      label="Bank Transfer ke Rek Bank Mandiri"
                      value="paymentOption3"
                      selectedPayment={selectedPayment}
                      onRadioChange={handleRadioChange}
                    />
                    <BankTransferOption
                      logo={bca}
                      label="Bank Transfer ke Rek Bank BCA"
                      value="paymentOption4"
                      selectedPayment={selectedPayment}
                      onRadioChange={handleRadioChange}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7}>
          <PaymentSummary />
        </Col>
      </Row>
    </Container>
  );
}
