import React from "react";
import Accept from "./Accept/Accept";
import Denied from "./Denied/Denied";
import s from "./Vote.module.css";

const Vote = (props) => {
    return (
            <div className={s.vote}>
                <div>
                    <Accept />
                </div>
                <div>
                    <Denied />
                </div>
            </div>
);
};

export default Vote;