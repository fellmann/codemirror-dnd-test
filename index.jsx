import React from "react";
import { DndProvider, useDrop } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import ReactDOM from "react-dom";

const DropTarget = props => {
  const [collectedProps, drop] = useDrop({
    accept: "test"
  });

  return <div ref={drop}>DndProvider -> useDrop</div>;
};
class Test extends React.Component {
  constructor() {
    super();
    this.state = { showTest: true };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#ccc" }}>
        <input
          id="check"
          type="checkbox"
          checked={this.state.showTest}
          onChange={() => this.setState({ showTest: !this.state.showTest })}
        />{" "}
        <label htmlFor="check"> Enable React Dnd</label>
        {this.state.showTest && (
          <div style={{ border: "1px solid black" }}>
            <DndProvider backend={Backend}>
              <DropTarget />
            </DndProvider>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("editor"));
