import React from 'react';
import processPlugins from 'tailwindcss/lib/util/processPlugins';

export default function Motion(props) {

    return (
        <>
            <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                onClick={props.onClick}>
                {props.text}
            </div>
        </>
    )
}