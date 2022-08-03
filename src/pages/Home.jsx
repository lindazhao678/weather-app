import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='main'>
    <Container>
      <div id="hero-section" className="py-5">
        <h1>Welcome to Melbourne Weather App</h1>
        <p className="py-5 my-5">
          Keep up to date with forecasts across Melbourne to make sure you
          always well prepared for the weather changing!
        </p>
        <Link className="btn btn-info my-4" to="/weather">
          Weather
        </Link>
      </div>
    </Container>
    </div>
  );
}

export default Home;
