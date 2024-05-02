const express = require('express');
const { Message, User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const checkAuthor = require('../middlewares/checkAuthor');

const messagesRouter = express.Router();

messagesRouter.route('/').get(async (req, res) => {
  const messages = await Message.findAll({
    include: [User],
  });
  res.json(messages);
}).post(verifyAccessToken, async (req, res) => {
  console.log(req.body);
  console.log(res.locals.user.id);
  const newMessage = await Message.create({ ...req.body, userId: res.locals.user.id });
  console.log(newMessage);
  const msgWithUser = await Message.findByPk(newMessage.id, { include: [User] });
  res.json(msgWithUser);
});

messagesRouter.get('/my', verifyAccessToken, async (req, res) => {
  const myMessages = await Message.findAll({
    where: { userId: res.locals.user.id },
    include: User,
  });
  res.json(myMessages);
});

messagesRouter.route('/:id')
  .get(async (req, res) => {
    const message = await Message.findByPk(req.params.id, {
      include: [User],
    });
    res.json(message);
  })
  .delete(verifyAccessToken, checkAuthor, async (req, res) => {
    await Message.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  })
  .patch(verifyAccessToken, checkAuthor, async (req, res) => {
    const message = await Message.findByPk(req.params.id);
    await message.update(req.body);
    res.json(message);
  });

module.exports = messagesRouter;
