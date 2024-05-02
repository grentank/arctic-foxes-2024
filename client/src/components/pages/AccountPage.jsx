import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import { useLoaderData } from 'react-router-dom';
import MessageItem from '../ui/MessageItem';
import AddMessageForm from '../ui/AddMessageForm';
import Loader from '../hoc/Loader';
import useMessages from '../../hooks/useMessages';
// import useLoaderMessages from '../../hooks/useLoaderMessages';

export default function AccountPage() {
  // const data = useLoaderData();
  const {
    messages, isLoading, addMessageHandler, deleteHandler,
  } = useMessages('/messages/my');// useLoaderMessages(data);
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
              <MessageItem message={message} deleteHandler={deleteHandler} />
            </Col>
          ))}
        </Row>
      </Loader>
    </>
  );
}
