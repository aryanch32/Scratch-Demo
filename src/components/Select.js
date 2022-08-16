import React from "react";

export default function Select(props) {

    const mapList = (i) => {
        return (
            <option>
                {i}
            </option>
        )
    }

    return (
        <>
            <select style={{ marginLeft: "5%", marginRight: "5%", color: "white", background: props.bgColor, borderRadius: "10px", borderColor: "grey", borderWidth: "1px" }}>
                {props.list.map((i) => mapList(i))}
            </select>
            {/* {props.list.map((i) => mapList(i))} */}
        </>
    )
}