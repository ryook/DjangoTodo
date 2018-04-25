import React from 'react';
import {TaskComponent} from "./task-component";

export class ListComponent extends React.Component {

    render() {
        const todos = this.props.todos.map( todo =>
            <TaskComponent key={todo.id} {...todo} deleteTask={this.props.deleteTask}/>
        );

        return (
            <table>
                <tbody>
                    {todos}
                </tbody>
            </table>
        );

    }

}