export default function Gallery() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>📸 Salon Gallery</h1>

      <div style={styles.grid}>
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f" />
        <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e" />
        <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1" />
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    gap: "10px",
  },
};