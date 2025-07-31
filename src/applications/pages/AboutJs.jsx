import React from 'react';
import { FaJs } from 'react-icons/fa';

const AboutJs = () => {
  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1600&q=80')",
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
          <FaJs size={60} color="#f7df1e" />
          <h1 className="mt-3 text-white">About JavaScript</h1>
          <p className="lead text-light">
            JavaScript is the language of the web. It enables dynamic behavior, interactivity, and logic in web applications.
          </p>
        </div>

        <div className="row text-light">
          <div className="col-md-6 mb-4">
            <h4>⚙️ What JavaScript Does</h4>
            <ul>
              <li>Makes web pages interactive (e.g., buttons, forms)</li>
              <li>Manipulates HTML/CSS in real time (DOM)</li>
              <li>Handles logic and decision-making</li>
              <li>Communicates with servers (APIs, AJAX)</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h4>📚 How JavaScript Works</h4>
            <p>
              JavaScript runs inside the browser and interacts with HTML and CSS. It's event-driven, meaning it reacts to things like clicks, scrolls, and form submissions.
            </p>
            <p>
              It can also be used server-side with environments like Node.js.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-white">🧾 Sample JavaScript Code</h4>
          <pre className="bg-light text-dark p-3 rounded">
{`// Greet user when button is clicked
function greet() {
  alert("Hello from JavaScript!");
}

// Add event listener to a button
document.getElementById("myBtn").addEventListener("click", greet);`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AboutJs;
