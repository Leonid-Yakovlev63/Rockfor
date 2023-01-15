import React from "react";
import s from "./Post.module.css";
import Vote from "./Vote/Vote";

const Post = (props) => {
    return (
    <div className={s.componentWrapper}>
        <div className={s.postWrapper}>
            <div className={s.userName}>
                <h4>{props.userName}</h4>
            </div>
            <div className={s.title}>
                <h5>{props.title}</h5>
            </div>
            <div className={s.content}>
                {props.content}
            </div>
            <Vote />
        </div>
    </div>
);
};

export default Post;