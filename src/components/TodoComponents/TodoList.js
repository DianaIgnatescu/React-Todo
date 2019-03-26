import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = ({ items, markAsComplete, markAsIncomplete }) => (
  <div className="list-container">
    {items.map(item => (
      <Todo
        key={`todo-${item.id}`}
        task={item.task}
        id={item.id}
        completed={item.completed}
        markAsComplete={() => markAsComplete(item.id)}
        markAsIncomplete={() => markAsIncomplete(item.id)}
      />
    ))}
  </div>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    task: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  markAsComplete: PropTypes.func.isRequired,
  markAsIncomplete: PropTypes.func.isRequired,
};

export default TodoList;
