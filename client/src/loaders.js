import axiosInstance from './axiosInstance';

export async function getAllMessages() {
  const res = await axiosInstance('/messages');
  return res.data;
}

export async function getMyMessages() {
  const res = await axiosInstance('/messages/my');
  return res.data;
}

export async function getMessagesByUrl(messagesUrl) {
  const res = await axiosInstance(messagesUrl);
  return res.data;
}
