import React from "react";
import Icon from "./Icon";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";

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
        {"When"}
        <Select
          bgColor={"#F59E0B"}
          list={["space", "up arrow", "down arrow", "right arrow", "left arrow", "any", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']} />
        {"key pressed"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id={"second"}
        draggable
        onDragStart={(e) => onDragStart(e, "Events4")}
      >
        {"When backdrop switches to"}
        <Select
          bgColor={"#F59E0B"}
          list={["backdrop1"]}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id={"second"}
        draggable
        onDragStart={(e) => onDragStart(e, "Events5")}
      >
        {"When"}
        <Select
          bgColor={"#F59E0B"}
          list={["loudness", "timer"]}
        />
        {">"}
        <Input
          value={10}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id={"second"}
        draggable
        onDragStart={(e) => onDragStart(e, "Events6")}
      >
        {"When I receive "}
        <Select
          bgColor={"#F59E0B"}
          list={["message1", "New message"]}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id={"second"}
        draggable
        onDragStart={(e) => onDragStart(e, "Events7")}
      >
        {"broadcast "}
        <Select
          bgColor={"#F59E0B"}
          list={["message1", "New message"]}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id={"second"}
        draggable
        onDragStart={(e) => onDragStart(e, "Events8")}
      >
        {"broadcast"}
        <Select
          bgColor={"#F59E0B"}
          list={["message1", "New message"]}
        />
        {" and wait"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion1")}>
        {"Move"}
        <Input
          value={10}
        />
        {"steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion2")}>
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        <Input
          value={15}
        />
        {"degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion3")}>
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        <Input
          value={15}
        />
        {"degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion4")}>
        {"go to "}
        <Select
          bgColor={"blue"}
          list={["random position", "mouse-pointer"]}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion5")}>
        {"go to x:"}
        <Input
          value={0}
        />
        {"y:"}
        <Input
          value={0}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion6")}>
        {"glide "}
        <Input
          value={1}
        />
        {"secs to"}
        <Select
          bgColor={"blue"}
          list={["random position", "mouse-pointer"]}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion7")}>
        {"glide"}
        <Input
          value={1}
        />
        {"secs to x:"}
        <Input
          value={0}
        />
        {"y:"}
        <Input
          value={0}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion8")}>
        {"point in direction "}
        <Input
          value={90}
        />
      </div><div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion9")}>
        {"point towards"}
        <Select
          bgColor={"blue"}
          list={["mouse-pointer"]}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion10")}>
        {"change x by "}
        <Input
          value={10}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion11")}>
        {"set x to "}
        <Input
          value={0}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion12")}>
        {"change y by "}
        <Input
          value={10}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion13")}>
        {"set y to "}
        <Input
          value={0}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion14")}>
        {"if on edge, bounce"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion15")}>
        <Checkbox type={"checkbox"} />
        {"x position"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion16")}>
        <Checkbox type={"checkbox"} />
        {"y postion"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Motion17")}>
        <Checkbox type={"checkbox"} />
        {"direction"}
      </div>
      <div className="font-bold"> {"Looks"} </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks1")}
      >
        {"say"}
        <Input
          value={"Hello!"}
        />
        {"for"}
        <Input
          value={2}
        />
        {"seconds"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks2")}
      >
        {"say "}

      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks3")}
      >
        {"think"}
        <Input
          value={"Hmm...!"}
        />
        {"for"}
        <Input
          value={2}
        />
        {"seconds"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks4")}
      >
        {"think "}
        <Input
          value={"Hmm...!"}
        />
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks5")}
      >
        {"switch costume to "}
        <Select
          bgColor={"purple"}
          list={["costume-2", "costume-1"]}
        />
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
        {"switch backdrop to "}
        <Select
          bgColor={"purple"}
          list={["backdrop1", "next backdrop", "previous backdrop", "random backdrop"]}
        />
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
        {"change size by "}
        <Input value={10} />
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks10")}
      >
        {"set size to"}
        <Input value={100} />
        {"%"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks11")}
      >
        {"change"}
        <Select bgColor={"purple"}
          list={["color", "fisheye", "whirl", "pixelate", "mosaic", "birghtness", "ghost"]} />
        {"effect by "}
        <Input value={25} />
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks12")}
      >
        {"set "}
        <Select bgColor={"purple"}
          list={["color", "fisheye", "whirl", "pixelate", "mosaic", "birghtness", "ghost"]} />
        {"effect to "}
        <Input value={0} />
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
        {"go to"}
        <Select bgColor={"purple"}
          list={["front", "back"]} />
        {"layer"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks17")}
      >
        {"go"}
        <Select bgColor={"purple"}
          list={["forward", "backward"]} />
        <Input value={1} />
        {" layers"}
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks18")}
      >
        <Checkbox type={"checkbox"}/>
        {"costume "}
        <Select bgColor={"purple"}
          list={["number", "name"]} />
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks19")}
      >
        <Checkbox type={"checkbox"}/>
        {"backdrop "}
        <Select bgColor={"purple"}
          list={["number", "name"]} />
      </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Looks20")}
      >
        <Checkbox type={"checkbox"}/>
        {"size"}
      </div>
      <div className="font-bold"> {"Control"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control1")}
      >
        {"wait"}
        <Input value={1} />
        {"seconds"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => onDragStart(e, "Control2")}
      >
        {"repeat "}
        <Input value={10} />
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
        {"stop "}
        <Select bgColor={"orange"}
          list={["all", "this script", "other scripts in sprite"]} />
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
        {"create clone of "}
        <Select bgColor={"orange"}
          list={["myself"]} />
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
