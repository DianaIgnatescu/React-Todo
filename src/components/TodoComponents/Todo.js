import React from 'react';
import PropTypes from 'prop-types';

const Todo = () => <div>{task}</div>;

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
