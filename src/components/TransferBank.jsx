export default function TransferBank({
  logo, label, value, pilihBayar, onKlik,
  
}) {
  return (
    <label
      htmlFor={value}
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 6fr 1fr",
        height: "3rem",
        border: "1px solid grey",
        margin: "0.5rem 0",
        padding: "0.5rem 0",
        borderRadius: "0.5rem",
      }}
    >
      <span className="d-flex justify-content-center align-items-center">
        <img
          src={logo}
          alt=""
          style={{
            objectFit: "contain",
            width: "100%",
            height: "50%",
          }}
        />
      </span>
      <span
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        {label}
      </span>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="radio"
          name="paymentOption"
          id={value}
          value={value}
          checked={pilihBayar === value}
          onChange={onKlik}
        />
      </span>
    </label>
  );
}
