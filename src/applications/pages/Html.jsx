import React from 'react';
import { FaHtml5, FaCode, FaCheckCircle } from 'react-icons/fa';

const Html  = () => {
  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingTop: "50px",
    paddingBottom: "50px",
    color: "#fff",
    backdropFilter: "brightness(0.85)",
  };

  return (
    <div style={backgroundStyle}>
      <div className="container bg-dark bg-opacity-75 p-5 rounded shadow">
        <div className="text-center mb-5">
          <FaHtml5 size={70} color="#e34c26" />
          <h1 className="mt-3 text-white">Introduction to HTML</h1>
          <p className="lead text-light">Learn the building blocks of the web</p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h3><FaCode className="me-2" />What is HTML?</h3>
            <p>
              HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It defines the structure of content by using elements such as headings, paragraphs, images, links, and more.
            </p>
            <p>
              Every web page you see is built on HTML, making it the backbone of the web. It works in harmony with CSS (for styling) and JavaScript (for interactivity).
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <h3><FaCheckCircle className="me-2 text-success" />Why Learn HTML?</h3>
            <ul>
              <li>To understand how websites are built</li>
              <li>To create basic web pages and content</li>
              <li>To support roles in content editing, email templates, and more</li>
              <li>It's the first step into web development</li>
            </ul>
          </div>
        </div>

        <div className="mt-5">
          <h4>🧾 Basic HTML Structure</h4>
          <pre className="bg-light text-dark p-3 rounded">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to RCFE HTML Training</h1>
    <p>This is a simple web page using HTML.</p>
  </body>
</html>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Html ;
