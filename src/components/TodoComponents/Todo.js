import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  task, completed, markAsComplete, markAsIncomplete,
}) => {
  if (completed) {
    return <div className="task-completed" onClick={markAsIncomplete}>{task}</div>;
  }
  return <div onClick={markAsComplete}>{task}</div>;
};

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  markAsComplete: PropTypes.func.isRequired,
  markAsIncomplete: PropTypes.func.isRequired,
};

export default Todo;
