import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Day from "../components/Day";
import MyToDo from "../components/MyToDo";
import axios from 'axios';
import Spinner from "react-bootstrap/Spinner";

function Weather() {
  const [forecasts, setForecasts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleTodos(current) {
    let myTodos = [];
    if (current.day.uv >= 5) {
      myTodos.push("Apply suncream");
    }
    if (current.day.avgtemp_c < 15) {
      myTodos.push("Wear jacket");
    }
    if (current.day.daily_chance_of_rain > 5) {
      myTodos.push("Bring umbrella");
    }
    if (myTodos.length === 0) {
      myTodos.push("Nothing in the list");
    }
    setTodos(myTodos);
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://melbourne-weather-app-api.herokuapp.com/")
      .then((response) => {
        setLoading(false);
        setForecasts(response.data.forecast.forecastday);
        handleTodos(response.data.forecast.forecastday[0]);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {loading && (
          <div className="text-center pt-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      <Row>
        <MyToDo todos={todos} forecasts={forecasts} />
        {forecasts.map((forecast, index) => (
          <Col key={index}>
            <Day forecast={forecast}></Day>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Weather;
