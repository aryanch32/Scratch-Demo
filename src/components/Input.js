import React from "react";

export default function Input(props) {

    return (
        <>
            <input value={props.value}
                style={{ width: "16%", marginLeft: "5%", marginRight: "5%", borderRadius: "10px", color: "black", textAlign: "center" }}>
            </input>
        </>
    )
}