import React from "react";

const commentsData = [
  {
    name: "Elon Musk",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    replies: [],
  },
  {
    name: "Elon Musk",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    replies: [
      {
        name: "Elon Musk",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        replies: [],
      },
      {
        name: "Elon Musk",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        replies: [
          {
            name: "Elon Musk",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            replies: [
              {
                name: "Elon Musk",
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                replies: [
                  {
                    name: "Elon Musk",
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    replies: [
                      {
                        name: "Elon Musk",
                        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Elon Musk",
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Elon Musk",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    replies: [],
  },
  {
    name: "Elon Musk",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    replies: [],
  },
  {
    name: "Elon Musk",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    replies: [],
  },
  {
    name: "Elon Musk",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    replies: [],
  },
  {
    name: "Elon Musk",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 shadow-sm rounded-md p-2 m-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://freesvg.org/img/abstract-user-flat-4.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
