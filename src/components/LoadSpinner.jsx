// src/components/LoadingSpinner.jsx
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = '#3b82f6', text = 'Loading...' }) => {
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className="loading-container">
      <div 
        className={`spinner ${sizeMap[size]}`}
        style={{
          borderColor: `${color} transparent transparent transparent`
        }}
      />
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;