import "./LoadSpinner.css";

export default function LoadSpinner() {
  return (
    <div
      data-testid="load-spinner"
      className="spinner-container"
      aria-label="Loading"
    >
      <div className="spinner" />
    </div>
  );
}
