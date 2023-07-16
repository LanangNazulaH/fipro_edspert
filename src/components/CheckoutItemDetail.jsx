import cardimg1 from "../assets/konten.png";

export default function CheckoutItemDetail() {
  return (
    <div
      style={{
        width: "35rem",
        height: "7.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "start",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img src={cardimg1} alt="" width={75} style={{ objectFit: "cover" }} />
      </div>

      <div style={{ display: "grid", gridAutoRows: "1fr 1fr", gap: "0.5rem" }}>
        <div>
          <h4 style={{ fontSize: "14pt", fontWeight: "bold", margin: 0 }}>
            Programming Laravel
          </h4>
          <h5 style={{ fontSize: "12pt", fontWeight: "bold", margin: 0 }}>
            Getting Started with Laravel 9
          </h5>
        </div>
        <div>
          <table style={{ fontSize: "8pt", margin: 0 }}>
            <tbody>
              <tr>
                <td style={{ color: "grey", paddingRight: "0.5rem" }}>Batch</td>
                <td>September 2022</td>
              </tr>
              <tr>
                <td style={{ color: "grey", paddingRight: "0.5rem" }}>
                  Mentor
                </td>
                <td>William Hartono, Farel Prayoga</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
