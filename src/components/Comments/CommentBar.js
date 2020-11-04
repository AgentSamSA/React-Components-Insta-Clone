import React, { useState } from "react";
import Comments from "./Comments";

const CommentBar = (props) => {
    const { postId, comments } = props;
    const [comment, setComment] = useState(comments);

    const commentOnPostOnEnterKey = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const latestComment = comment[(comment.length - 1)];

            const guestComment = {
                ...latestComment,
                id: latestComment.id + 1,
                username: "guest",
                text: event.target.value,
            };
            setComment([...comment, guestComment]);
            event.target.value = "";
        } else {
            setComment(comment);
        }
    };
    return (
        <>
            <Comments comments={comment} />
            <div className="search-bar-wrapper">
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="Write a comment"
                        style={{ textAlign: "center" }}
                        onKeyDown={event => commentOnPostOnEnterKey(event, postId)}
                    />
                </form>
            </div>
        </>
    );
};
export default CommentBar;