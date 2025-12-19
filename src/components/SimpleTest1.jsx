import React from 'react';

function Test() {
  return (
    <div style={styles.container}>
      <h2>Test Component</h2>
      <p>This component is working correctly.</p>
      <div style={styles.status}>
        Status: Active
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    margin: '20px',
    borderRadius: '5px'
  },
  status: {
    color: 'green',
    marginTop: '10px'
  }
};

export default Test;