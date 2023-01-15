import React from "react";
import s from "./Denied.module.css";

const Denied = (props) => {
    return (
    <div className={s.componentWrapper}>
        <button className={s.Denied}>
            ✘
        </button>
    </div>
);
};

export default Denied;