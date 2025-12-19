import React from "react";
function HelloMessage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello, React!</h1>
      <p style={styles.text}>This is a simple React functional component.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
    margin: "20px auto",
  },
  heading: {
    color: "#333",
  },
  text: {
    color: "#555",
  },
};

export default HelloMessage;
