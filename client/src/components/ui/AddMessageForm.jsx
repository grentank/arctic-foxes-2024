import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddMessageForm({ addMessageHandler }) {
  return (
    <Form onSubmit={addMessageHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Message title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Body</Form.Label>
        <Form.Control name="body" type="text" placeholder="Message body" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
