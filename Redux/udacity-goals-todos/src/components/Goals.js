import { connect } from "react-redux";
import { useRef } from "react";
import List from "./List";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
const Goals = (props) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();

    props.dispatch(
      handleAddGoal(inputRef.current.value, () => (inputRef.current.value = ""))
    );
  };

  const removeItem = (goal) => {
    props.dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h1>Goal List</h1>
      <input type="text" placeholder="Add Goal" ref={inputRef} />
      <button onClick={addItem}>Add Goal</button>
      <List items={props.goals} remove={removeItem} />
    </div>
  );
};

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
