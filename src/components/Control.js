import React from 'react';

export default function Control(props) {
    return (
        <>
            <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={props.onClick}>
                {props.text}
            </div>
        </>
    )
}