import React from 'react';

export class TaskComponent extends React.Component {

    render() {
        return(
            <tr className="task" key={this.props.id}>
                    <td>{this.props.name}</td>
                    <td><button onClick={(e) => this.props.deleteTask(this.props.id)}>完了</button></td>
            </tr>

        )
    }
}