import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Devesh Mishra",
    text: "Lorem ipsum dolor sit amet, ................",
    replies: [],
  },
  {
    name: "Devesh Mishra",
    text: "Lorem ipsum dolor sit amet, ................",
    replies: [
      {
        name: "Devesh Mishra",
        text: "Lorem ipsum dolor sit amet, ................",
        replies: [],
      },
      {
        name: "Devesh Mishra",
        text: "Lorem ipsum dolor sit amet, ................",
        replies: [
          {
            name: "Devesh Mishra",
            text: "Lorem ipsum dolor sit amet, ................",
            replies: [
              {
                name: "Devesh Mishra",
                text: "Lorem ipsum dolor sit amet, ................",
                replies: [
                  {
                    name: "Devesh Mishra",
                    text: "Lorem ipsum dolor sit amet, ................",
                    replies: [
                      {
                        name: "Devesh Mishra",
                        text: "Lorem ipsum dolor sit amet, ................",
                        replies: [
                          {
                            name: "Devesh Mishra",
                            text: "Lorem ipsum dolor sit amet, ................",
                            replies: [
                              {
                                name: "Devesh Mishra",
                                text: "Lorem ipsum dolor sit amet, ................",
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
            ],
          },
          {
            name: "Devesh Mishra",
            text: "Lorem ipsum dolor sit amet, ................",
            replies: [],
          },
        ],
      },
      {
        name: "Devesh Mishra",
        text: "Lorem ipsum dolor sit amet, ................",
        replies: [],
      },
    ],
  },
  {
    name: "Devesh Mishra",
    text: "Lorem ipsum dolor sit amet, ................",
    replies: [],
  },
  {
    name: "Devesh Mishra",
    text: "Lorem ipsum dolor sit amet, ................",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
