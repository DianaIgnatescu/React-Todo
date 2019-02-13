import React from 'react';
import PropTypes from 'prop-types';

const ToDoForm = ({ handleChange, addNewItem, text }) => (
  <form>
    <input
      id="new-task"
      onChange={handleChange}
      placeholder="Add a new task"
      value={text}
    />
    <button type="button" onClick={() => addNewItem({ id: String(Date.now()), completed: false, task: text })}>Add ToDo</button>
    <button type="button" onClick={() => console.log('cleared')}>Clear Completed</button>
  </form>
);

ToDoForm.protoTypes = {
  addNewItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string,
};

ToDoForm.defaultProps = {
  text: '',
};

export default ToDoForm;
