import React from 'react';

export default function Looks(props) {

    return (
        <>
            <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {props.text}
            </div>
        </>
    )
}