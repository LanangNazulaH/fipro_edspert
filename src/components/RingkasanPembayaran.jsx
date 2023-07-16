export default function RingkasanPembayaran() {
  return (
    <div className="d-grid" style={{ width: "35rem", gap: "0.5rem" }}>
      <div className="fw-bold">Ringkasan Pembayaran</div>
      <div className="d-flex justify-content-between">
        <span>Harga Kelas</span>
        <span>Rp 700.000</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>Potongan</span>
        <span>- Rp 200.000</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>Promo</span>
        <span>-</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>Kode Unik</span>
        <span>- Rp 100.000</span>
      </div>
      <div
        className="d-flex justify-content-between fw-semibold"
        style={{ borderTop: "1px solid grey" }}
      >
        <span>Total Pembayaran</span>
        <span>Rp 400.000</span>
      </div>
    </div>
  );
}
