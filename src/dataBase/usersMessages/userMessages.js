'use strict'


class UserMessagesClass {
  list = {}
  add(id, userMessages) {
    this.list[id] = userMessages;
  }
}

const userMessages = new UserMessagesClass();


const tMessage = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, repudiandae! Corporis fugiat aspernatur assumenda consequatur, cum, ipsum temporibus doloremque quos error dolore eum veritatis? Distinctio similique tenetur modi maxime. Quod.`

const userMessagesWithDima = [
  {
    me: true,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },

]

const userMessagesWithRustam = [
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },

]

const userMessagesWithKamilya = [
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },

]

const userMessagesWithRuslan = [
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: true,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },
  {
    me: false,
    message: tMessage
  },

]

userMessages.add(1, userMessagesWithDima);
userMessages.add(2, userMessagesWithRustam);
userMessages.add(3, userMessagesWithKamilya);
userMessages.add(4, userMessagesWithRuslan);

export {userMessages}