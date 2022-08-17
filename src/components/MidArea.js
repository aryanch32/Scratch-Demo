import React from "react";
import Motion from "./Motion";
import Events from "./Events";
import Looks from "./Looks";
import Control from "./Control";


export default function MidArea(props) {

  const [name] = React.useState({ motionName: "", eventName: "", looksName: "", controlName: "" });

  const onDragOver = (ev) => {
    ev.preventDefault();
    props.onDragOver(ev);
  }

  const onDrop = (e) => {
    props.onDrop(e);
  }

  const currentDrag = () => {
    // let name = {motionName: "", eventName: ""};
    for (let i = 0; i < props.list.length; i++) {
      if (props.currentDrag.name == props.list[i].name) {
        if (props.currentDrag.type == "motion") {
          name.motionName = props.currentDrag.text;
        }
        else if (props.currentDrag.type == "events") {
          name.eventName = props.currentDrag.text;
        }
        else if (props.currentDrag.type == "looks") {
          name.looksName = props.currentDrag.text;
        }
        else {
          name.controlName = props.currentDrag.text;
        }
      }
    }
    return name;
  }

  const handleMotion = () => {
    console.log("handlemotion");
  }

  const toRender = (i) => {
    switch (i.type) {
      case "events":
        return (<Events text={i.text} />)
        break;
      case "motion":
        return (<Motion text={i.text} onClick={props.move} />)
        break;
      case "looks":
        return (<Looks text={i.text} />)
        break;
      case "control":
        return (<Control text={i.text} />)
    }
  }

  return (
    <>
      <div className="droppable"
        onDrop={(e) => onDrop(e)}
        onDragOver={(ev) => onDragOver(ev)}
      >
        <span className="task-header">Script Area</span>
        {props.draggedComponents.length > 0 && props.draggedComponents.map((i) => toRender(i))}
      </div>
    </>
  );
}
