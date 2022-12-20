const message = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis minus harum nisi quas quos. Ratione impedit quos laboriosam vitae veritatis ducimus, fugit dignissimos quo labore iste est possimus optio. Laborum.'

const time = Date.now();

export const userPosts = [
  {
    messageID: 1,
    userID: 1,
    message: message,
    time : time,
    rating : {
        likes : 5,
        dislikes : 1,
    }
  },
  {
    messageID: 2,
    userID: 3,
    message: message,
    time : time,
    rating : {
        likes : 5,
        dislikes : 1,
    }
  },
  {
    messageID: 3,
    userID: 2,
    message: message,
    time : time,
    rating : {
        likes : 5,
        dislikes : 1,
    }
  },
  {
    messageID: 4,
    userID: 1,
    message: message,
    time : time,
    rating : {
        likes : 5,
        dislikes : 1,
    }
  },
  {
    messageID: 5,
    userID: 2,
    message: message,
    time : time,
    rating : {
        likes : 5,
        dislikes : 1,
    }
  },
]

// export default userPosts