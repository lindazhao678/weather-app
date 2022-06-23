import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Day(props) {
  const { forecast } = props;
  return (
    <Card className="text-center">
      <div >
        <Card.Img src={forecast.day.condition.icon} style={{width:"auto"}}/>
      </div>
      <Card.Body>
        <Card.Title>{forecast.date}</Card.Title>
        <Card.Text>{forecast.day.condition.text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Max Temp: {forecast.day.maxtemp_c}</ListGroupItem>
        <ListGroupItem>Min Temp: {forecast.day.mintemp_c}</ListGroupItem>
        <ListGroupItem>UV: {forecast.day.uv}</ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default Day;
