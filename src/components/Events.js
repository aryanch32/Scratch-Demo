import React from 'react';
import processPlugins from 'tailwindcss/lib/util/processPlugins';
import Icon from "./Icon";

export default function Events(props) {

    return (
        <>
            <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                // id={"first"}
                // draggable
                // onDragStart={(e) => onDragStart(e)}
            >
                {props.text}
            </div>
        </>
    )
}