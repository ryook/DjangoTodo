import React from 'react';
import {TaskComponent} from './task-component';

export class ListComponent extends React.Component {

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

    render() {
        const todos = this.state.todos.map( todo =>
                <TaskComponent key={todo.id} {...todo}/>
            );

        return (
            <table>
                {todos}
            </table>
        );

    }

}