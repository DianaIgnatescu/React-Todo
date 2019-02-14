import React from 'react';
import PropTypes from 'prop-types';

const valueToItem = value => ({
  id: String(Date.now()),
  completed: false,
  task: value,
});

const handleEnterKeyPressed = addNewItem => (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addNewItem(valueToItem(event.target.value));
  }
};

const ToDoForm = ({
  changeHandler, addNewItem, text, clearCompleted, clearItems,
}) => (
  <form className="form-container">
    <div className="input-container">
      <input
        id="new-task"
        onChange={changeHandler}
        onKeyDown={handleEnterKeyPressed(addNewItem)}
        placeholder="Add a new task"
        value={text}
      />

      <button className="add-button" type="button" onClick={() => addNewItem(valueToItem(text))}>
        +
      </button>
    </div>
    <div className="button-container">
      <button type="button" onClick={clearCompleted}>
        Clear Completed
      </button>

      <button type="button" onClick={clearItems}>
        Clear All
      </button>
    </div>


  </form>
);

ToDoForm.propTypes = {
  addNewItem: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  clearCompleted: PropTypes.func.isRequired,
  clearItems: PropTypes.func.isRequired,
};

ToDoForm.defaultProps = {
  text: '',
};

export default ToDoForm;
