import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import { useLoaderData } from 'react-router-dom';
import MessageItem from '../ui/MessageItem';
import useMessages from '../../hooks/useMessages';
import Loader from '../hoc/Loader';
// import useLoaderMessages from '../../hooks/useLoaderMessages';

export default function HomePage() {
  // const data = useLoaderData();
  // const { messages, deleteHandler, isLoading } = useLoaderMessages(data);
  const { messages, deleteHandler, isLoading } = useMessages('/messages');
  return (
    <Loader isLoading={isLoading}>
      <Row>
        {messages.map((message) => (
          <Col xs={12} key={message.id}>
            <MessageItem message={message} deleteHandler={deleteHandler} />
          </Col>
        ))}
      </Row>
    </Loader>
  );
}
