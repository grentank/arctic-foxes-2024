import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function MessageItem({ message }) {
  return (
    <Card>
      <Card.Header>{message.User?.name}</Card.Header>
      <Card.Body>
        <Card.Title>{message.title}</Card.Title>
        <Card.Text>
          {message.body}
        </Card.Text>
        <Link to={`/messages/${message.id}`}>Read more</Link>
        <Button variant="primary">Info</Button>
      </Card.Body>
    </Card>
  );
}
