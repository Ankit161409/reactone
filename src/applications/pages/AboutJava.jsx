import React from 'react';
import { FaJava } from 'react-icons/fa';

const AboutJava = () => {
  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
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
          <FaJava size={60} color="#007396" />
          <h1 className="mt-3 text-white">About Java</h1>
          <p className="lead text-light">
            Java is a powerful, object-oriented programming language widely used for building cross-platform applications, from desktop to mobile and enterprise software.
          </p>
        </div>

        <div className="row text-light">
          <div className="col-md-6 mb-4">
            <h4>☕ What Java Does</h4>
            <ul>
              <li>Runs on billions of devices worldwide</li>
              <li>Used for Android apps, web apps, and large systems</li>
              <li>Platform-independent via the JVM (Java Virtual Machine)</li>
              <li>Strongly typed and object-oriented</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h4>📚 How Java Works</h4>
            <p>
              Java code is compiled into bytecode, which runs on the JVM — enabling the same program to run on any device with a JVM installed.
            </p>
            <p>
              It supports rich libraries and frameworks that speed up development.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-white">🧾 Sample Java Code</h4>
          <pre className="bg-light text-dark p-3 rounded">
{`// Simple Java program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AboutJava;
