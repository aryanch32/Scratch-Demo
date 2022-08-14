import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Icon from "./components/Icon";

const icon = <Icon name="flag" size={15} className="text-green-600 mx-2" />;

export default function App() {
  const [tasks, setTasks] = React.useState([
    { name: "Events1", text: `When clicked`, currentScreen: "drag", type: "events" },
    { name: "Events2", text: "When this sprite clicked", currentScreen: "drag", type: "events" },
    { name: "Events3", text: "When space key pressed", currentScreen: "drag", type: "events" },
    { name: "Events4", text: "When backdrop switches to backdrop1", currentScreen: "drag", type: "events" },
    { name: "Events5", text: "When loudness > 10", currentScreen: "drag", type: "events" },
    { name: "Events6", text: "When I receive message1", currentScreen: "drag", type: "events" },
    { name: "Events7", text: "broadcast message1", currentScreen: "drag", type: "events" },
    { name: "Events8", text: "broadcast message1 and wait", currentScreen: "drag", type: "events" },

    { name: "Motion1", text: "Move 10 Steps", currentScreen: "drag", type: "motion" },
    { name: "Motion2", text: "Turn 15 degrees", currentScreen: "drag", type: "motion" },
    { name: "Motion3", text: "Turn 15 degrees", currentScreen: "drag", type: "motion" },
    { name: "Motion4", text: "go to random position", currentScreen: "drag", type: "motion" },
    { name: "Motion5", text: "go to x:10 y:10", currentScreen: "drag", type: "motion" },
    { name: "Motion6", text: "glide 1 secs to random position", currentScreen: "drag", type: "motion" },
    { name: "Motion7", text: "glide 1 secs to x:10 y:10", currentScreen: "drag", type: "motion" },
    { name: "Motion8", text: "point in direction 90", currentScreen: "drag", type: "motion" },
    { name: "Motion9", text: "point towards mouse pointer", currentScreen: "drag", type: "motion" },
    { name: "Motion10", text: "change x by 0", currentScreen: "drag", type: "motion" },
    { name: "Motion11", text: "set x to 0", currentScreen: "drag", type: "motion" },
    { name: "Motion12", text: "change y by 0", currentScreen: "drag", type: "motion" },
    { name: "Motion13", text: "set y to 0", currentScreen: "drag", type: "motion" },
    { name: "Motion14", text: "if on edge bounce", currentScreen: "drag", type: "motion" },
    { name: "Motion15", text: "x position", currentScreen: "drag", type: "motion" },
    { name: "Motion16", text: "y position", currentScreen: "drag", type: "motion" },
    { name: "Motion17", text: "direction", currentScreen: "drag", type: "motion" },

    { name: "Looks1", text: "say Hello for 2 seconds", currentScreen: "drag", type: "looks" },
    { name: "Looks2", text: "say Hello", currentScreen: "drag", type: "looks" },
    { name: "Looks3", text: "think Hmm... for 2 seconds", currentScreen: "drag", type: "looks" },
    { name: "Looks4", text: "think Hmm...", currentScreen: "drag", type: "looks" },
    { name: "Looks5", text: "switch costume to costume2", currentScreen: "drag", type: "looks" },
    { name: "Looks6", text: "next costume", currentScreen: "drag", type: "looks" },
    { name: "Looks7", text: "switch backdrop to backdrop1", currentScreen: "drag", type: "looks" },
    { name: "Looks8", text: "next backdrop", currentScreen: "drag", type: "looks" },
    { name: "Looks9", text: "change size by 10", currentScreen: "drag", type: "looks" },
    { name: "Looks10", text: "set size to 100%", currentScreen: "drag", type: "looks" },
    { name: "Looks11", text: "change color effect by 25", currentScreen: "drag", type: "looks" },
    { name: "Looks12", text: "set color effect to 0", currentScreen: "drag", type: "looks" },
    { name: "Looks13", text: "clear graphic effects", currentScreen: "drag", type: "looks" },
    { name: "Looks14", text: "show", currentScreen: "drag", type: "looks" },
    { name: "Looks15", text: "hide", currentScreen: "drag", type: "looks" },
    { name: "Looks16", text: "go to front layer", currentScreen: "drag", type: "looks" },
    { name: "Looks17", text: "go forward 1 layers", currentScreen: "drag", type: "looks" },
    { name: "Looks18", text: "costume number", currentScreen: "drag", type: "looks" },
    { name: "Looks19", text: "backdrop number", currentScreen: "drag", type: "looks" },
    { name: "Looks20", text: "size", currentScreen: "drag", type: "looks" },

    { name: "Control1", text: "wait 1 seconds", currentScreen: "drag", type: "control" },
    { name: "Control2", text: "repeat 10", currentScreen: "drag", type: "control" },
    { name: "Control3", text: "forever", currentScreen: "drag", type: "control" },
    { name: "Control4", text: "if then", currentScreen: "drag", type: "control" },
    { name: "Control5", text: "if then else", currentScreen: "drag", type: "control" },
    { name: "Control6", text: "wait until", currentScreen: "drag", type: "control" },
    { name: "Control7", text: "repeat until", currentScreen: "drag", type: "control" },
    { name: "Control8", text: "stop all", currentScreen: "drag", type: "control" },
    { name: "Control9", text: "when I start as a clone", currentScreen: "drag", type: "control" },
    { name: "Control10", text: "create clone of myself", currentScreen: "drag", type: "control" },
    { name: "Control11", text: "delete this clone", currentScreen: "drag", type: "control" },
  ]);

  const [typeOne, setTypeOne] = React.useState("");
  const [typeTwo, setTypeTwo] = React.useState("");
  const [typeThree, setTypeThree] = React.useState("");
  const [typeFour, setTypeFour] = React.useState("");
  const [currentDrag, setCurrentDrag] = React.useState({});

  const onDragStart = (ev, id) => {
    console.log('dragstart:', tasks[0].name);
    let currentId = "";
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].name == id) {
        currentId = tasks[i].name;
        setCurrentDrag(tasks[i]);
      }
    }
    ev.dataTransfer.setData("id", currentId);
  }

  const onDragOver = (ev) => {
    ev.preventDefault();
  }

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    console.log("id", id);
    let task = tasks.filter((currenttask) => {
      if (currenttask.name == id) {
        currenttask.currentScreen = cat;
        console.log("current", currenttask);
        console.log("cat", cat);
        currenttask.type == "events" ? setTypeOne(currenttask.type) : (currenttask.type == "motion" ? setTypeTwo(currenttask.type) : (currenttask.type == "looks" ? setTypeThree(currenttask.type) : setTypeFour(currenttask.type)));
      }
      return currenttask;
    });
    console.log(task);
    setTasks(task);
  }

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            onDragStart={(ev, id) => onDragStart(ev, id)} />
          <MidArea
            onDragOver={(ev) => onDragOver(ev)}
            onDrop={(e) => onDrop(e, "drop")}
            typeOne={typeOne}
            typeTwo={typeTwo}
            typeThree={typeThree}
            typeFour={typeFour}
            list={tasks}
            currentDrag={currentDrag} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
