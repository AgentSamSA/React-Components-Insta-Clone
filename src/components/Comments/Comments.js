import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  const makeComment = event => {
    if (event.key === "Enter") {
      comments.push(
        {
          id: comments[comments.length - 1].id + 1,
          username: "guest",
          text: event.target.value, //comments.text will be what is inside the input field when "Enter" is pressed
        });
      event.target.value = ""; //resets the field after hitting enter to submit a comment
      console.log(comments); //checking the status of the comments array
    }
  }

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => {

        return (
          <Comment
            key={comment.id}
            comment={comment}
          />
        )
      })}
      <input
        type="text"
        placeholder="Write a comment"
        style={{ textAlign: "center" }}
        id="comment-box"
        onKeyDown={makeComment}
      />
    </div >
  );
};

export default Comments;
