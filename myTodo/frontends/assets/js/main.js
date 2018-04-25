import React from 'react';
import ReactDOM from 'react-dom';

import {ListComponent} from './list-component';
import {FormComponent} from "./form-component";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    fetchTask(){
        fetch('/api/task/')
            .then(res => res.json())
            .then(data => {
                this.state.todos = data
                this.setState({todos: this.state.todos})
            })
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.fetchTask();
    }

    addTask(e){
        e.preventDefault();
        const name = e.target.name.value;
        const todos = this.state.todos.slice();

        fetch('/api/task/', {
            method: 'POST',
            body: JSON.stringify({'name': name}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            if(res.ok){
                return res.json()
            };
        }).then(data => {
            todos.push({
                id: data.id,
                name: name
            });
            this.setState({ todos });
        })
        .catch(error => console.log(error));
        e.target.name.value = '';
    };

    deleteTask(id) {
        const todos = this.state.todos.slice();

        fetch('/api/task/' + id + '/', {
            method: 'delete'
        }).then(res => {
            if(res.ok){
               todos.some((v, i) => {
                if(v.id==id){
                            todos.splice(i, 1);
                        }
                    });
                this.setState({ todos });
            };
        });
    };

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