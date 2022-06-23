import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Day from "../components/Day";
import MyToDo from "../components/MyToDo";
import axios from 'axios'

function Weather() {
  const [forecasts, setForecasts] = useState([]);
  const [todos, setTodos] = useState([]);
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
    axios
      .get("https://melbourne-weather-app-api.herokuapp.com/")
      .then((response) => {
        setForecasts(response.data.forecast.forecastday);
        handleTodos(response.data.forecast.forecastday[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
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
