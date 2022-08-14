import React from "react";
import processPlugins from "tailwindcss/lib/util/processPlugins";
import Icon from "./Icon";

export default function Sidebar(props) {

  const onDragStart = (ev, name) => {
    // console.log('dragstart:', id);
    // ev.dataTransfer.setData("id", id);
    props.onDragStart(ev, name);
  }

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id={"first"}
        draggable
        onDragStart={(e) => onDragStart(e, "Events1")}
      >
        {"When"}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id={"second"}
        draggable
        onDragStart={(e) => onDragStart(e, "Events2")}
      >
        {"When this sprite clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id={"second"}
        draggable
        onDragStart={(e) => onDragStart(e, "Events3")}
      >
        {"When space key pressed"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      id={"second"}
      draggable
      onDragStart={(e) => onDragStart(e, "Events4")}
      >
        {"When backdrop switches to backdrop1"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      id={"second"}
      draggable
      onDragStart={(e) => onDragStart(e, "Events5")}
      >
        {"When loudness > 10"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      id={"second"}
      draggable
      onDragStart={(e) => onDragStart(e, "Events6")}
      >
        {"When I receive message1"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      id={"second"}
      draggable
      onDragStart={(e) => onDragStart(e, "Events7")}
      >
        {"broadcast message1"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      id={"second"}
      draggable
      onDragStart={(e) => onDragStart(e, "Events8")}
      >
        {"broadcast message1 and wait"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion1")}>
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion2")}>
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion3")}>
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion4")}>
        {"go to random position"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion5")}>
        {"go to x:10 y:10"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion6")}>
        {"glide 1 secs to random position"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion7")}>
        {"glide 1 secs to x:10 y:10"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion8")}>
        {"point in direction 90"}
      </div><div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion9")}>
        {"point towards mouse pointer"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion10")}>
        {"change x by 0"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion11")}>
        {"set x to 0"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion12")}>
        {"change y by 0"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion13")}>
        {"set y to 0"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion14")}>
        {"if on edge bounce"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion15")}>
        {"x position"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion16")}>
        {"y postion"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion17")}>
        {"direction"}
      </div>
      <div className="font-bold"> {"Looks"} </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks1")}
      >
        {"say Hello for 2 seconds"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks2")}
      >
        {"say Hello"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks3")}
      >
        {"think Hmm... for 2 seconds"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks4")}
      >
        {"think Hmm..."}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks5")}
      >
        {"switch costume to costume2"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks6")}
      >
        {"next costume"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks7")}
      >
        {"switch backdrop to backdrop1"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks8")}
      >
        {"next backdrop"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks9")}
      >
        {"change size by 10"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks10")}
      >
        {"set size to 100%"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks11")}
      >
        {"change color effect by 25"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks12")}
      >
        {"set color effect to 0"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks13")}
      >
        {"clear graphic effects"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks14")}
      >
        {"show"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks15")}
      >
        {"hide"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks16")}
      >
        {"go to front layer"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks17")}
      >
        {"go forward 1 layers"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks18")}
      >
        {"costume number"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks19")}
      >
        {"backdrop number"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks20")}
      >
        {"size"}
      </div>
      <div className="font-bold"> {"Control"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control1")}
      >
        {"wait 1 seconds"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control2")}
      >
        {"repeat 10"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control3")}
      >
        {"forever"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control4")}
      >
        {"if then"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control5")}
      >
        {"if then else"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control6")}
      >
        {"wait until"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control7")}
      >
        {"repeat until"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control8")}
      >
        {"stop all"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control9")}
      >
        {"when I start as a clone"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control10")}
      >
        {"create clone of myself"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control11")}
      >
        {"delete this clone"}
      </div>
    </div>
  );
}
