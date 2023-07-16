import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";

function TombolBatal() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setShowAlert(true);
  };

  const handleConfirmCancel = () => {
    navigate("/details");
  };

  const handleCancelAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <div>
        {showAlert && (
          <Alert variant="warning" onClose={handleCancelAlertClose} dismissible>
            <Alert.Heading>Cancel Transaction</Alert.Heading>
            <p>Apa Kamu Yakin Melakukan Pembatalan?</p>
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-secondary"
                className="me-2"
                onClick={handleCancelAlertClose}
              >
                No
              </Button>
              <Button variant="danger" onClick={handleConfirmCancel}>
                Yes, Cancel
              </Button>
            </div>
          </Alert>
        )}
      </div>
      <Button
        variant="link"
        style={{ textDecoration: "none", color: "red" }}
        onClick={handleCancel}
      >
        <ChevronLeft /> Batalkan
      </Button>
    </div>
  );
}

export default TombolBatal;
