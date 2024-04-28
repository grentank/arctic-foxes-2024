import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import MessageItem from '../ui/MessageItem';

export default function AccountPage() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // Загрузить только собственные
  }, []);
  return (
    <Row>
      {messages.map((message) => (
        <Col xs={12} key={message.id}>
          <MessageItem message={message} />
        </Col>
      ))}
    </Row>
  );
}
