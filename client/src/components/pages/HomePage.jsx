import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import MessageItem from '../ui/MessageItem';
import axiosInstance from '../../axiosInstance';

export default function HomePage() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axiosInstance('/messages').then((res) => {
      setMessages(res.data);
    });
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
