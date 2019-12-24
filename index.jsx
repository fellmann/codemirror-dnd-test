import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { DndProvider, useDrop } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import ReactDOM from "react-dom";

import "codemirror/lib/codemirror.css";

const DropTarget = props => {
  const [collectedProps, drop] = useDrop({
    accept: "test"
  });

  return <div ref={drop}>Drop Target</div>;
};

class Test extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#ccc" }}>
        <div style={{ border: "1px solid black" }}>
          <CodeMirror value="Try to drag some text" />
        </div>
        <div style={{ border: "1px solid black" }}>
          <DndProvider backend={Backend}>
            <DropTarget />
          </DndProvider>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("editor"));
