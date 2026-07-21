export default function Blog() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>💄 Beauty Blog</h1>

      <div style={styles.card}>
        <h3>Hair Trends 2026</h3>
        <p>Latest salon styles you must try...</p>
      </div>

      <div style={styles.card}>
        <h3>Skin Care Tips</h3>
        <p>How to maintain glowing skin...</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    marginTop: "10px",
    border: "1px solid #ddd",
  },
};