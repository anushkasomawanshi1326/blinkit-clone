import React, { useState } from 'react';

export default function SimpleTest() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Type here');

  const handleClick = () => {
    setCount(count + 1);
    console.log('Button clicked! Count:', count + 1);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>✅ React Test Component</h2>
      
      <div style={styles.testBox}>
        <h3>Test 1: State & Events</h3>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={handleClick} style={styles.button}>
          Click Me
        </button>
      </div>

      <div style={styles.testBox}>
        <h3>Test 2: Input Handling</h3>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          style={styles.input}
          placeholder="Type something..."
        />
        <p>You typed: <strong>{text}</strong></p>
      </div>

      <div style={styles.testBox}>
        <h3>Test 3: Styling</h3>
        <div style={styles.colorBox}></div>
        <div style={styles.colorBox2}></div>
        <p>✅ CSS-in-JS is working</p>
      </div>

      <div style={styles.status}>
        {count > 0 ? '✅ All tests passed!' : 'Click the button to test'}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    maxWidth: '500px',
    margin: '50px auto',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  testBox: {
    backgroundColor: 'white',
    padding: '15px',
    margin: '15px 0',
    borderRadius: '8px',
    border: '1px solid #ddd'
  },
  button: {
    backgroundColor: '#0c831f',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  input: {
    padding: '8px',
    width: '100%',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  colorBox: {
    width: '50px',
    height: '50px',
    backgroundColor: '#0c831f',
    margin: '10px 0'
  },
  colorBox2: {
    width: '50px',
    height: '50px',
    backgroundColor: '#ff6b6b',
    margin: '10px 0'
  },
  status: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#e8f5e9',
    borderRadius: '5px',
    marginTop: '20px',
    fontWeight: 'bold'
  }
};