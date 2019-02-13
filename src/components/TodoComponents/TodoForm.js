import React from 'react';
import PropTypes from 'prop-types';

const ToDoForm = () => (
  <form>
    <input />
    <button type="button" onClick={() => console.log('added')}>Add ToDo</button>
    <button type="button" onClick={() => console.log('cleared')}>Clear Completed</button>
  </form>
);

export default ToDoForm;
