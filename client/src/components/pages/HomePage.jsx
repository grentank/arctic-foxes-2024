import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import MessageItem from '../ui/MessageItem';
import axiosInstance from '../../axiosInstance';

export default function HomePage({ user }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axiosInstance('/messages').then((res) => {
      setMessages(res.data);
    });
  }, []);
  const deleteHandler = async (messageId) => {
    const res = await axiosInstance.delete(`/messages/${messageId}`);
    if (res.status === 204) {
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    }
  };
  return (
    <Row>
      {messages.map((message) => (
        <Col xs={12} key={message.id}>
          <MessageItem user={user} message={message} deleteHandler={deleteHandler} />
        </Col>
      ))}
    </Row>
  );
}
