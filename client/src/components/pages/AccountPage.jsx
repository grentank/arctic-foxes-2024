import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import MessageItem from '../ui/MessageItem';
import AddMessageForm from '../ui/AddMessageForm';
import axiosInstance from '../../axiosInstance';
import Loader from '../hoc/Loader';

export default function AccountPage({ user }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosInstance('/messages/my').then((res) => {
      setMessages(res.data);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  const addMessageHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/messages', formData);
    setMessages((prev) => [res.data, ...prev]);
  };

  const deleteHandler = async (messageId) => {
    const res = await axiosInstance.delete(`/messages/${messageId}`);
    if (res.status === 204) {
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    }
  };
  return (
    <>
      <Row>
        <Col xs={12}>
          <AddMessageForm addMessageHandler={addMessageHandler} />
        </Col>
      </Row>
      <Loader isLoading={isLoading}>
        <Row>
          {messages.map((message) => (
            <Col xs={12} key={message.id}>
              <MessageItem user={user} message={message} deleteHandler={deleteHandler} />
            </Col>
          ))}
        </Row>
      </Loader>
    </>
  );
}
