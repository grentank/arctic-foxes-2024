import { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

export default function useMessages(messagesUrl) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosInstance(messagesUrl).then((res) => {
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

  return {
    messages, isLoading, deleteHandler, addMessageHandler,
  };
}
