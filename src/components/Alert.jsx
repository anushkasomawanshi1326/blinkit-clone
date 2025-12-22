// src/components/Alert.jsx

const Alert = ({ type = "info", message }) => {
  const colors = {
    info: "#2563eb",
    success: "#16a34a",
    error: "#dc2626",
  };

  return (
    <div
      data-testid="alert"
      style={{
        padding: "12px",
        borderRadius: "6px",
        color: "white",
        backgroundColor: colors[type],
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
