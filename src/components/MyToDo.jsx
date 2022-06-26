import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function MyToDo(props) {
  const { todos, forecasts } = props;

  return (
    <Card className="text-center my-5">
      <Card.Title>Reminder for Today: {forecasts.length>0 && forecasts[0].date}</Card.Title>
      <ListGroup className="list-group-flush">
        {todos.map((todo) => (
          <ListGroupItem key={todo.toString()}>{todo}</ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
}

export default MyToDo;
