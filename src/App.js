import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
// import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          task: 'Organize Garage',
          id: '1',
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: '2',
          completed: true,
        },
        {
          task: 'Try To Take Over The World',
          id: '3',
          completed: false,
        },
      ],
      text: '',
      newTask: '',
    };
  }

  addNewItem(newItem) {
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: [...newItems],
      text: '',
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="app">
        <h2>Things To Do</h2>
        <TodoList items={this.state.items} />
        <ToDoForm
          handleChange={this.handleChange.bind(this)}
          text={this.state.text}
          addNewItem={this.addNewItem.bind(this)}
        />
      </div>
    );
  }
}

export default App;
