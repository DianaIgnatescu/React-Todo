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
          task: 'Make a To Do List',
          id: '1',
          completed: true,
        },
        {
          task: 'Pet Llama',
          id: '2',
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: '3',
          completed: true,
        },
        {
          task: 'Try To Take Over The World',
          id: '4',
          completed: false,
        },
        {
          task: 'Water Plants',
          id: '5',
          completed: false,
        },
        {
          task: 'Complain about the weather',
          id: '6',
          completed: true,
        },
      ],
      text: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.markAsComplete = this.markAsComplete.bind(this);
    this.markAsIncomplete = this.markAsIncomplete.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  markAsComplete(id) {
    let index;
    this.state.items.forEach((item, i) => {
      if (item.id === id) {
        index = i;
      }
    });
    const newItems = [...this.state.items];
    newItems[index].completed = true;
    this.setState({
      items: [...newItems],
    });
  }

  markAsIncomplete(id) {
    console.log('happened');
    let index;
    this.state.items.forEach((item, i) => {
      if (item.id === id) {
        index = i;
      }
    });
    const newItems = [...this.state.items];
    newItems[index].completed = false;
    this.setState({
      items: [...newItems],
    });
  }

  addNewItem(newItem) {
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: [...newItems],
      text: '',
    });
  }

  clearItems() {
    this.setState({
      items: [],
    });
  }

  clearCompleted() {
    const incompleteItems = this.state.items.filter(item => !item.completed);
    this.setState({
      items: [...incompleteItems],
    });
  }

  changeHandler(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="app">
        <h2>Things To Do</h2>
        <TodoList
          items={this.state.items}
          markAsComplete={this.markAsComplete}
          markAsIncomplete={this.markAsIncomplete}
        />
        <ToDoForm
          changeHandler={this.changeHandler}
          clearItems={() => this.clearItems()}
          text={this.state.text}
          addNewItem={this.addNewItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
