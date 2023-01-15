import React from "react";
import s from "./Accept.module.css";

const Accept = (props) => {
    return (
    <div className={s.componentWrapper}>
        <button className={s.Accept}>
            ✔
        </button>
    </div>
);
};

export default Accept;