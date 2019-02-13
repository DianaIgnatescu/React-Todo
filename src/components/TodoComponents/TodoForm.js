import React from 'react';
import PropTypes from 'prop-types';

const ToDoForm = ({
  changeHandler, addNewItem, text, clearCompleted,
}) => (
  <form>
    <input
      id="new-task"
      onChange={changeHandler}
      placeholder="Add a new task"
      value={text}
    />

    <button type="button" onClick={() => addNewItem({ id: String(Date.now()), completed: false, task: text })}>
      Add ToDo
    </button>

    <button type="button" onClick={clearCompleted}>
      Clear Completed
    </button>
  </form>
);

ToDoForm.propTypes = {
  addNewItem: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  clearCompleted: PropTypes.func.isRequired,
};

ToDoForm.defaultProps = {
  text: '',
};

export default ToDoForm;
