import React from 'react';
import { FaCss3Alt } from 'react-icons/fa';

const  Css = () => {
  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '50px 0',
    color: '#fff',
  };

  return (
    <div style={backgroundStyle}>
      <div className="container bg-dark bg-opacity-75 p-5 rounded shadow">
        <div className="text-center mb-4">
          <FaCss3Alt size={60} color="#264de4" />
          <h1 className="mt-3 text-white">About CSS (Cascading Style Sheets)</h1>
          <p className="lead text-light">
            CSS is the language used to style and visually format HTML content. It controls layout, colors, fonts, spacing, animations, and responsiveness.
          </p>
        </div>

        <div className="row text-light">
          <div className="col-md-6 mb-4">
            <h4>🌐 What CSS Does</h4>
            <ul>
              <li>Applies colors, fonts, and backgrounds</li>
              <li>Manages layout using Flexbox, Grid, etc.</li>
              <li>Handles responsiveness for different screens</li>
              <li>Enables transitions and animations</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h4>📚 How CSS Works</h4>
            <p>
              CSS works by selecting HTML elements and applying styles to them using rules written in a separate stylesheet or within the HTML document itself.
            </p>
            <p>
              It's based on a **selector → property → value** model.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-white">🧾 Sample CSS Code</h4>
          <pre className="bg-light text-dark p-3 rounded">
{`/* Style for the main heading */
h1 {
  color: #264de4;
  font-size: 2em;
  text-align: center;
}

/* Button style */
.button {
  background-color: #264de4;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Css;
