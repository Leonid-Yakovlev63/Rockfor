import React from "react";
import Accept from "./Accept/Accept";
import Denied from "./Denied/Denied";
import s from "./Post.module.css";

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
            <div className={s.vote}>
                <div><Accept /></div>
                <div><Denied /></div>
            </div>
        </div>
    </div>
);
};

export default Post;