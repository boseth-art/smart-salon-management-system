import { useState } from "react";

export default function CookieConsent() {
  const [showCookieBox, setShowCookieBox] = useState(() => {
    const cookieChoice = localStorage.getItem("cookieChoice");
    return cookieChoice ? false : true;
  });

  function handleAccept() {
    localStorage.setItem("cookieChoice", "accepted");
    setShowCookieBox(false);
  }

  function handleDecline() {
    localStorage.setItem("cookieChoice", "declined");
    setShowCookieBox(false);
  }

  if (!showCookieBox) {
    return null;
  }

  return (
    <div style={styles.cookieBox}>
      <div style={styles.textBox}>
        <h3>🍪 This website uses cookies</h3>

        <p>
          We use cookies to improve your browsing experience, remember your
          preferences and support salon booking features.
        </p>
      </div>

      <div style={styles.buttonBox}>
        <button onClick={handleAccept} style={styles.acceptBtn}>
          Accept
        </button>

        <button onClick={handleDecline} style={styles.declineBtn}>
          Decline
        </button>
      </div>
    </div>
  );
}

const styles = {
  cookieBox: {
    position: "fixed",
    left: "25px",
    right: "25px",
    bottom: "25px",
    zIndex: 9999,
    padding: "22px",
    background: "#111",
    color: "white",
    borderRadius: "14px",
    boxShadow: "0 6px 25px rgba(0,0,0,0.35)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  textBox: {
    maxWidth: "800px",
  },

  buttonBox: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  acceptBtn: {
    padding: "11px 20px",
    background: "#c59d5f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  declineBtn: {
    padding: "11px 20px",
    background: "white",
    color: "#111",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};