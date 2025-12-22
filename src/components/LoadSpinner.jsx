// src/components/LoadingSpinner.jsx
const LoadingSpinner = ({ size = 'medium', color = '#3b82f6', text = 'Loading...' }) => {
  const sizeMap = {
    small: { width: '32px', height: '32px', borderWidth: '3px' },
    medium: { width: '48px', height: '48px', borderWidth: '4px' },
    large: { width: '64px', height: '64px', borderWidth: '5px' }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    },
    spinner: {
      borderStyle: 'solid',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      borderColor: `${color} transparent transparent transparent`,
      ...sizeMap[size]
    },
    text: {
      marginTop: '1rem',
      color: '#666',
      fontSize: '0.9rem'
    },
    keyframes: `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.container}>
        <div style={styles.spinner} />
        {text && <p style={styles.text}>{text}</p>}
      </div>
    </>
  );
};

export default LoadingSpinner;