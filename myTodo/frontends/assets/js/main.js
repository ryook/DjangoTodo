import React from 'react';
import ReactDOM from 'react-dom';

import {ListComponent} from './list-component';
import {FormComponent} from "./form-component";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    name: "react"
                },
                {
                    id: 2,
                    name: "django"
                }
            ]
        }
    }

    addTask(e){
        e.preventDefault();
        const name = e.target.name.value;
        const todos = this.state.todos.slice();

        todos.push({
            id: todos.length + 1,
            name: name
        });

        this.setState({ todos });
        e.target.name.value = '';
    };

    deleteTask(id) {
        const todos = this.state.todos.slice();
        todos.some((v, i) => {
            if(v.id==id){
                todos.splice(i, 1);
            }
        });
        this.setState({ todos });
    }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <FormComponent addTask={this.addTask.bind(this)}/>
        <ListComponent todos={this.state.todos} deleteTask={this.deleteTask.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));