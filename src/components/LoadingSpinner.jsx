// src/components/LoadingSpinner.jsx

const LoadingSpinner = ({
  size = "medium",
  color = "#3b82f6",
  text = "Loading...",
}) => {
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        data-testid="spinner"
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
          border: "4px solid",
          borderColor: `${color} transparent transparent transparent`,
          borderRadius: "50%",
          margin: "auto",
        }}
      />

      {text && <p>{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
