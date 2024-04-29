import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import MessageItem from '../ui/MessageItem';
import AddMessageForm from '../ui/AddMessageForm';
import axiosInstance from '../../axiosInstance';

export default function AccountPage() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axiosInstance('/messages/my').then((res) => {
      setMessages(res.data);
    });
  }, []);

  const addMessageHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/messages', formData);
    setMessages((prev) => [res.data, ...prev]);
  };
  return (
    <>
      <Row>
        <Col xs={12}>
          <AddMessageForm addMessageHandler={addMessageHandler} />
        </Col>
      </Row>
      <Row>
        {messages.map((message) => (
          <Col xs={12} key={message.id}>
            <MessageItem message={message} />
          </Col>
        ))}
      </Row>
    </>
  );
}
